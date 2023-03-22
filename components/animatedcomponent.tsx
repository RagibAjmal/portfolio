import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import styles from "../styles/container.module.css";

export default function AnimatedComponent({
  children,
  start,
  stop,
  scrollPosition,
  css,
}: any) {
  const visible =
    (scrollPosition > start && scrollPosition < stop) ||
    (start == 0 && scrollPosition < stop);
  const props = useSpring({
    opacity: visible ? 1 : 0,
    transition: "all 0.3s",
  });

  return (
    <animated.div style={props}>
      <div className={styles.container} style={css}>
        <div className={styles.animationbox}>{children}</div>
      </div>
    </animated.div>
  );
}
