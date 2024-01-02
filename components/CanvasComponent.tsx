"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { cn } from "@/lib/utils";

const CanvasComponent = ({
  children,
  className,
  level,
}: {
  children: React.ReactNode;
  className?: string;
  level: number;
}) => {
  return (
    <Canvas
      camera={{ position: [5, 10, 5], fov: 45 }}
      className={cn("w-full z-10", className)}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <PresentationControls
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </PresentationControls>
      <Environment files="https://demo-assets.pixotronics.com/pixo/presets/environment/env-metal-1.hdr" />
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={3}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={1} levels={level} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
};

export default CanvasComponent;
