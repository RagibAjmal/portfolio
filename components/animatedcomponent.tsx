import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import styles from "../styles/container.module.css";

export default function AnimatedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [ref, inView] = useInView({ threshold: 0.85 });
  // const props = useSpring({
  //   opacity: inView ? 1 : 0,
  // });

  return (
    // <animated.div ref={ref} style={props}>
    <div className={styles.container}>
      <div className={styles.animationbox}>{children}</div>
    </div>
    // </animated.div>
  );
}
