import { Metadata } from "next";
import { notFound } from "next/navigation";

import prismadb from "@/lib/prismadb";

import WidthWrapper from "@/components/WidthWrapper";
import { Category } from "@prisma/client";
import ImageComponent from "@/components/ImageComponent";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import ProductCards from "@/components/ProductCards";

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
      <ImageComponent image="/images/partner.jpg" text="Rings" />
      <div className="grid grid-cols-6">
        {products.map((product) => (
          <ProductCards product={product} />
        ))}
      </div>
    </WidthWrapper>
  );
};

export default CategoryPage;
