"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Perf } from "r3f-perf";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { cn } from "@/lib/utils";

const containerStyles = {
  backgroundColor: "black",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textStyles = {
  color: "white",
  fontSize: "0.7rem",
  fontWeight: 500,
  textTransform: "uppercase",
};

const CanvasComponent = ({
  children,
  className,
  level,
  intensity,
}: {
  children: React.ReactNode;
  className?: string;
  level: number;
  intensity: number;
}) => {
  return (
    <>
      <Canvas
        camera={{ position: [5, 10, 5], fov: 45 }}
        className={cn("w-full z-10", className)}
        gl={{ antialias: true }}
      >
        <Perf />
        <ambientLight intensity={0} />
        <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>{children}</Suspense>
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
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <Bloom
            luminanceThreshold={1}
            luminanceSmoothing={0.9}
            intensity={intensity}
            levels={level}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
      <Loader containerStyles={containerStyles} dataStyles={textStyles} />
    </>
  );
};

export default CanvasComponent;
