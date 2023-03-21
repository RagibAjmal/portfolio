import { useTransition, animated } from "react-spring";

export default function Page({ children }: { children: React.ReactNode }) {
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
