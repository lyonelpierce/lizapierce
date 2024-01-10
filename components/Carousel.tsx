"use client";

import Link from "next/link";
import Image from "next/image";
import { formatter } from "@/lib/utils";
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
}: {
  products: ProductWithDetails[];
}) => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center w-full space-y-8">
          <div className="flex h-20">
            <Badge className="text-4xl px-8 py-0 h-12 bg-zinc-900 hover:bg-zinc-900 font-normal">
              New
            </Badge>
            <span className="text-4xl mt-8 -ml-8">Collection</span>
          </div>
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {products.map((product) => (
                <CarouselItem
                  className="basis-1/5 h-96 flex items-center"
                  key={product.id}
                >
                  <Link
                    href={`${product.collection.slug}/${product.category.slug}/${product.slug}`}
                  >
                    <Card className="bg-zinc-950 border rounded-3xl text-white overflow-hidden transition-all hover:bg-zinc-900 hover:border-white hover:scale-105 cursor-pointer">
                      <Image
                        src={product.image}
                        alt="Heart Ring"
                        width={600}
                        height={600}
                        className="w-full h-full rounded-3xl aspect-square object-cover"
                      />
                      <CardHeader>
                        <CardTitle className="text-lg">
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
      </div>
    </div>
  );
};

export default CarouselComponent;
