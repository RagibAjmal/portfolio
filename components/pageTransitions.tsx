import { useTransition, animated } from "react-spring";
import { cloneElement } from "react";

export default function Page({ children }: any) {
  const transitions = useTransition(children, {
    from: {
      opacity: 0,
      position: "absolute",
      width: "100%",
    },
    enter: {
      opacity: 1,
      position: "absolute",
      width: "100%",
      transition: "all 0.2s ",
    },
    leave: {
      opacity: 0,
      position: "absolute",
      width: "100%",
    },
  });

  return (
    <div style={{ marginTop: "10vh" }}>
      {transitions((style, item) => (
        <animated.div style={style}>{item}</animated.div>
      ))}
    </div>
  );
}
