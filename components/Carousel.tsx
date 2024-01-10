"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Product } from "@prisma/client";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import { useParams } from "next/navigation";

const CarouselComponent = ({ products }: { products: Product[] }) => {
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
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem className="basis-1/4">
                  <Card className="bg-zinc-950 border rounded-3xl text-white overflow-hidden">
                    <Image
                      src={product.image}
                      alt="Heart Ring"
                      width={600}
                      height={600}
                      className="w-full h-full rounded-3xl aspect-square object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="white" className="gap-1">
                        <Settings className="w-4 h-4" />
                        Customize
                      </Button>
                    </CardFooter>
                  </Card>
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
