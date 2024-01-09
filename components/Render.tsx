"use client";

import { useSearchParams } from "next/navigation";

import CanvasComponent from "./CanvasComponent";
import ElizabethRing from "./ElizabethRing";

const Render = () => {
  const searchParams = useSearchParams();

  const gem = searchParams.get("gem")?.toLowerCase();
  const material = searchParams.get("material")?.toLowerCase();

  return (
    <CanvasComponent level={6} intensity={0.3}>
      <ElizabethRing
        positionY={-2.5}
        scale={1.6}
        gem={gem as string}
        material={material as string}
      />
    </CanvasComponent>
  );
};

export default Render;
