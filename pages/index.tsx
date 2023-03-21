import AnimatedComponent from "@/components/animatedcomponent";
import TypeWriter from "../components/typewriter";

export default function Home() {
  return (
    <>
      <AnimatedComponent>
        <TypeWriter />
      </AnimatedComponent>
      <AnimatedComponent>
        <TypeWriter />
      </AnimatedComponent>

      <div
        style={{
          position: "absolute",
          height: "200vh",
          width: "1vw",
          marginTop: "10vh",
        }}
      ></div>
    </>
  );
}
