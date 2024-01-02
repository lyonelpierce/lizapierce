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
          <div className="flex h-full">
            <CustomizeForm product={product} />
            {/* <div className="space-y-2">
                <Label>Size</Label>
                <ul className="flex gap-2">
                  {sortedSizes.map((size) => (
                    <li
                      key={size}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 cursor-pointer"
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <Label>Gem</Label>
                <div className="flex gap-2">
                  {gems.map((gem) => (
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          key={gem}
                          className={cn(
                            "flex items-center justify-center w-10 h-10 border rounded-full border-none cursor-pointer",
                            gem === "diamond" &&
                              "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-200 via-white to-sky-200"
                          )}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="capitalize">{gem}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>Material</Label>
                <ul className="flex gap-2">
                  {materials.map((size) => (
                    <li
                      key={size}
                      className="flex items-center justify-center w-10 h-10 border rounded-full"
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div> */}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ProductPage;
