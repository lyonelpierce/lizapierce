"use client";

import dynamic from "next/dynamic";
import { useParams, useSearchParams } from "next/navigation";

import CanvasComponent from "./CanvasComponent";

const Render = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const gem = searchParams.get("gem")?.toLowerCase();
  const material = searchParams.get("material")?.toLowerCase();

  const { productId } = params;

  const ElizabethComponent =
    productId === "elizabeth-ring"
      ? dynamic(() => import("./models/ElizabethRing"))
      : dynamic(() => import("./models/ElizabethEarrings"));

  return (
    <CanvasComponent level={6} intensity={0.3} className="cursor-pointer">
      <ElizabethComponent
        positionY={-2.5}
        scale={1.5}
        gem={gem as string}
        material={material as string}
      />
    </CanvasComponent>
  );
};

export default Render;
