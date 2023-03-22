//use react three fiber to create a 3d scene as a background
//use react spring to animate the background

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring } from "react-spring";
import { useState } from "react";
import { useRef } from "react";
import { useControls } from "leva";
import { useEffect, Suspense } from "react";
import Desk from "./desk";
import Camera from "./camera";
import { useFrame } from "@react-three/fiber";

export default function Background({ pages, setPages }: any) {
  const ref = useRef();
  const [lerping, setLerping] = useState(false);

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
        <Camera />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
