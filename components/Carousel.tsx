"use client";

import Link from "next/link";
import Image from "next/image";
import { cn, formatter } from "@/lib/utils";
import { Product } from "@prisma/client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WidthWrapper from "./WidthWrapper";

interface ProductWithDetails extends Product {
  collection: {
    slug: string;
  };
  category: {
    slug: string;
  };
}

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
                className="basis-1/2 lg:basis-1/5 flex items-center"
                key={product.id}
              >
                <Link
                  href={`/collections/${product.collection.slug}/categories/${product.category.slug}/products/${product.slug}`}
                  className="w-full h-full"
                >
                  <Card className="bg-zinc-950 h-full border rounded-3xl text-white overflow-hidden transition-all hover:bg-zinc-900 hover:border-white hover:scale-105 cursor-pointer">
                    <Image
                      src={product.image}
                      alt="Heart Ring"
                      width={600}
                      height={600}
                      className="w-full rounded-3xl aspect-square object-cover"
                    />
                    <CardHeader className="flex flex-col justify-between">
                      <CardTitle className="text-base md:text-lg">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-zinc-500">
                        {formatter.format(product.minPrice)} +
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </WidthWrapper>
  );
};

export default CarouselComponent;
