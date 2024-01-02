"use client";

import Link from "next/link";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import CanvasComponent from "./CanvasComponent";
import ElizabethRing from "@/components/ElizabethRing";

const Hero = () => {
  return (
    <div className="bg-black h-full">
      <div className="h-full px-4">
        <div className="relative w-full h-dvh">
          <CanvasComponent level={9}>
            <ElizabethRing material="silver" positionY={-1} scale={1.3} />
          </CanvasComponent>
          <div className="absolute top-60 left-1/2 transform -translate-x-1/2 z-0">
            <h2 className="text-[12rem] font-black uppercase text-end leading-none text-zinc-950">
              Elizabeth Ring
            </h2>
          </div>
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20">
            <h1 className="uppercase text-7xl font-semibold w-1/2">
              Craft your masterpiece in real time
            </h1>
            <div className="border rounded-full flex mt-8 w-fit">
              <Link href="/elizabeth/rings/elizabeth-ring" className="w-1/2">
                <Button variant="white" className="flex gap-1 w-full">
                  <Settings className="w-8 h-8" />
                  Customize
                </Button>
              </Link>
              <Link
                href="/elizabeth/rings/elizabeth-ring/customize"
                className="w-1/2"
              >
                <Button variant="link" className="text-white text-xs w-full">
                  View More
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
