"use client";

import { useParams, useSearchParams } from "next/navigation";

import CanvasComponent from "./CanvasComponent";
import ElizabethRing from "./models/ElizabethRing";

const Render = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const gem = searchParams.get("gem")?.toLowerCase();
  const material = searchParams.get("material")?.toLowerCase();

  const { productId } = params;

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
