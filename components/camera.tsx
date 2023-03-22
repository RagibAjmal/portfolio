import { useControls } from "leva";
import { useFrame } from "react-three-fiber";
import Desk from "./desk";

export default function Camera({ controls, lerping, setLerping }: any) {
  const { camX, camY, camZ } = useControls({
    camX: {
      value: 0,
      min: -100,
      max: 100,
      step: 1,
    },
    camY: {
      value: 0,
      min: -100,
      max: 100,
      step: 1,
    },
    camZ: {
      value: 0,
      min: -100,
      max: 100,
      step: 1,
    },
  });

  useFrame(({ camera }, delta) => {
    camera.position.x = camX;
    camera.position.y = camY;
    camera.position.z = camZ;
  });

  return <Desk />;
}
