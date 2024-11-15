import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, MeshRefractionMaterial } from "@react-three/drei";
import { useLoader, useFrame } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import { easing } from "maath";
import { gemOptions, materialOptions } from "@/constants/options";

import { GLTF } from "three-stdlib";
import { OptionProps } from "@/types/OptionsProps";

type GLTFResult = GLTF & {
  nodes: {
    ["p-2-005"]: THREE.Mesh;
    ["p-2-007"]: THREE.Mesh;
    ["p-2-009"]: THREE.Mesh;
    ["p-2-012"]: THREE.Mesh;
    ["p-2-014"]: THREE.Mesh;
    ["p-2-004"]: THREE.Mesh;
    ["p-2-016"]: THREE.Mesh;
    ["p-2-018"]: THREE.Mesh;
    ["p-2-020"]: THREE.Mesh;
    ["p-2-006"]: THREE.Mesh;
    ["p-2-022"]: THREE.Mesh;
    ["p-2-024"]: THREE.Mesh;
    ["p-2-008"]: THREE.Mesh;
    ["p-2-026"]: THREE.Mesh;
    ["p-2-053"]: THREE.Mesh;
    ["p-2-055"]: THREE.Mesh;
    ["p-2-010"]: THREE.Mesh;
    ["p-2-057"]: THREE.Mesh;
    ["p-2-058"]: THREE.Mesh;
    ["p-2-060"]: THREE.Mesh;
    ["p-2-013"]: THREE.Mesh;
    ["p-2-062"]: THREE.Mesh;
    ["p-2-064"]: THREE.Mesh;
    ["p-2-066"]: THREE.Mesh;
    ["p-2-068"]: THREE.Mesh;
    ["p-2-070"]: THREE.Mesh;
    ["p-2-015"]: THREE.Mesh;
    ["p-2-072"]: THREE.Mesh;
    ["p-2-017"]: THREE.Mesh;
    ["p-2-074"]: THREE.Mesh;
    ["p-2-019"]: THREE.Mesh;
    ["p-2-1"]: THREE.Mesh;
    ["p-2-021"]: THREE.Mesh;
    ["p-2-3"]: THREE.Mesh;
    Princess_008: THREE.Mesh;
    ["p-2-023"]: THREE.Mesh;
    Princess_009: THREE.Mesh;
    ["p-2-025"]: THREE.Mesh;
    Princess_012: THREE.Mesh;
    ["p-2-052"]: THREE.Mesh;
    Princess_015: THREE.Mesh;
    Princess_017: THREE.Mesh;
    Princess_035: THREE.Mesh;
    Princess_038: THREE.Mesh;
    ["p-2-054"]: THREE.Mesh;
    Princess_041: THREE.Mesh;
    ["p-2-056"]: THREE.Mesh;
    Princess_044: THREE.Mesh;
    ["p-2-059"]: THREE.Mesh;
    Princess_047: THREE.Mesh;
    ["p-2-061"]: THREE.Mesh;
    Princess_076: THREE.Mesh;
    ["p-2-063"]: THREE.Mesh;
    Princess_079: THREE.Mesh;
    ["p-2-065"]: THREE.Mesh;
    ["p-2-067"]: THREE.Mesh;
    Princess_082: THREE.Mesh;
    ["p-2-069"]: THREE.Mesh;
    Princess_085: THREE.Mesh;
    ["p-2-071"]: THREE.Mesh;
    Princess_088: THREE.Mesh;
    ["p-2-073"]: THREE.Mesh;
    Princess_091: THREE.Mesh;
    Princess_094: THREE.Mesh;
    ["p-2-075"]: THREE.Mesh;
    Princess_097: THREE.Mesh;
    Princess_100: THREE.Mesh;
    ["p-2-2"]: THREE.Mesh;
    Princess_006: THREE.Mesh;
    Princess_007: THREE.Mesh;
    Princess_010: THREE.Mesh;
    Princess_014: THREE.Mesh;
    Princess_016: THREE.Mesh;
    Princess_033: THREE.Mesh;
    Princess_036: THREE.Mesh;
    Princess_039: THREE.Mesh;
    Princess_042: THREE.Mesh;
    Princess_045: THREE.Mesh;
    Princess_048: THREE.Mesh;
    Princess_077: THREE.Mesh;
    Princess_080: THREE.Mesh;
    Princess_083: THREE.Mesh;
    Princess_086: THREE.Mesh;
    Princess_089: THREE.Mesh;
    Princess_092: THREE.Mesh;
    Princess_095: THREE.Mesh;
    Princess_098: THREE.Mesh;
    Princess_034: THREE.Mesh;
    Princess_037: THREE.Mesh;
    Princess_040: THREE.Mesh;
    Princess_043: THREE.Mesh;
    Princess_046: THREE.Mesh;
    Princess_075: THREE.Mesh;
    Princess_078: THREE.Mesh;
    Princess_081: THREE.Mesh;
    Princess_084: THREE.Mesh;
    Princess_087: THREE.Mesh;
    Princess_090: THREE.Mesh;
    Princess_093: THREE.Mesh;
    Princess_096: THREE.Mesh;
    Princess_099: THREE.Mesh;
    ["p-2-078"]: THREE.Mesh;
    ["p-2-081"]: THREE.Mesh;
    ["p-2-084"]: THREE.Mesh;
    ["p-2-087"]: THREE.Mesh;
    ["p-2-090"]: THREE.Mesh;
    ["p-2-093"]: THREE.Mesh;
    ["p-2-096"]: THREE.Mesh;
    ["p-2-099"]: THREE.Mesh;
    ["p-2-102"]: THREE.Mesh;
    ["p-2-105"]: THREE.Mesh;
    ["p-2-108"]: THREE.Mesh;
    ["p-2-111"]: THREE.Mesh;
    ["p-2-114"]: THREE.Mesh;
    ["p-2-117"]: THREE.Mesh;
    ["p-2-120"]: THREE.Mesh;
    ["p-2-123"]: THREE.Mesh;
    Princess_102: THREE.Mesh;
    Princess_105: THREE.Mesh;
    Princess_108: THREE.Mesh;
    Princess_111: THREE.Mesh;
    Princess_114: THREE.Mesh;
    Princess_117: THREE.Mesh;
    Princess_120: THREE.Mesh;
    Princess_123: THREE.Mesh;
    Princess_126: THREE.Mesh;
    Princess_129: THREE.Mesh;
    Princess_132: THREE.Mesh;
    Princess_135: THREE.Mesh;
    ["p-2-076"]: THREE.Mesh;
    Princess_138: THREE.Mesh;
    ["p-2-079"]: THREE.Mesh;
    Princess_141: THREE.Mesh;
    Princess_144: THREE.Mesh;
    ["p-2-082"]: THREE.Mesh;
    Princess_147: THREE.Mesh;
    ["p-2-085"]: THREE.Mesh;
    Princess_150: THREE.Mesh;
    ["p-2-088"]: THREE.Mesh;
    ["p-2-091"]: THREE.Mesh;
    ["p-2-094"]: THREE.Mesh;
    ["p-2-097"]: THREE.Mesh;
    ["p-2-100"]: THREE.Mesh;
    ["p-2-103"]: THREE.Mesh;
    ["p-2-106"]: THREE.Mesh;
    ["p-2-109"]: THREE.Mesh;
    ["p-2-112"]: THREE.Mesh;
    ["p-2-115"]: THREE.Mesh;
    ["p-2-118"]: THREE.Mesh;
    ["p-2-121"]: THREE.Mesh;
    ["p-2-124"]: THREE.Mesh;
    Princess_103: THREE.Mesh;
    Princess_106: THREE.Mesh;
    Princess_109: THREE.Mesh;
    Princess_112: THREE.Mesh;
    Princess_115: THREE.Mesh;
    Princess_118: THREE.Mesh;
    Princess_121: THREE.Mesh;
    Princess_124: THREE.Mesh;
    Princess_127: THREE.Mesh;
    Princess_130: THREE.Mesh;
    Princess_133: THREE.Mesh;
    Princess_136: THREE.Mesh;
    Princess_139: THREE.Mesh;
    Princess_142: THREE.Mesh;
    Princess_145: THREE.Mesh;
    Princess_148: THREE.Mesh;
    Princess_151: THREE.Mesh;
    ["p-2-077"]: THREE.Mesh;
    ["p-2-080"]: THREE.Mesh;
    ["p-2-083"]: THREE.Mesh;
    ["p-2-086"]: THREE.Mesh;
    ["p-2-089"]: THREE.Mesh;
    ["p-2-092"]: THREE.Mesh;
    ["p-2-095"]: THREE.Mesh;
    ["p-2-098"]: THREE.Mesh;
    ["p-2-101"]: THREE.Mesh;
    ["p-2-104"]: THREE.Mesh;
    ["p-2-107"]: THREE.Mesh;
    ["p-2-110"]: THREE.Mesh;
    ["p-2-113"]: THREE.Mesh;
    ["p-2-116"]: THREE.Mesh;
    ["p-2-119"]: THREE.Mesh;
    ["p-2-122"]: THREE.Mesh;
    Princess_101: THREE.Mesh;
    Princess_104: THREE.Mesh;
    Princess_107: THREE.Mesh;
    Princess_110: THREE.Mesh;
    Princess_113: THREE.Mesh;
    Princess_116: THREE.Mesh;
    Princess_119: THREE.Mesh;
    Princess_122: THREE.Mesh;
    Princess_125: THREE.Mesh;
    Princess_128: THREE.Mesh;
    Princess_131: THREE.Mesh;
    Princess_134: THREE.Mesh;
    Princess_137: THREE.Mesh;
    Princess_140: THREE.Mesh;
    Princess_143: THREE.Mesh;
    Princess_146: THREE.Mesh;
    Princess_149: THREE.Mesh;
    Princess_152: THREE.Mesh;
    Heart_1: THREE.Mesh;
    dia004: THREE.Mesh;
    dia002: THREE.Mesh;
    Diamond_Oval: THREE.Mesh;
    dia005: THREE.Mesh;
    dia007: THREE.Mesh;
    dia006: THREE.Mesh;
    dia001: THREE.Mesh;
    dia003: THREE.Mesh;
    dia: THREE.Mesh;
    Heart_002: THREE.Mesh;
    ["chaton-heart-2"]: THREE.Mesh;
    ["chaton-heart-1"]: THREE.Mesh;
    entourage: THREE.Mesh;
    ring_3: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function ElizabethRing(
  props: OptionProps & JSX.IntrinsicElements["group"]
) {
  const { nodes, materials } = useGLTF("/models/scene.glb") as GLTFResult;
  const texture = useLoader(
    RGBELoader,
    "https://demo-assets.pixotronics.com/pixo/presets/environment/env-gem-1.hdr"
  );

  let currentMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.5, 0.5, 0.5),
    roughness: 0,
    metalness: 1,
  });

  const selectedMaterial = materialOptions.find(
    (mat) => mat.name === props.material
  );

  const selectedMaterialColor = (selectedMaterial?.color as string) || "#fff";

  const selectedColor = gemOptions.find((gem) => gem.name === props.gem);

  let gemColor = selectedColor?.color as string;

  useFrame((state, delta) => {
    easing.dampC(currentMaterial.color, selectedMaterialColor, 0.5, delta);
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <group position={[0, props.positionY, 0]} scale={props.scale}>
          <group position={[0.24, 1.094, 0.001]} scale={0.025}>
            <mesh
              geometry={nodes["p-2-005"].geometry}
              position={[-2.092, 26.484, 30.182]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-007"].geometry}
              position={[-3.833, 18.739, 35.575]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-009"].geometry}
              position={[-4.486, 10.03, 38.549]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-012"].geometry}
              position={[-4.634, -3.416, 39.118]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-014"].geometry}
              position={[-4.988, -11.627, 37.332]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-004"].geometry}
              position={[-0.618, 29.63, 26.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-016"].geometry}
              position={[-5.106, -19.483, 33.968]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-018"].geometry}
              position={[-4.725, 0.917, 39.191]}
              rotation={[0.052, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-020"].geometry}
              position={[-5.339, -29.769, 25.816]}
              rotation={[0.174, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-006"].geometry}
              position={[-3.169, 22.824, 33.268]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-022"].geometry}
              position={[-6.155, -34.864, 17.755]}
              rotation={[-1.988, -1.246, 1.63]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-024"].geometry}
              position={[-6.091, -37.999, 8.783]}
              rotation={[-1.758, -1.208, 1.609]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-008"].geometry}
              position={[-4.307, 14.514, 37.387]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-026"].geometry}
              position={[-6.166, -38.953, -0.25]}
              rotation={[-1.633, -1.201, 1.527]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-053"].geometry}
              position={[7.273, 35.241, -16.631]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-055"].geometry}
              position={[1.544, 32.203, -23.25]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-010"].geometry}
              position={[-4.725, 5.559, 39.191]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-057"].geometry}
              position={[-3.169, 22.824, -33.268]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-058"].geometry}
              position={[-3.833, 18.739, -35.575]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-060"].geometry}
              position={[-4.486, 10.03, -38.549]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-013"].geometry}
              position={[-4.638, -7.621, 38.435]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-062"].geometry}
              position={[-4.725, 0.917, -39.191]}
              rotation={[3.089, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-064"].geometry}
              position={[-4.638, -7.621, -38.435]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-066"].geometry}
              position={[-5.073, -15.632, -35.877]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-068"].geometry}
              position={[-5.184, -23.178, -31.736]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-070"].geometry}
              position={[-5.339, -29.769, -25.816]}
              rotation={[2.967, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-015"].geometry}
              position={[-5.073, -15.632, 35.877]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-072"].geometry}
              position={[-6.155, -34.864, -17.755]}
              rotation={[-1.154, -1.246, 1.512]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-017"].geometry}
              position={[-5.184, -23.178, 31.736]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-074"].geometry}
              position={[-6.091, -37.999, -8.783]}
              rotation={[-1.384, -1.208, 1.533]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-019"].geometry}
              position={[-5.229, -26.572, 29.173]}
              rotation={[0.099, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-1"].geometry}
              position={[7.273, 35.241, 16.631]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-021"].geometry}
              position={[-6.022, -32.483, 21.877]}
              rotation={[-2.152, -1.231, 1.645]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-3"].geometry}
              position={[1.544, 32.203, 23.25]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_008.geometry}
              position={[-3.607, 33.32, 28.047]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-023"].geometry}
              position={[-6.177, -36.714, 13.378]}
              rotation={[-1.961, -1.228, 1.545]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_009.geometry}
              position={[-5.51, 29.455, 31.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-025"].geometry}
              position={[-6.154, -38.767, 4.283]}
              rotation={[-1.7, -1.199, 1.56]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_012.geometry}
              position={[-7.308, 15.486, 39.8]}
              scale={[1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-052"].geometry}
              position={[-2.092, 26.484, -30.182]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_015.geometry}
              position={[-7.484, 6.608, 41.658]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_017.geometry}
              position={[-7.614, -2.084, 41.614]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_035.geometry}
              position={[-7.614, -6.478, 41.2]}
              rotation={[0.133, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_038.geometry}
              position={[-7.614, -19.177, 37.006]}
              rotation={[0.401, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-054"].geometry}
              position={[4.214, 34.06, -19.737]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_041.geometry}
              position={[-7.614, -29.712, 29.249]}
              rotation={[0.727, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-056"].geometry}
              position={[-0.618, 29.63, -26.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_044.geometry}
              position={[-7.614, -37.164, 18.718]}
              rotation={[1.066, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-059"].geometry}
              position={[-4.307, 14.514, -37.387]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_047.geometry}
              position={[-7.614, -40.956, 6.514]}
              rotation={[1.382, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-061"].geometry}
              position={[-4.725, 5.559, -39.191]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_076.geometry}
              position={[5.496, 39.95, -16.053]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-063"].geometry}
              position={[-4.634, -3.416, -39.118]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_079.geometry}
              position={[-3.607, 33.32, -28.047]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-065"].geometry}
              position={[-4.988, -11.627, -37.332]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-067"].geometry}
              position={[-5.106, -19.483, -33.968]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_082.geometry}
              position={[-7.308, 15.486, -39.8]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-069"].geometry}
              position={[-5.229, -26.572, -29.173]}
              rotation={[3.042, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_085.geometry}
              position={[-7.585, 2.277, -41.822]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-071"].geometry}
              position={[-6.022, -32.483, -21.877]}
              rotation={[-0.989, -1.231, 1.497]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_088.geometry}
              position={[-7.614, -10.84, -40.246]}
              rotation={[2.922, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-073"].geometry}
              position={[-6.177, -36.714, -13.378]}
              rotation={[-1.18, -1.228, 1.597]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_091.geometry}
              position={[-7.614, -22.968, -34.784]}
              rotation={[2.647, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_094.geometry}
              position={[-7.614, -32.572, -26.017]}
              rotation={[2.259, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-075"].geometry}
              position={[-6.154, -38.767, -4.283]}
              rotation={[-1.442, -1.199, 1.582]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_097.geometry}
              position={[-7.614, -38.857, -14.792]}
              rotation={[1.97, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_100.geometry}
              position={[-7.614, -41.423, -2.21]}
              rotation={[1.685, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-2"].geometry}
              position={[4.214, 34.06, 19.737]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_006.geometry}
              position={[1.855, 38.543, 19.534]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_007.geometry}
              position={[-1.28, 36.366, 23.72]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_010.geometry}
              position={[-6.729, 25.032, 35.322]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_014.geometry}
              position={[-7.464, 10.885, 41.059]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_016.geometry}
              position={[-7.585, 2.277, 41.822]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_033.geometry}
              position={[5.496, 39.95, 16.053]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_036.geometry}
              position={[-7.614, -10.84, 40.246]}
              rotation={[0.219, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_039.geometry}
              position={[-7.614, -22.968, 34.784]}
              rotation={[0.495, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_042.geometry}
              position={[-7.614, -32.572, 26.017]}
              rotation={[0.882, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_045.geometry}
              position={[-7.614, -38.857, 14.792]}
              rotation={[1.172, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_048.geometry}
              position={[-7.614, -41.423, 2.21]}
              rotation={[1.457, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_077.geometry}
              position={[1.855, 38.543, -19.534]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_080.geometry}
              position={[-5.51, 29.455, -31.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_083.geometry}
              position={[-7.464, 10.885, -41.059]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_086.geometry}
              position={[-7.614, -2.084, -41.614]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_089.geometry}
              position={[-7.614, -15.043, -38.836]}
              rotation={[2.827, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_092.geometry}
              position={[-7.614, -26.5, -32.159]}
              rotation={[2.529, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_095.geometry}
              position={[-7.614, -35.083, -22.509]}
              rotation={[2.177, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_098.geometry}
              position={[-7.614, -40.14, -10.682]}
              rotation={[1.875, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_034.geometry}
              position={[-7.136, 20.227, 37.874]}
              rotation={[-0.174, -0.063, -0.005]}
              scale={[1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_037.geometry}
              position={[-7.614, -15.043, 38.836]}
              rotation={[0.315, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_040.geometry}
              position={[-7.614, -26.5, 32.159]}
              rotation={[0.612, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_043.geometry}
              position={[-7.614, -35.083, 22.509]}
              rotation={[0.964, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_046.geometry}
              position={[-7.614, -40.14, 10.682]}
              rotation={[1.266, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_075.geometry}
              position={[-7.136, 20.227, -37.874]}
              rotation={[-2.967, -0.063, -3.137]}
              scale={[-1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_078.geometry}
              position={[-1.28, 36.366, -23.72]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_081.geometry}
              position={[-6.729, 25.032, -35.322]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_084.geometry}
              position={[-7.484, 6.608, -41.658]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_087.geometry}
              position={[-7.614, -6.478, -41.2]}
              rotation={[3.009, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_090.geometry}
              position={[-7.614, -19.177, -37.006]}
              rotation={[2.741, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_093.geometry}
              position={[-7.614, -29.712, -29.249]}
              rotation={[2.414, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_096.geometry}
              position={[-7.614, -37.164, -18.718]}
              rotation={[2.076, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_099.geometry}
              position={[-7.614, -40.956, -6.514]}
              rotation={[1.76, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
          </group>
          <group
            position={[-0.24, 1.094, 0]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.025}
          >
            <mesh
              geometry={nodes["p-2-078"].geometry}
              position={[-0.618, 29.63, 26.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-081"].geometry}
              position={[-4.725, 5.559, 39.191]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-084"].geometry}
              position={[-4.307, 14.514, 37.387]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-087"].geometry}
              position={[-4.638, -7.621, 38.435]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-090"].geometry}
              position={[-5.229, -26.572, 29.173]}
              rotation={[0.099, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-093"].geometry}
              position={[-6.155, -34.864, 17.755]}
              rotation={[-1.988, -1.246, 1.63]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-096"].geometry}
              position={[-5.106, -19.483, 33.968]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-099"].geometry}
              position={[-5.229, -26.572, -29.173]}
              rotation={[3.042, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-102"].geometry}
              position={[-6.091, -37.999, -8.783]}
              rotation={[-1.384, -1.208, 1.533]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-105"].geometry}
              position={[-5.073, -15.632, -35.877]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-108"].geometry}
              position={[-6.022, -32.483, -21.877]}
              rotation={[-0.989, -1.231, 1.497]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-111"].geometry}
              position={[-6.166, -38.953, -0.25]}
              rotation={[-1.633, -1.201, 1.527]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-114"].geometry}
              position={[-6.154, -38.767, 4.283]}
              rotation={[-1.7, -1.199, 1.56]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-117"].geometry}
              position={[-3.169, 22.824, -33.268]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-120"].geometry}
              position={[-4.725, 5.559, -39.191]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-123"].geometry}
              position={[-3.833, 18.739, -35.575]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_102.geometry}
              position={[-1.28, 36.366, 23.72]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_105.geometry}
              position={[-6.729, 25.032, 35.322]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_108.geometry}
              position={[-7.308, 15.486, 39.8]}
              scale={[1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_111.geometry}
              position={[5.496, 39.95, 16.053]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_114.geometry}
              position={[-7.136, 20.227, 37.874]}
              rotation={[-0.174, -0.063, -0.005]}
              scale={[1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_117.geometry}
              position={[1.855, 38.543, -19.534]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_120.geometry}
              position={[-3.607, 33.32, -28.047]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_123.geometry}
              position={[-7.614, -22.968, -34.784]}
              rotation={[2.647, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_126.geometry}
              position={[-7.614, -37.164, -18.718]}
              rotation={[2.076, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_129.geometry}
              position={[-7.614, -2.084, -41.614]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_132.geometry}
              position={[-6.729, 25.032, -35.322]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_135.geometry}
              position={[-7.614, -10.84, -40.246]}
              rotation={[2.922, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-076"].geometry}
              position={[1.544, 32.203, 23.25]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_138.geometry}
              position={[-7.614, -19.177, -37.006]}
              rotation={[2.741, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-079"].geometry}
              position={[7.273, 35.241, 16.631]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_141.geometry}
              position={[-7.614, -41.423, 2.21]}
              rotation={[1.457, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_144.geometry}
              position={[-7.614, -19.177, 37.006]}
              rotation={[0.401, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-082"].geometry}
              position={[-2.092, 26.484, 30.182]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_147.geometry}
              position={[-7.614, -35.083, 22.509]}
              rotation={[0.964, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-085"].geometry}
              position={[-4.486, 10.03, 38.549]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_150.geometry}
              position={[-7.614, -40.14, 10.682]}
              rotation={[1.266, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-088"].geometry}
              position={[-5.184, -23.178, 31.736]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-091"].geometry}
              position={[-4.988, -11.627, 37.332]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-094"].geometry}
              position={[-4.725, 0.917, 39.191]}
              rotation={[0.052, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-097"].geometry}
              position={[-4.988, -11.627, -37.332]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-100"].geometry}
              position={[-4.725, 0.917, -39.191]}
              rotation={[3.089, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-103"].geometry}
              position={[-4.634, -3.416, -39.118]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-106"].geometry}
              position={[-5.339, -29.769, -25.816]}
              rotation={[2.967, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-109"].geometry}
              position={[-4.638, -7.621, -38.435]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-112"].geometry}
              position={[-6.091, -37.999, 8.783]}
              rotation={[-1.758, -1.208, 1.609]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-115"].geometry}
              position={[4.214, 34.06, -19.737]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-118"].geometry}
              position={[1.544, 32.203, -23.25]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-121"].geometry}
              position={[-4.486, 10.03, -38.549]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-124"].geometry}
              position={[7.273, 35.241, -16.631]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_103.geometry}
              position={[-3.607, 33.32, 28.047]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_106.geometry}
              position={[-7.585, 2.277, 41.822]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_109.geometry}
              position={[-7.484, 6.608, 41.658]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_112.geometry}
              position={[-7.614, -6.478, 41.2]}
              rotation={[0.133, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_115.geometry}
              position={[-7.614, -41.423, -2.21]}
              rotation={[1.685, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_118.geometry}
              position={[-1.28, 36.366, -23.72]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_121.geometry}
              position={[-5.51, 29.455, -31.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_124.geometry}
              position={[-7.308, 15.486, -39.8]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_127.geometry}
              position={[-7.614, -38.857, -14.792]}
              rotation={[1.97, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_130.geometry}
              position={[-7.464, 10.885, -41.059]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_133.geometry}
              position={[-7.614, -15.043, -38.836]}
              rotation={[2.827, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_136.geometry}
              position={[-7.614, -26.5, -32.159]}
              rotation={[2.529, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_139.geometry}
              position={[-7.614, -22.968, 34.784]}
              rotation={[0.495, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_142.geometry}
              position={[-7.614, -29.712, 29.249]}
              rotation={[0.727, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_145.geometry}
              position={[-7.614, -37.164, 18.718]}
              rotation={[1.066, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_148.geometry}
              position={[-7.614, -15.043, 38.836]}
              rotation={[0.315, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_151.geometry}
              position={[-7.136, 20.227, -37.874]}
              rotation={[-2.967, -0.063, -3.137]}
              scale={[-1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-077"].geometry}
              position={[4.214, 34.06, 19.737]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-080"].geometry}
              position={[-3.833, 18.739, 35.575]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-083"].geometry}
              position={[-3.169, 22.824, 33.268]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-086"].geometry}
              position={[-4.634, -3.416, 39.118]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-089"].geometry}
              position={[-6.022, -32.483, 21.877]}
              rotation={[-2.152, -1.231, 1.645]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-092"].geometry}
              position={[-5.339, -29.769, 25.816]}
              rotation={[0.174, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-095"].geometry}
              position={[-5.073, -15.632, 35.877]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-098"].geometry}
              position={[-5.106, -19.483, -33.968]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-101"].geometry}
              position={[-6.155, -34.864, -17.755]}
              rotation={[-1.154, -1.246, 1.512]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-104"].geometry}
              position={[-6.154, -38.767, -4.283]}
              rotation={[-1.442, -1.199, 1.582]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-107"].geometry}
              position={[-6.177, -36.714, -13.378]}
              rotation={[-1.18, -1.228, 1.597]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-110"].geometry}
              position={[-5.184, -23.178, -31.736]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-113"].geometry}
              position={[-6.177, -36.714, 13.378]}
              rotation={[-1.961, -1.228, 1.545]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-116"].geometry}
              position={[-2.092, 26.484, -30.182]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-119"].geometry}
              position={[-4.307, 14.514, -37.387]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-122"].geometry}
              position={[-0.618, 29.63, -26.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_101.geometry}
              position={[1.855, 38.543, 19.534]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_104.geometry}
              position={[-5.51, 29.455, 31.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_107.geometry}
              position={[-7.464, 10.885, 41.059]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_110.geometry}
              position={[-7.614, -10.84, 40.246]}
              rotation={[0.219, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_113.geometry}
              position={[-7.614, -2.084, 41.614]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_116.geometry}
              position={[-7.614, -40.956, -6.514]}
              rotation={[1.76, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_119.geometry}
              position={[-7.614, -35.083, -22.509]}
              rotation={[2.177, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_122.geometry}
              position={[-7.585, 2.277, -41.822]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_125.geometry}
              position={[-7.614, -29.712, -29.249]}
              rotation={[2.414, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_128.geometry}
              position={[-7.614, -40.14, -10.682]}
              rotation={[1.875, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_131.geometry}
              position={[-7.484, 6.608, -41.658]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_134.geometry}
              position={[-7.614, -6.478, -41.2]}
              rotation={[3.009, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_137.geometry}
              position={[-7.614, -32.572, -26.017]}
              rotation={[2.259, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_140.geometry}
              position={[-7.614, -40.956, 6.514]}
              rotation={[1.382, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_143.geometry}
              position={[-7.614, -26.5, 32.159]}
              rotation={[0.612, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_146.geometry}
              position={[-7.614, -32.572, 26.017]}
              rotation={[0.882, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_149.geometry}
              position={[-7.614, -38.857, 14.792]}
              rotation={[1.172, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_152.geometry}
              position={[5.496, 39.95, -16.053]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                fastChroma={true}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
          </group>
          <mesh
            geometry={nodes.Heart_1.geometry}
            position={[0.003, 2.103, 0.616]}
            scale={0.025}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
              color={gemColor}
            />
          </mesh>
          <mesh
            geometry={nodes.dia004.geometry}
            position={[-0.416, 2.316, 0.001]}
            rotation={[-Math.PI / 2, 1.396, Math.PI / 2]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia002.geometry}
            position={[-0.001, 2.316, -0.37]}
            rotation={[-0.175, 0, 0]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.Diamond_Oval.geometry}
            position={[-0.001, 2.457, 0]}
            scale={0.025}
          >
            <MeshRefractionMaterial
              envMap={texture}
              toneMapped={false}
              aberrationStrength={0.02}
              fastChroma={true}
              color={gemColor}
            />
          </mesh>
          <mesh
            geometry={nodes.dia005.geometry}
            position={[-0.282, 2.316, 0.266]}
            rotation={[-2.897, 0.77, 2.97]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia007.geometry}
            position={[0.28, 2.316, 0.267]}
            rotation={[-2.897, -0.77, -2.97]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia006.geometry}
            position={[-0.001, 2.316, 0.366]}
            rotation={[-2.967, 0, Math.PI]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia001.geometry}
            position={[0.284, 2.316, -0.266]}
            rotation={[-0.244, -0.77, -0.172]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia003.geometry}
            position={[-0.281, 2.316, -0.267]}
            rotation={[-0.244, 0.77, 0.172]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia.geometry}
            position={[0.411, 2.316, 0.001]}
            rotation={[-Math.PI / 2, -1.396, -Math.PI / 2]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.Heart_002.geometry}
            position={[0.003, 2.112, -0.601]}
            scale={0.025}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fastChroma={true}
              aberrationStrength={0.02}
              toneMapped={false}
              color={gemColor}
            />
          </mesh>
          <mesh
            geometry={nodes["chaton-heart-2"].geometry}
            material={currentMaterial}
            position={[0.003, 2.101, 0.564]}
            rotation={[0.698, 0, 0]}
            scale={0.025}
          />
          <mesh
            geometry={nodes["chaton-heart-1"].geometry}
            material={currentMaterial}
            position={[0.003, 2.101, -0.566]}
            rotation={[2.443, 0, -Math.PI]}
            scale={0.025}
          />
          <mesh
            geometry={nodes.entourage.geometry}
            material={currentMaterial}
            position={[0, 2.403, 0]}
            scale={0.022}
          />
          <mesh
            geometry={nodes.ring_3.geometry}
            material={currentMaterial}
            position={[0.071, 1.115, 0]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={0.025}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/scene.glb");
