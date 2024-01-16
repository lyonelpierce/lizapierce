import { Metadata } from "next";
import { notFound } from "next/navigation";

import prismadb from "@/lib/prismadb";

import { Category } from "@prisma/client";

import WidthWrapper from "@/components/WidthWrapper";
import ImageComponent from "@/components/ImageComponent";
import ProductCards from "@/components/ProductCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getCategory({
  params,
}: {
  params: { categoryId: string };
}): Promise<Category> {
  const category = await prismadb.category.findUnique({
    where: {
      slug: params.categoryId,
    },
  });

  if (!category) return notFound();

  return category;
}

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}): Promise<Metadata> {
  const category = await prismadb.category.findUnique({
    where: {
      slug: params.categoryId,
    },
  });

  if (!category) return notFound();

  return {
    title: category.name,
  };
}

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await getCategory({ params });

  if (!category) return notFound();

  const products = await prismadb.product.findMany({
    where: {
      categoryId: category.id,
      forSale: true,
    },
    include: {
      collection: {
        select: {
          slug: true,
        },
      },
      category: {
        select: {
          slug: true,
        },
      },
    },
  });

  return (
    <WidthWrapper>
      <ImageComponent image="/images/partner.jpg" text={params.categoryId} />
      <div className="flex gap-5">
        <div className="w-1/4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-5 w-3/4">
          {products.map((product) => (
            <ProductCards key={product.name} product={product} />
          ))}
        </div>
      </div>
    </WidthWrapper>
  );
};

export default CategoryPage;
