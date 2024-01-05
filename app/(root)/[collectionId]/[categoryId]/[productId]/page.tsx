import prismadb from "@/lib/prismadb";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Product, Variant } from "@prisma/client";

import { cn, formatter } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProductWithVariants } from "@/types/ProductWithVariants";

import CustomizeForm from "@/components/CustomizeForm";

async function getProduct({
  params,
}: {
  params: { productId: string };
}): Promise<ProductWithVariants> {
  const product = await prismadb.product.findUnique({
    where: {
      slug: params.productId,
    },
    include: {
      variants: {
        include: {
          size: true,
          gem: true,
          material: true,
          karat: true,
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
      <TooltipProvider>
        <div className="max-w-7xl mx-auto px-4 text-sm font-medium h-full">
          <div className="flex flex-col gap-8 h-full">
            <div className="h-2/3">
              <CustomizeForm product={product} />
            </div>
            <div className="bg-zinc-900 h-1/3 w-full rounded-xl">Reviews</div>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ProductPage;
