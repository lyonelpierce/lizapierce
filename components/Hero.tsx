"use client";

import Link from "next/link";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import CanvasComponent from "./CanvasComponent";
import ElizabethRing from "@/components/models/ElizabethRing";
import { Model } from "./models/Scene";

const Hero = () => {
  return (
    <div className="bg-black h-full">
      <div className="h-full">
        <div className="relative h-dvh flex justify-center w-full">
          <CanvasComponent level={9} intensity={0.85} className="w-dvw">
            <ElizabethRing
              material="silver"
              positionY={-1}
              scale={1.3}
              gem="diamond"
            />
          </CanvasComponent>
          <div className="absolute top-24 lg:top-28 2xl:top-60 left-1/2 transform -translate-x-1/2 z-0">
            <h2 className="text-6xl xl:text-[10rem] 2xl:text-[12rem] font-black uppercase text-end leading-none text-zinc-950 select-none">
              Elizabeth Ring
            </h2>
          </div>
          <div className="absolute max-w-7xl px-4 bottom-8 lg:bottom-20 2xl:bottom-40 z-20">
            <h1 className="uppercase text-4xl md:text-7xl font-semibold w-full md:w-1/2 select-none">
              Craft your masterpiece in real time
            </h1>
            <div className="border rounded-full flex mt-8 w-fit">
              <Link href="/elizabeth/rings/elizabeth-ring" className="w-1/2">
                <Button variant="white" className="flex gap-1 w-full">
                  <Settings className="w-4 h-4" />
                  Customize
                </Button>
              </Link>
              <Link href="#" className="w-1/2">
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
