import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "react-three-fiber";
import { useState } from "react";

export default function Desk() {
  const Model = () => {
    const gltf = useGLTF("/setup.gltf");
    return <primitive object={gltf.scene} />;
  };

  const { posX, posY, posZ, rotX, rotY, rotZ } = useControls({
    posX: {
      value: 0,
      min: -100,
      max: 100,
      step: 1,
    },
    posY: {
      value: 0,
      min: -100,
      max: 100,
      step: 1,
    },
    posZ: {
      value: 0,
      min: -100,
      max: 100,
      step: 1,
    },
    rotX: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
    },
    rotY: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
    },
    rotZ: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
    },
  });

  const MyMesh = () => {
    return (
      <mesh position={[posX, posY, posZ]} rotation={[rotX, rotY, rotZ]}>
        <Model />
      </mesh>
    );
  };
  return <MyMesh />;
}
