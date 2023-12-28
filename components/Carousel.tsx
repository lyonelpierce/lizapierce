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

const CarouselComponent = () => {
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
              <CarouselItem className="basis-1/4">
                <Card className="bg-zinc-900 border-none rounded-3xl text-white overflow-hidden">
                  <Image
                    src="/images/rings/heart.webp"
                    alt="Heart Ring"
                    width={600}
                    height={800}
                    className="w-full h-full overflow-hidden rounded-3xl"
                  />
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
