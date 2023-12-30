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

import CanvasComponent from "@/components/CanvasComponent";
import ElizabethRing from "@/components/ElizabethRing";
import CustomizeForm from "@/components/CustomizeForm";

type ProductWithVariants = Product & {
  variants: Variant[];
};

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
      variants: true,
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
  const productVariants = product.variants.map((variant) => variant.id);

  const variants = await prismadb.variant.findMany({
    where: {
      id: {
        in: productVariants,
      },
    },
    include: {
      gem: true,
      material: true,
      size: true,
    },
  });

  const gems = await prismadb.gem.findMany({
    where: {
      variants: {
        some: {
          id: {
            in: productVariants,
          },
        },
      },
    },
    orderBy: {
      value: "asc",
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      variants: {
        some: {
          id: {
            in: productVariants,
          },
        },
      },
    },
    orderBy: {
      value: "asc",
    },
  });

  const materials = await prismadb.material.findMany({
    where: {
      variants: {
        some: {
          id: {
            in: productVariants,
          },
        },
      },
    },
  });

  return (
    <div className="h-full bg-black pt-32">
      <TooltipProvider>
        <div className="max-w-7xl mx-auto px-4 text-sm font-medium h-full">
          <div className="flex h-full">
            <div className="w-2/3 h-4/5">
              {/* <CanvasComponent /> */}
              {/* <ElizabethRing /> */}
              {/* </CanvasComponent> */}
            </div>
            <div className="space-y-4 w-1/3">
              <h3 className="text-3xl font-light leading-3">{product.name}</h3>
              <h4 className="text-xl font-light">
                {formatter.format(product.basePrice)}
              </h4>
              <CustomizeForm
                gems={gems}
                sizes={sizes}
                materials={materials}
                variants={variants}
              />
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
        </div>
      </TooltipProvider>
    </div>
  );
};

export default ProductPage;
