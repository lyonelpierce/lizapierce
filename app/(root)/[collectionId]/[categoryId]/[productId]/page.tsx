import prismadb from "@/lib/prismadb";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { formatter } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { ProductDetails } from "@/types/ProductVariants";

import { Separator } from "@/components/ui/separator";
import SafePayment from "@/components/SafePayment";

import Variants from "@/components/Variants";
import Render from "@/components/Render";
import AddToCart from "@/components/AddToCart";

async function getProduct({
  params,
}: {
  params: { productId: string };
}): Promise<ProductDetails> {
  const product = await prismadb.product.findUnique({
    where: {
      slug: params.productId,
    },
    include: {
      options: true,
      variants: {
        include: {
          options: {
            select: {
              name: true,
              value: true,
            },
          },
        },
      },
    },
  });

  if (!product) return notFound();

  return product;
}

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProduct({ params });

  return {
    title: product.name,
  };
}

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct({ params });

  return (
    <div className="h-full bg-black pt-32">
      <div className="max-w-7xl mx-auto px-4 text-sm font-medium h-full">
        <div className="flex gap-8">
          <div className="w-2/3">
            <Render />
          </div>
          <div className="flex flex-col w-1/3 bg-zinc-950 border border-zinc-800 p-5 rounded-lg">
            <div className="flex flex-col">
              <Label className="text-2xl">{product.name}</Label>
              <Label className="text-lg">
                {formatter.format(product.basePrice)}
              </Label>
            </div>
            <Separator className="bg-zinc-800 my-4" />
            <Variants options={product.options} variants={product.variants} />
            <AddToCart forSale={product.forSale} variants={product.variants} />
            <Separator className="bg-zinc-800 my-4" />
            <SafePayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
