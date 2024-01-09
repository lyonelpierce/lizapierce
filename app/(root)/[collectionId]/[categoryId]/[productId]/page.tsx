import { Metadata } from "next";
import { notFound } from "next/navigation";
import prismadb from "@/lib/prismadb";

import { formatter } from "@/lib/utils";
import { ProductDetails } from "@/types/ProductVariants";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import SafePayment from "@/components/SafePayment";
import Variants from "@/components/Variants";
import Render from "@/components/Render";
import AddToCart from "@/components/AddToCartButton";
import ClearButton from "@/components/ClearButton";
import DynamicPrice from "@/components/DynamicPrice";

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
    <div className="h-screen bg-black pt-32">
      <div className="max-w-7xl mx-auto px-4 text-sm font-medium h-full">
        <div className="flex gap-8">
          <div className="w-2/3">
            <Render />
          </div>
          <div className="flex flex-col w-1/3 bg-zinc-950 border border-zinc-800 p-5 rounded-lg">
            <div className="flex flex-col">
              <Label className="text-2xl">{product.name}</Label>
              <DynamicPrice
                variants={product.variants}
                basePrice={product.basePrice}
              />
            </div>
            <Separator className="bg-zinc-800 my-4" />
            <Variants options={product.options} variants={product.variants} />
            <div className="flex gap-1 items-center">
              <AddToCart
                forSale={product.forSale}
                variants={product.variants}
                name={product.name}
              />
              <ClearButton variants={product.variants} />
            </div>
            <Separator className="bg-zinc-800 my-4" />
            <SafePayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
