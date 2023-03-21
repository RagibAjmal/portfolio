//use react three fiber to create a 3d scene as a background
//use react spring to animate the background

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

export default function Background({ pages, setPages }: any) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const props = useSpring({
    scale: hover ? [1.1, 1.1, 1.1] : [1, 1, 1],
    color: active ? "#37ff8b" : "#FFFFFF",
  });

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
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Stars />
    </Canvas>
  );
}
