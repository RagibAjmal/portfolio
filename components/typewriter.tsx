import { useState } from "react";
import dynamic from "next/dynamic";
const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
  ssr: false,
});

export default function TypeWriter() {
  const Load = useState(<div>Loading...</div>);

  return (
    <div style={{ height: "20vh", width: "70vw" }}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Roboto",
          color: "#FFFFFF",
          fontWeight: 5000,
          fontSize: "3.5em",
        }}
        startDelay={500}
        cursorColor="#FFFFFF"
        text="Hi! I am "
        typeSpeed={75}
        hideCursorAfterText={true}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Roboto",
          color: "#37ff8b",
          fontWeight: 10000,
          fontSize: "3.5em",
        }}
        startDelay={2000}
        cursorColor="#FFFFFF"
        multiText={["Ragib Ajmal", "a Software Developer"]}
        multiTextDelay={1500}
        typeSpeed={150}
        multiTextLoop={true}
      />
    </div>
  );
}
