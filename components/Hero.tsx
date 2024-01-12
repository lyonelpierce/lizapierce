"use client";

import Link from "next/link";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import CanvasComponent from "./CanvasComponent";
import ElizabethRing from "@/components/models/ElizabethRing";

const Hero = () => {
  return (
    <div className="bg-black h-full">
      <div className="h-full">
        <div className="relative h-dvh flex justify-center">
          <CanvasComponent level={9} intensity={0.85} className="w-dvw">
            <ElizabethRing
              material="silver"
              positionY={-1}
              scale={1.3}
              gem="diamond"
            />
          </CanvasComponent>
          <div className="absolute lg:top-28 2xl:top-60 left-1/2 transform -translate-x-1/2 z-0">
            <h2 className="xl:text-[10rem] xl 2xl:text-[12rem] font-black uppercase text-end leading-none text-zinc-950">
              Elizabeth Ring
            </h2>
          </div>
          <div className="absolute max-w-7xl px-4 md:bottom-12 lg:bottom-20 2xl:bottom-40 z-20">
            <h1 className="uppercase text-7xl font-semibold w-1/2">
              Craft your masterpiece in real time
            </h1>
            <div className="border rounded-full flex mt-8 w-fit">
              <Link
                href="/collections/elizabeth/categories/rings/products/elizabeth-ring"
                className="w-1/2"
              >
                <Button variant="white" className="flex gap-1 w-full">
                  <Settings className="w-4 h-4" />
                  Customize
                </Button>
              </Link>
              <Link href="/elizabeth" className="w-1/2">
                <Button variant="link" className="text-white text-xs w-full">
                  View Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
