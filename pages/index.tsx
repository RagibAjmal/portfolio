import AnimatedComponent from "@/components/animatedcomponent";
import TypeWriter from "../components/typewriter";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
