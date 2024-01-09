import { Metadata } from "next";
import { notFound } from "next/navigation";
import prismadb from "@/lib/prismadb";

import { ProductDetails } from "@/types/ProductVariants";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SafePayment from "@/components/SafePayment";
import Variants from "@/components/Variants";
import Render from "@/components/Render";
import AddToCart from "@/components/AddToCartButton";
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
      options: {
        orderBy: {
          name: "desc",
        },
      },
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
          <Card className="w-1/3 h-full">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <DynamicPrice
                variants={product.variants}
                basePrice={product.basePrice}
              />
              <Separator className="bg-zinc-800 my-4" />
            </CardHeader>
            <CardContent className="px-5">
              <Variants options={product.options} variants={product.variants} />
              <AddToCart
                forSale={product.forSale}
                variants={product.variants}
                name={product.name}
              />
              <Separator className="bg-zinc-800 my-4" />
            </CardContent>
            <CardFooter>
              <SafePayment />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
