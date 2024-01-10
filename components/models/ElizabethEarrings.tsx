import * as THREE from "three";
import React, { useRef } from "react";
import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Brillant_011: THREE.Mesh;
    Brillant_010: THREE.Mesh;
    Brillant_003: THREE.Mesh;
    Diamond_Pear001: THREE.Mesh;
    Diamond_Pear005: THREE.Mesh;
    Brillant_007: THREE.Mesh;
    Brillant_006: THREE.Mesh;
    Diamond_Pear007: THREE.Mesh;
    Brillant_013: THREE.Mesh;
    Brillant_012: THREE.Mesh;
    Brillant_004: THREE.Mesh;
    Diamond_Pear003: THREE.Mesh;
    Diamond_Pear006: THREE.Mesh;
    Diamond_Pear: THREE.Mesh;
    Brillant_008: THREE.Mesh;
    Brillant_009: THREE.Mesh;
    Brillant_005: THREE.Mesh;
    Brillant_014: THREE.Mesh;
    Brillant_1: THREE.Mesh;
    Diamond_Pear002: THREE.Mesh;
    Diamond_Pear004: THREE.Mesh;
    Brillant_002: THREE.Mesh;
    ["earpendant-down"]: THREE.Mesh;
    ["earpendant-top"]: THREE.Mesh;
    Brillant_017: THREE.Mesh;
    Diamond_Pear013: THREE.Mesh;
    Brillant_018: THREE.Mesh;
    Diamond_Pear012: THREE.Mesh;
    Brillant_023: THREE.Mesh;
    Diamond_Pear011: THREE.Mesh;
    Brillant_021: THREE.Mesh;
    Diamond_Pear010: THREE.Mesh;
    Diamond_Pear009: THREE.Mesh;
    Brillant_015: THREE.Mesh;
    Brillant_025: THREE.Mesh;
    Brillant_020: THREE.Mesh;
    Brillant_027: THREE.Mesh;
    Brillant_026: THREE.Mesh;
    Diamond_Pear015: THREE.Mesh;
    Brillant_022: THREE.Mesh;
    Brillant_024: THREE.Mesh;
    Diamond_Pear008: THREE.Mesh;
    Brillant_019: THREE.Mesh;
    Brillant_016: THREE.Mesh;
    Diamond_Pear014: THREE.Mesh;
    Brillant_028: THREE.Mesh;
    ["earpendant-down001"]: THREE.Mesh;
    ["earpendant-top001"]: THREE.Mesh;
  };
  materials: {
    ["Gold White"]: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function ElizabethEarrings(
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF("/models/earrings.glb") as GLTFResult;
  const texture = useLoader(
    RGBELoader,
    "https://demo-assets.pixotronics.com/pixo/presets/environment/env-gem-1.hdr"
  );

  return (
    <group {...props} dispose={null}>
      <group position={[0.111, 0.004, -0.132]}>
        <group position={[-0.111, -0.004, 0.132]} scale={2.357}>
          <group position={[-0.104, -0.059, -0.132]} scale={0.025}>
            <mesh
              geometry={nodes.Brillant_011.geometry}
              position={[-4.657, -9.144, 6.51]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_010.geometry}
              position={[-0.219, -5.042, 6.463]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_003.geometry}
              position={[-6.708, 18.614, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear001.geometry}
              position={[4.238, 17.733, 6.4]}
              rotation={[-Math.PI / 2, -0.337, Math.PI]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear005.geometry}
              position={[-4.816, -3.602, 6.277]}
              rotation={[1.433, 0.668, 0]}
              scale={[0.039, 0.039, 0.036]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_007.geometry}
              position={[-2.95, 2.034, 5.771]}
              rotation={[1.426, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_006.geometry}
              position={[6.724, 18.614, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear007.geometry}
              position={[1.057, -21.381, 5.202]}
              rotation={[-1.194, 1.26, 2.891]}
              scale={[0.039, 0.039, 0.036]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_013.geometry}
              position={[-2.674, -16.297, 5.598]}
              rotation={[1.765, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_012.geometry}
              position={[3.198, -13.663, 5.157]}
              rotation={[1.771, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_004.geometry}
              position={[-4.143, 10.718, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear003.geometry}
              position={[2.487, 13.023, 6.4]}
              rotation={[-1.571, 0.912, Math.PI]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear006.geometry}
              position={[0.948, -12.51, 5.735]}
              rotation={[-1.545, 0.523, -2.969]}
              scale={[0.039, 0.039, 0.036]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear.geometry}
              position={[0.008, 20.836, 6.4]}
              rotation={[0.892, -1.57, -0.408]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_008.geometry}
              position={[0.953, 0.098, 5.85]}
              rotation={[1.461, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_009.geometry}
              position={[-6.849, -5.306, 6.147]}
              rotation={[1.52, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_005.geometry}
              position={[4.159, 10.718, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_014.geometry}
              position={[1.679, -23.511, 4.385]}
              rotation={[1.789, 0.023, 0.105]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_1.geometry}
              position={[0.008, 16.432, 7.935]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.025, 0.026, 0.025]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear002.geometry}
              position={[-4.166, 17.845, 6.4]}
              rotation={[Math.PI / 2, -0.326, 0]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear004.geometry}
              position={[-2.594, 12.867, 6.4]}
              rotation={[1.571, 0.936, 0]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_002.geometry}
              position={[0.008, 23.493, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["earpendant-down"].geometry}
              material={materials["Gold White"]}
              position={[0.982, 10.879, 4.123]}
              scale={0.761}
            />
            <mesh
              geometry={nodes["earpendant-top"].geometry}
              material={materials["Gold White"]}
              position={[0.002, 19.628, 7.195]}
              scale={0.761}
            />
          </group>
          <group
            position={[0.326, 0.067, -0.132]}
            scale={[-0.025, 0.025, 0.025]}
          >
            <mesh
              geometry={nodes.Brillant_017.geometry}
              position={[-4.143, 10.718, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear013.geometry}
              position={[-4.816, -3.602, 6.277]}
              rotation={[1.433, 0.668, 0]}
              scale={[0.039, 0.039, 0.036]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_018.geometry}
              position={[4.159, 10.718, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear012.geometry}
              position={[-2.594, 12.867, 6.4]}
              rotation={[1.571, 0.936, 0]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_023.geometry}
              position={[-0.219, -5.042, 6.463]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear011.geometry}
              position={[2.487, 13.023, 6.4]}
              rotation={[-1.571, 0.912, Math.PI]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_021.geometry}
              position={[0.953, 0.098, 5.85]}
              rotation={[1.461, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear010.geometry}
              position={[-4.166, 17.845, 6.4]}
              rotation={[Math.PI / 2, -0.326, 0]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear009.geometry}
              position={[4.238, 17.733, 6.4]}
              rotation={[-Math.PI / 2, -0.337, Math.PI]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_015.geometry}
              position={[0.008, 23.493, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_025.geometry}
              position={[3.198, -13.663, 5.157]}
              rotation={[1.771, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_020.geometry}
              position={[-2.95, 2.034, 5.771]}
              rotation={[1.426, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_027.geometry}
              material={nodes.Brillant_027.material}
              position={[1.679, -23.511, 4.385]}
              rotation={[1.789, 0.023, 0.105]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_026.geometry}
              position={[-2.674, -16.297, 5.598]}
              rotation={[1.765, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear015.geometry}
              material={nodes.Diamond_Pear015.material}
              position={[1.057, -21.381, 5.202]}
              rotation={[-1.194, 1.26, 2.891]}
              scale={[0.039, 0.039, 0.036]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_022.geometry}
              position={[-6.849, -5.306, 6.147]}
              rotation={[1.52, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_024.geometry}
              position={[-4.657, -9.144, 6.51]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear008.geometry}
              material={nodes.Diamond_Pear008.material}
              position={[0.008, 20.836, 6.4]}
              rotation={[0.892, -1.57, -0.408]}
              scale={0.041}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_019.geometry}
              material={nodes.Brillant_019.material}
              position={[6.724, 18.614, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_016.geometry}
              material={nodes.Brillant_016.material}
              position={[-6.708, 18.614, 6.695]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.018, 0.019, 0.018]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Diamond_Pear014.geometry}
              position={[0.948, -12.51, 5.735]}
              rotation={[-1.545, 0.523, -2.969]}
              scale={[0.039, 0.039, 0.036]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Brillant_028.geometry}
              material={nodes.Brillant_028.material}
              position={[0.008, 16.432, 7.935]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.025, 0.026, 0.025]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["earpendant-down001"].geometry}
              material={materials["Gold White"]}
              position={[0.982, 10.879, 4.123]}
              scale={0.761}
            />
            <mesh
              geometry={nodes["earpendant-top001"].geometry}
              material={materials["Gold White"]}
              position={[0.002, 19.628, 7.195]}
              scale={0.761}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/earrings.glb");
