"use client";

import CanvasComponent from "./CanvasComponent";
import ElizabethRing from "./ElizabethRing";

const Render = () => {
  return (
    <CanvasComponent level={6} intensity={0.3}>
      <ElizabethRing positionY={-2.5} scale={1.6} />
    </CanvasComponent>
  );
};

export default Render;
