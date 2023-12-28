"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Loader,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Settings } from "lucide-react";

import { Model } from "@/components/Scene";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-black h-full">
      <div className="max-w-7xl mx-auto h-full px-4">
        <div className="relative w-full h-full">
          <Canvas
            camera={{ position: [5, 10, 5], fov: 45 }}
            className="absolute block top-0 left-0 z-10"
            gl={{ antialias: true }}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <PresentationControls
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Suspense fallback={null}>
                <Model position={[0, -2, 0]} scale={1.5} />
              </Suspense>
            </PresentationControls>
            <Environment files="https://demo-assets.pixotronics.com/pixo/presets/environment/env-metal-1.hdr" />
            <OrbitControls
              makeDefault
              autoRotate
              autoRotateSpeed={5}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
            />
            <EffectComposer>
              <Bloom
                luminanceThreshold={1}
                intensity={1}
                levels={8}
                mipmapBlur
              />
            </EffectComposer>
          </Canvas>
          {/* <Loader /> */}
          <div className="absolute top-60 left-1/2 transform -translate-x-1/2 max-w-7xl mx-auto z-0">
            <h2 className="text-[12rem] font-black uppercase text-end leading-none text-zinc-950">
              Elizabeth Ring
            </h2>
          </div>
          <div className="absolute bottom-40 left-0 max-w-7xl mx-auto z-20">
            <h1 className="uppercase text-7xl font-semibold w-1/2">
              Craft your masterpiece in real time
            </h1>
            <div className="border rounded-full flex w-[250px] mt-8">
              <Button variant="white" className="flex gap-1 w-1/2">
                <Settings className="w-4 h-4" />
                Customize
              </Button>
              <Button variant="link" className="text-white text-xs w-1/2">
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
