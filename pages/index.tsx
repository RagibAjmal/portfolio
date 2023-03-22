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
      {scrollPosition}
      <AnimatedComponent
        start={0}
        stop={300}
        scrollPosition={scrollPosition}
        css={{ justifyContent: "left", leftt: "0" }}
      >
        <TypeWriter />
      </AnimatedComponent>
      <AnimatedComponent
        start={450}
        stop={750}
        scrollPosition={scrollPosition}
        css={{ justifyContent: "right", right: "0" }}
      >
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
