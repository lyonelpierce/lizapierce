import { Metadata } from "next";
import { notFound } from "next/navigation";

import prismadb from "@/lib/prismadb";

import { Category } from "@prisma/client";

import WidthWrapper from "@/components/WidthWrapper";
import ImageComponent from "@/components/ImageComponent";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Filter from "@/components/Filter";
import FilteredProducts from "@/components/FilteredProducts";

export const revalidate = 0;

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
      options: true,
      variants: {
        include: {
          options: true,
        },
      },
    },
  });

  return (
    <WidthWrapper className="md:h-full">
      <ImageComponent image="/images/partner.jpg" text={params.categoryId} />
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-80 md:min-w-80 md:max-w-80 md:min-h-min">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <Filter products={products} />
            </CardContent>
          </Card>
        </div>
        <FilteredProducts products={products} />
      </div>
    </WidthWrapper>
  );
};

export default CategoryPage;
