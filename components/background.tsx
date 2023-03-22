//use react three fiber to create a 3d scene as a background
//use react spring to animate the background

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring } from "react-spring";
import { useState } from "react";
import { useRef } from "react";
import { useControls } from "leva";
import { PerspectiveCamera } from "@react-three/fiber";
import { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/setup.gltf");
  return <primitive object={gltf.scene} />;
}

export default function Background({ pages, setPages }: any) {
  const [position, setPosition] = useState([0, 0, 0]);
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
    const { camera } = useThree();
    const ref = useRef();
    return (
      <mesh
        ref={ref}
        position={[posX, posY, posZ]}
        rotation={[rotX, rotY, rotZ]}
      >
        <Model />
      </mesh>
    );
  };
  function SceneCamera() {
    const { camera } = useThree();

    useEffect(() => {
      camera.fov = 75;
      camera.near = 1;
      camera.far = 1000;
      camera.position.set([0, 0, 0]);
      camera.rotateY(60);
      camera.updateProjectionMatrix();
    }, []);
    return <PerspectiveCamera makeDefault></PerspectiveCamera>;
  }
  // change camera postion on scroll

  return (
    // set the height and width of the canvas to 100% of the webpage
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 0] }}
    >
      <Suspense>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

        <MyMesh />
        <OrbitControls />
        <Stars />
      </Suspense>
    </Canvas>
  );
}
