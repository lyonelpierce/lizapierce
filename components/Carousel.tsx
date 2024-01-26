"use client";

import { cn } from "@/lib/utils";

import { ProductWithDetails } from "@/types/ProductVariants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import WidthWrapper from "./WidthWrapper";
import ProductCards from "./ProductCard";

const CarouselComponent = ({
  products,
  className,
  title,
}: {
  products: ProductWithDetails[];
  className?: string;
  title: string;
}) => {
  return (
    <>
      {products.length > 0 && (
        <WidthWrapper className="pt-0 md:pt-0 md:h-full">
          <div className="flex flex-col items-center justify-center w-full space-y-8">
            <div className="flex h-20">
              <Badge
                className={cn(
                  "px-6 py-0 h-10 bg-zinc-900 hover:bg-zinc-900 font-normal",
                  className
                )}
              >
                {title.split(" ")[0]}
              </Badge>
              <span className={cn("mt-6 -ml-4", className)}>
                {title.split(" ")[1]}
              </span>
            </div>
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {products.map((product) => (
                  <CarouselItem
                    className="basis-1/2 md:basis-1/5 lg:basis-1/5 flex items-center"
                    key={product.id}
                  >
                    <ProductCards product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </WidthWrapper>
      )}
    </>
  );
};

export default CarouselComponent;
