import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, MeshRefractionMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

import { GLTF } from "three-stdlib";

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

export default function ElizabethRing(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/scene.glb") as GLTFResult;

  const texture = useLoader(
    RGBELoader,
    "https://demo-assets.pixotronics.com/pixo/presets/environment/env-gem-1.hdr"
  );

  const goldMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(1, 0.734, 0.255),
    roughness: 0,
    metalness: 1,
  });

  const silverMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.5, 0.5, 0.5),
    roughness: 0,
    metalness: 1,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[0.003, 1.32, 0]}>
        <group position={[-0.003, -1.32, 0]} scale={1.098}>
          <group position={[0.24, 1.094, 0.001]} scale={0.025}>
            <mesh
              geometry={nodes["p-2-005"].geometry}
              material={nodes["p-2-005"].material}
              position={[-2.092, 26.484, 30.182]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-007"].geometry}
              material={nodes["p-2-007"].material}
              position={[-3.833, 18.739, 35.575]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-009"].geometry}
              material={nodes["p-2-009"].material}
              position={[-4.486, 10.03, 38.549]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-012"].geometry}
              material={nodes["p-2-012"].material}
              position={[-4.634, -3.416, 39.118]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-014"].geometry}
              material={nodes["p-2-014"].material}
              position={[-4.988, -11.627, 37.332]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-004"].geometry}
              material={nodes["p-2-004"].material}
              position={[-0.618, 29.63, 26.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-016"].geometry}
              material={nodes["p-2-016"].material}
              position={[-5.106, -19.483, 33.968]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-018"].geometry}
              material={nodes["p-2-018"].material}
              position={[-4.725, 0.917, 39.191]}
              rotation={[0.052, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-020"].geometry}
              material={nodes["p-2-020"].material}
              position={[-5.339, -29.769, 25.816]}
              rotation={[0.174, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-006"].geometry}
              material={nodes["p-2-006"].material}
              position={[-3.169, 22.824, 33.268]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-022"].geometry}
              material={nodes["p-2-022"].material}
              position={[-6.155, -34.864, 17.755]}
              rotation={[-1.988, -1.246, 1.63]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-024"].geometry}
              material={nodes["p-2-024"].material}
              position={[-6.091, -37.999, 8.783]}
              rotation={[-1.758, -1.208, 1.609]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-008"].geometry}
              material={nodes["p-2-008"].material}
              position={[-4.307, 14.514, 37.387]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-026"].geometry}
              material={nodes["p-2-026"].material}
              position={[-6.166, -38.953, -0.25]}
              rotation={[-1.633, -1.201, 1.527]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-053"].geometry}
              material={nodes["p-2-053"].material}
              position={[7.273, 35.241, -16.631]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-055"].geometry}
              material={nodes["p-2-055"].material}
              position={[1.544, 32.203, -23.25]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-010"].geometry}
              material={nodes["p-2-010"].material}
              position={[-4.725, 5.559, 39.191]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-057"].geometry}
              material={nodes["p-2-057"].material}
              position={[-3.169, 22.824, -33.268]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-058"].geometry}
              material={nodes["p-2-058"].material}
              position={[-3.833, 18.739, -35.575]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-060"].geometry}
              material={nodes["p-2-060"].material}
              position={[-4.486, 10.03, -38.549]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-013"].geometry}
              material={nodes["p-2-013"].material}
              position={[-4.638, -7.621, 38.435]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-062"].geometry}
              material={nodes["p-2-062"].material}
              position={[-4.725, 0.917, -39.191]}
              rotation={[3.089, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-064"].geometry}
              material={nodes["p-2-064"].material}
              position={[-4.638, -7.621, -38.435]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-066"].geometry}
              material={nodes["p-2-066"].material}
              position={[-5.073, -15.632, -35.877]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-068"].geometry}
              material={nodes["p-2-068"].material}
              position={[-5.184, -23.178, -31.736]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-070"].geometry}
              material={nodes["p-2-070"].material}
              position={[-5.339, -29.769, -25.816]}
              rotation={[2.967, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-015"].geometry}
              material={nodes["p-2-015"].material}
              position={[-5.073, -15.632, 35.877]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-072"].geometry}
              material={nodes["p-2-072"].material}
              position={[-6.155, -34.864, -17.755]}
              rotation={[-1.154, -1.246, 1.512]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-017"].geometry}
              material={nodes["p-2-017"].material}
              position={[-5.184, -23.178, 31.736]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-074"].geometry}
              material={nodes["p-2-074"].material}
              position={[-6.091, -37.999, -8.783]}
              rotation={[-1.384, -1.208, 1.533]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-019"].geometry}
              material={nodes["p-2-019"].material}
              position={[-5.229, -26.572, 29.173]}
              rotation={[0.099, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-1"].geometry}
              material={nodes["p-2-1"].material}
              position={[7.273, 35.241, 16.631]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-021"].geometry}
              material={nodes["p-2-021"].material}
              position={[-6.022, -32.483, 21.877]}
              rotation={[-2.152, -1.231, 1.645]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-3"].geometry}
              material={nodes["p-2-3"].material}
              position={[1.544, 32.203, 23.25]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_008.geometry}
              material={nodes.Princess_008.material}
              position={[-3.607, 33.32, 28.047]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-023"].geometry}
              material={nodes["p-2-023"].material}
              position={[-6.177, -36.714, 13.378]}
              rotation={[-1.961, -1.228, 1.545]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_009.geometry}
              material={nodes.Princess_009.material}
              position={[-5.51, 29.455, 31.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-025"].geometry}
              material={nodes["p-2-025"].material}
              position={[-6.154, -38.767, 4.283]}
              rotation={[-1.7, -1.199, 1.56]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_012.geometry}
              material={nodes.Princess_012.material}
              position={[-7.308, 15.486, 39.8]}
              scale={[1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-052"].geometry}
              material={nodes["p-2-052"].material}
              position={[-2.092, 26.484, -30.182]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_015.geometry}
              material={nodes.Princess_015.material}
              position={[-7.484, 6.608, 41.658]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_017.geometry}
              material={nodes.Princess_017.material}
              position={[-7.614, -2.084, 41.614]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_035.geometry}
              material={nodes.Princess_035.material}
              position={[-7.614, -6.478, 41.2]}
              rotation={[0.133, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_038.geometry}
              material={nodes.Princess_038.material}
              position={[-7.614, -19.177, 37.006]}
              rotation={[0.401, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-054"].geometry}
              material={nodes["p-2-054"].material}
              position={[4.214, 34.06, -19.737]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_041.geometry}
              material={nodes.Princess_041.material}
              position={[-7.614, -29.712, 29.249]}
              rotation={[0.727, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-056"].geometry}
              material={nodes["p-2-056"].material}
              position={[-0.618, 29.63, -26.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_044.geometry}
              material={nodes.Princess_044.material}
              position={[-7.614, -37.164, 18.718]}
              rotation={[1.066, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-059"].geometry}
              material={nodes["p-2-059"].material}
              position={[-4.307, 14.514, -37.387]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_047.geometry}
              material={nodes.Princess_047.material}
              position={[-7.614, -40.956, 6.514]}
              rotation={[1.382, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-061"].geometry}
              material={nodes["p-2-061"].material}
              position={[-4.725, 5.559, -39.191]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_076.geometry}
              material={nodes.Princess_076.material}
              position={[5.496, 39.95, -16.053]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-063"].geometry}
              material={nodes["p-2-063"].material}
              position={[-4.634, -3.416, -39.118]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_079.geometry}
              material={nodes.Princess_079.material}
              position={[-3.607, 33.32, -28.047]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-065"].geometry}
              material={nodes["p-2-065"].material}
              position={[-4.988, -11.627, -37.332]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-067"].geometry}
              material={nodes["p-2-067"].material}
              position={[-5.106, -19.483, -33.968]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_082.geometry}
              material={nodes.Princess_082.material}
              position={[-7.308, 15.486, -39.8]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-069"].geometry}
              material={nodes["p-2-069"].material}
              position={[-5.229, -26.572, -29.173]}
              rotation={[3.042, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_085.geometry}
              material={nodes.Princess_085.material}
              position={[-7.585, 2.277, -41.822]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-071"].geometry}
              material={nodes["p-2-071"].material}
              position={[-6.022, -32.483, -21.877]}
              rotation={[-0.989, -1.231, 1.497]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_088.geometry}
              material={nodes.Princess_088.material}
              position={[-7.614, -10.84, -40.246]}
              rotation={[2.922, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-073"].geometry}
              material={nodes["p-2-073"].material}
              position={[-6.177, -36.714, -13.378]}
              rotation={[-1.18, -1.228, 1.597]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_091.geometry}
              material={nodes.Princess_091.material}
              position={[-7.614, -22.968, -34.784]}
              rotation={[2.647, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_094.geometry}
              material={nodes.Princess_094.material}
              position={[-7.614, -32.572, -26.017]}
              rotation={[2.259, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-075"].geometry}
              material={nodes["p-2-075"].material}
              position={[-6.154, -38.767, -4.283]}
              rotation={[-1.442, -1.199, 1.582]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_097.geometry}
              material={nodes.Princess_097.material}
              position={[-7.614, -38.857, -14.792]}
              rotation={[1.97, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_100.geometry}
              material={nodes.Princess_100.material}
              position={[-7.614, -41.423, -2.21]}
              rotation={[1.685, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-2"].geometry}
              material={nodes["p-2-2"].material}
              position={[4.214, 34.06, 19.737]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_006.geometry}
              material={nodes.Princess_006.material}
              position={[1.855, 38.543, 19.534]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_007.geometry}
              material={nodes.Princess_007.material}
              position={[-1.28, 36.366, 23.72]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_010.geometry}
              material={nodes.Princess_010.material}
              position={[-6.729, 25.032, 35.322]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_014.geometry}
              material={nodes.Princess_014.material}
              position={[-7.464, 10.885, 41.059]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_016.geometry}
              material={nodes.Princess_016.material}
              position={[-7.585, 2.277, 41.822]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_033.geometry}
              material={nodes.Princess_033.material}
              position={[5.496, 39.95, 16.053]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_036.geometry}
              material={nodes.Princess_036.material}
              position={[-7.614, -10.84, 40.246]}
              rotation={[0.219, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_039.geometry}
              material={nodes.Princess_039.material}
              position={[-7.614, -22.968, 34.784]}
              rotation={[0.495, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_042.geometry}
              material={nodes.Princess_042.material}
              position={[-7.614, -32.572, 26.017]}
              rotation={[0.882, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_045.geometry}
              material={nodes.Princess_045.material}
              position={[-7.614, -38.857, 14.792]}
              rotation={[1.172, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_048.geometry}
              material={nodes.Princess_048.material}
              position={[-7.614, -41.423, 2.21]}
              rotation={[1.457, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_077.geometry}
              material={nodes.Princess_077.material}
              position={[1.855, 38.543, -19.534]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_080.geometry}
              material={nodes.Princess_080.material}
              position={[-5.51, 29.455, -31.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_083.geometry}
              material={nodes.Princess_083.material}
              position={[-7.464, 10.885, -41.059]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_086.geometry}
              material={nodes.Princess_086.material}
              position={[-7.614, -2.084, -41.614]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_089.geometry}
              material={nodes.Princess_089.material}
              position={[-7.614, -15.043, -38.836]}
              rotation={[2.827, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_092.geometry}
              material={nodes.Princess_092.material}
              position={[-7.614, -26.5, -32.159]}
              rotation={[2.529, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_095.geometry}
              material={nodes.Princess_095.material}
              position={[-7.614, -35.083, -22.509]}
              rotation={[2.177, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_098.geometry}
              material={nodes.Princess_098.material}
              position={[-7.614, -40.14, -10.682]}
              rotation={[1.875, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_034.geometry}
              material={nodes.Princess_034.material}
              position={[-7.136, 20.227, 37.874]}
              rotation={[-0.174, -0.063, -0.005]}
              scale={[1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_037.geometry}
              material={nodes.Princess_037.material}
              position={[-7.614, -15.043, 38.836]}
              rotation={[0.315, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_040.geometry}
              material={nodes.Princess_040.material}
              position={[-7.614, -26.5, 32.159]}
              rotation={[0.612, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_043.geometry}
              material={nodes.Princess_043.material}
              position={[-7.614, -35.083, 22.509]}
              rotation={[0.964, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_046.geometry}
              material={nodes.Princess_046.material}
              position={[-7.614, -40.14, 10.682]}
              rotation={[1.266, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_075.geometry}
              material={nodes.Princess_075.material}
              position={[-7.136, 20.227, -37.874]}
              rotation={[-2.967, -0.063, -3.137]}
              scale={[-1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_078.geometry}
              material={nodes.Princess_078.material}
              position={[-1.28, 36.366, -23.72]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_081.geometry}
              material={nodes.Princess_081.material}
              position={[-6.729, 25.032, -35.322]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_084.geometry}
              material={nodes.Princess_084.material}
              position={[-7.484, 6.608, -41.658]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_087.geometry}
              material={nodes.Princess_087.material}
              position={[-7.614, -6.478, -41.2]}
              rotation={[3.009, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_090.geometry}
              material={nodes.Princess_090.material}
              position={[-7.614, -19.177, -37.006]}
              rotation={[2.741, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_093.geometry}
              material={nodes.Princess_093.material}
              position={[-7.614, -29.712, -29.249]}
              rotation={[2.414, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_096.geometry}
              material={nodes.Princess_096.material}
              position={[-7.614, -37.164, -18.718]}
              rotation={[2.076, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_099.geometry}
              material={nodes.Princess_099.material}
              position={[-7.614, -40.956, -6.514]}
              rotation={[1.76, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
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
              material={nodes["p-2-078"].material}
              position={[-0.618, 29.63, 26.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-081"].geometry}
              material={nodes["p-2-081"].material}
              position={[-4.725, 5.559, 39.191]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-084"].geometry}
              material={nodes["p-2-084"].material}
              position={[-4.307, 14.514, 37.387]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-087"].geometry}
              material={nodes["p-2-087"].material}
              position={[-4.638, -7.621, 38.435]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-090"].geometry}
              material={nodes["p-2-090"].material}
              position={[-5.229, -26.572, 29.173]}
              rotation={[0.099, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-093"].geometry}
              material={nodes["p-2-093"].material}
              position={[-6.155, -34.864, 17.755]}
              rotation={[-1.988, -1.246, 1.63]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-096"].geometry}
              material={nodes["p-2-096"].material}
              position={[-5.106, -19.483, 33.968]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-099"].geometry}
              material={nodes["p-2-099"].material}
              position={[-5.229, -26.572, -29.173]}
              rotation={[3.042, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-102"].geometry}
              material={nodes["p-2-102"].material}
              position={[-6.091, -37.999, -8.783]}
              rotation={[-1.384, -1.208, 1.533]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-105"].geometry}
              material={nodes["p-2-105"].material}
              position={[-5.073, -15.632, -35.877]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-108"].geometry}
              material={nodes["p-2-108"].material}
              position={[-6.022, -32.483, -21.877]}
              rotation={[-0.989, -1.231, 1.497]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-111"].geometry}
              material={nodes["p-2-111"].material}
              position={[-6.166, -38.953, -0.25]}
              rotation={[-1.633, -1.201, 1.527]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-114"].geometry}
              material={nodes["p-2-114"].material}
              position={[-6.154, -38.767, 4.283]}
              rotation={[-1.7, -1.199, 1.56]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-117"].geometry}
              material={nodes["p-2-117"].material}
              position={[-3.169, 22.824, -33.268]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-120"].geometry}
              material={nodes["p-2-120"].material}
              position={[-4.725, 5.559, -39.191]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-123"].geometry}
              material={nodes["p-2-123"].material}
              position={[-3.833, 18.739, -35.575]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_102.geometry}
              material={nodes.Princess_102.material}
              position={[-1.28, 36.366, 23.72]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_105.geometry}
              material={nodes.Princess_105.material}
              position={[-6.729, 25.032, 35.322]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_108.geometry}
              material={nodes.Princess_108.material}
              position={[-7.308, 15.486, 39.8]}
              scale={[1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_111.geometry}
              material={nodes.Princess_111.material}
              position={[5.496, 39.95, 16.053]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_114.geometry}
              material={nodes.Princess_114.material}
              position={[-7.136, 20.227, 37.874]}
              rotation={[-0.174, -0.063, -0.005]}
              scale={[1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_117.geometry}
              material={nodes.Princess_117.material}
              position={[1.855, 38.543, -19.534]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_120.geometry}
              material={nodes.Princess_120.material}
              position={[-3.607, 33.32, -28.047]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_123.geometry}
              material={nodes.Princess_123.material}
              position={[-7.614, -22.968, -34.784]}
              rotation={[2.647, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_126.geometry}
              material={nodes.Princess_126.material}
              position={[-7.614, -37.164, -18.718]}
              rotation={[2.076, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_129.geometry}
              material={nodes.Princess_129.material}
              position={[-7.614, -2.084, -41.614]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_132.geometry}
              material={nodes.Princess_132.material}
              position={[-6.729, 25.032, -35.322]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_135.geometry}
              material={nodes.Princess_135.material}
              position={[-7.614, -10.84, -40.246]}
              rotation={[2.922, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-076"].geometry}
              material={nodes["p-2-076"].material}
              position={[1.544, 32.203, 23.25]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_138.geometry}
              material={nodes.Princess_138.material}
              position={[-7.614, -19.177, -37.006]}
              rotation={[2.741, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-079"].geometry}
              material={nodes["p-2-079"].material}
              position={[7.273, 35.241, 16.631]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_141.geometry}
              material={nodes.Princess_141.material}
              position={[-7.614, -41.423, 2.21]}
              rotation={[1.457, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_144.geometry}
              material={nodes.Princess_144.material}
              position={[-7.614, -19.177, 37.006]}
              rotation={[0.401, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-082"].geometry}
              material={nodes["p-2-082"].material}
              position={[-2.092, 26.484, 30.182]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_147.geometry}
              material={nodes.Princess_147.material}
              position={[-7.614, -35.083, 22.509]}
              rotation={[0.964, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-085"].geometry}
              material={nodes["p-2-085"].material}
              position={[-4.486, 10.03, 38.549]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_150.geometry}
              material={nodes.Princess_150.material}
              position={[-7.614, -40.14, 10.682]}
              rotation={[1.266, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-088"].geometry}
              material={nodes["p-2-088"].material}
              position={[-5.184, -23.178, 31.736]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-091"].geometry}
              material={nodes["p-2-091"].material}
              position={[-4.988, -11.627, 37.332]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-094"].geometry}
              material={nodes["p-2-094"].material}
              position={[-4.725, 0.917, 39.191]}
              rotation={[0.052, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-097"].geometry}
              material={nodes["p-2-097"].material}
              position={[-4.988, -11.627, -37.332]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-100"].geometry}
              material={nodes["p-2-100"].material}
              position={[-4.725, 0.917, -39.191]}
              rotation={[3.089, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-103"].geometry}
              material={nodes["p-2-103"].material}
              position={[-4.634, -3.416, -39.118]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-106"].geometry}
              material={nodes["p-2-106"].material}
              position={[-5.339, -29.769, -25.816]}
              rotation={[2.967, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-109"].geometry}
              material={nodes["p-2-109"].material}
              position={[-4.638, -7.621, -38.435]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-112"].geometry}
              material={nodes["p-2-112"].material}
              position={[-6.091, -37.999, 8.783]}
              rotation={[-1.758, -1.208, 1.609]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-115"].geometry}
              material={nodes["p-2-115"].material}
              position={[4.214, 34.06, -19.737]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-118"].geometry}
              material={nodes["p-2-118"].material}
              position={[1.544, 32.203, -23.25]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-121"].geometry}
              material={nodes["p-2-121"].material}
              position={[-4.486, 10.03, -38.549]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-124"].geometry}
              material={nodes["p-2-124"].material}
              position={[7.273, 35.241, -16.631]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_103.geometry}
              material={nodes.Princess_103.material}
              position={[-3.607, 33.32, 28.047]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_106.geometry}
              material={nodes.Princess_106.material}
              position={[-7.585, 2.277, 41.822]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_109.geometry}
              material={nodes.Princess_109.material}
              position={[-7.484, 6.608, 41.658]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_112.geometry}
              material={nodes.Princess_112.material}
              position={[-7.614, -6.478, 41.2]}
              rotation={[0.133, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_115.geometry}
              material={nodes.Princess_115.material}
              position={[-7.614, -41.423, -2.21]}
              rotation={[1.685, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_118.geometry}
              material={nodes.Princess_118.material}
              position={[-1.28, 36.366, -23.72]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_121.geometry}
              material={nodes.Princess_121.material}
              position={[-5.51, 29.455, -31.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_124.geometry}
              material={nodes.Princess_124.material}
              position={[-7.308, 15.486, -39.8]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1.018, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_127.geometry}
              material={nodes.Princess_127.material}
              position={[-7.614, -38.857, -14.792]}
              rotation={[1.97, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_130.geometry}
              material={nodes.Princess_130.material}
              position={[-7.464, 10.885, -41.059]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_133.geometry}
              material={nodes.Princess_133.material}
              position={[-7.614, -15.043, -38.836]}
              rotation={[2.827, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_136.geometry}
              material={nodes.Princess_136.material}
              position={[-7.614, -26.5, -32.159]}
              rotation={[2.529, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_139.geometry}
              material={nodes.Princess_139.material}
              position={[-7.614, -22.968, 34.784]}
              rotation={[0.495, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_142.geometry}
              material={nodes.Princess_142.material}
              position={[-7.614, -29.712, 29.249]}
              rotation={[0.727, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_145.geometry}
              material={nodes.Princess_145.material}
              position={[-7.614, -37.164, 18.718]}
              rotation={[1.066, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_148.geometry}
              material={nodes.Princess_148.material}
              position={[-7.614, -15.043, 38.836]}
              rotation={[0.315, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_151.geometry}
              material={nodes.Princess_151.material}
              position={[-7.136, 20.227, -37.874]}
              rotation={[-2.967, -0.063, -3.137]}
              scale={[-1.147, 1.094, 1.1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-077"].geometry}
              material={nodes["p-2-077"].material}
              position={[4.214, 34.06, 19.737]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-080"].geometry}
              material={nodes["p-2-080"].material}
              position={[-3.833, 18.739, 35.575]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-083"].geometry}
              material={nodes["p-2-083"].material}
              position={[-3.169, 22.824, 33.268]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-086"].geometry}
              material={nodes["p-2-086"].material}
              position={[-4.634, -3.416, 39.118]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-089"].geometry}
              material={nodes["p-2-089"].material}
              position={[-6.022, -32.483, 21.877]}
              rotation={[-2.152, -1.231, 1.645]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-092"].geometry}
              material={nodes["p-2-092"].material}
              position={[-5.339, -29.769, 25.816]}
              rotation={[0.174, 0, 0]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-095"].geometry}
              material={nodes["p-2-095"].material}
              position={[-5.073, -15.632, 35.877]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-098"].geometry}
              material={nodes["p-2-098"].material}
              position={[-5.106, -19.483, -33.968]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-101"].geometry}
              material={nodes["p-2-101"].material}
              position={[-6.155, -34.864, -17.755]}
              rotation={[-1.154, -1.246, 1.512]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-104"].geometry}
              material={nodes["p-2-104"].material}
              position={[-6.154, -38.767, -4.283]}
              rotation={[-1.442, -1.199, 1.582]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-107"].geometry}
              material={nodes["p-2-107"].material}
              position={[-6.177, -36.714, -13.378]}
              rotation={[-1.18, -1.228, 1.597]}
              scale={[-0.024, 0.024, 0.024]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-110"].geometry}
              material={nodes["p-2-110"].material}
              position={[-5.184, -23.178, -31.736]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-113"].geometry}
              material={nodes["p-2-113"].material}
              position={[-6.177, -36.714, 13.378]}
              rotation={[-1.961, -1.228, 1.545]}
              scale={0.024}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-116"].geometry}
              material={nodes["p-2-116"].material}
              position={[-2.092, 26.484, -30.182]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-119"].geometry}
              material={nodes["p-2-119"].material}
              position={[-4.307, 14.514, -37.387]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes["p-2-122"].geometry}
              material={nodes["p-2-122"].material}
              position={[-0.618, 29.63, -26.853]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_101.geometry}
              material={nodes.Princess_101.material}
              position={[1.855, 38.543, 19.534]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_104.geometry}
              material={nodes.Princess_104.material}
              position={[-5.51, 29.455, 31.853]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_107.geometry}
              material={nodes.Princess_107.material}
              position={[-7.464, 10.885, 41.059]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_110.geometry}
              material={nodes.Princess_110.material}
              position={[-7.614, -10.84, 40.246]}
              rotation={[0.219, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_113.geometry}
              material={nodes.Princess_113.material}
              position={[-7.614, -2.084, 41.614]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_116.geometry}
              material={nodes.Princess_116.material}
              position={[-7.614, -40.956, -6.514]}
              rotation={[1.76, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_119.geometry}
              material={nodes.Princess_119.material}
              position={[-7.614, -35.083, -22.509]}
              rotation={[2.177, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_122.geometry}
              material={nodes.Princess_122.material}
              position={[-7.585, 2.277, -41.822]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_125.geometry}
              material={nodes.Princess_125.material}
              position={[-7.614, -29.712, -29.249]}
              rotation={[2.414, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_128.geometry}
              material={nodes.Princess_128.material}
              position={[-7.614, -40.14, -10.682]}
              rotation={[1.875, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_131.geometry}
              material={nodes.Princess_131.material}
              position={[-7.484, 6.608, -41.658]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_134.geometry}
              material={nodes.Princess_134.material}
              position={[-7.614, -6.478, -41.2]}
              rotation={[3.009, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_137.geometry}
              material={nodes.Princess_137.material}
              position={[-7.614, -32.572, -26.017]}
              rotation={[2.259, 0, -Math.PI]}
              scale={[-0.98, 0.98, 0.98]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_140.geometry}
              material={nodes.Princess_140.material}
              position={[-7.614, -40.956, 6.514]}
              rotation={[1.382, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_143.geometry}
              material={nodes.Princess_143.material}
              position={[-7.614, -26.5, 32.159]}
              rotation={[0.612, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_146.geometry}
              material={nodes.Princess_146.material}
              position={[-7.614, -32.572, 26.017]}
              rotation={[0.882, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_149.geometry}
              material={nodes.Princess_149.material}
              position={[-7.614, -38.857, 14.792]}
              rotation={[1.172, 0, 0]}
              scale={0.98}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
            <mesh
              geometry={nodes.Princess_152.geometry}
              material={nodes.Princess_152.material}
              position={[5.496, 39.95, -16.053]}
              rotation={[-Math.PI, 0, Math.PI]}
              scale={[-1, 1, 1]}
            >
              <MeshRefractionMaterial
                envMap={texture}
                aberrationStrength={0.02}
                toneMapped={false}
              />
            </mesh>
          </group>
          <mesh
            geometry={nodes.Heart_1.geometry}
            material={nodes.Heart_1.material}
            position={[0.003, 2.103, 0.616]}
            scale={0.025}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia004.geometry}
            material={nodes.dia004.material}
            position={[-0.416, 2.316, 0.001]}
            rotation={[-Math.PI / 2, 1.396, Math.PI / 2]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia002.geometry}
            material={nodes.dia002.material}
            position={[-0.001, 2.316, -0.37]}
            rotation={[-0.175, 0, 0]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.Diamond_Oval.geometry}
            material={nodes.Diamond_Oval.material}
            position={[-0.001, 2.457, 0]}
            scale={0.025}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia005.geometry}
            material={nodes.dia005.material}
            position={[-0.282, 2.316, 0.266]}
            rotation={[-2.897, 0.77, 2.97]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia007.geometry}
            material={nodes.dia007.material}
            position={[0.28, 2.316, 0.267]}
            rotation={[-2.897, -0.77, -2.97]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia006.geometry}
            material={nodes.dia006.material}
            position={[-0.001, 2.316, 0.366]}
            rotation={[-2.967, 0, Math.PI]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia001.geometry}
            material={nodes.dia001.material}
            position={[0.284, 2.316, -0.266]}
            rotation={[-0.244, -0.77, -0.172]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia003.geometry}
            material={nodes.dia003.material}
            position={[-0.281, 2.316, -0.267]}
            rotation={[-0.244, 0.77, 0.172]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.dia.geometry}
            material={nodes.dia.material}
            position={[0.411, 2.316, 0.001]}
            rotation={[-Math.PI / 2, -1.396, -Math.PI / 2]}
            scale={0.003}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes.Heart_002.geometry}
            material={nodes.Heart_002.material}
            position={[0.003, 2.112, -0.601]}
            scale={0.025}
          >
            <MeshRefractionMaterial
              envMap={texture}
              aberrationStrength={0.02}
              toneMapped={false}
            />
          </mesh>
          <mesh
            geometry={nodes["chaton-heart-2"].geometry}
            material={materials.White}
            position={[0.003, 2.101, 0.564]}
            rotation={[0.698, 0, 0]}
            scale={0.025}
          />
          <mesh
            geometry={nodes["chaton-heart-1"].geometry}
            material={materials.White}
            position={[0.003, 2.101, -0.566]}
            rotation={[2.443, 0, -Math.PI]}
            scale={0.025}
          />
          <mesh
            geometry={nodes.entourage.geometry}
            material={materials.White}
            position={[0, 2.403, 0]}
            scale={0.022}
          />
          <mesh
            geometry={nodes.ring_3.geometry}
            material={silverMaterial}
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
