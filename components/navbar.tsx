import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Navbar() {
  const [pages, setPages] = useState("Home");

  return (
    <div className={styles.header_class}>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_li}>
          <div>
            <Link href="/">
              <button
                data-text="Awesome"
                className={styles.button}
                onClick={() => setPages("Home")}
              >
                <span className={styles.actualtext}>&nbsp;Home&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{
                    width: pages == "Home" ? "100%" : "0",
                    borderBottom: pages == "Home" ? "6px solid #37ff8b" : "0",
                  }}
                  aria-hidden="true"
                >
                  &nbsp;Home&nbsp;
                </span>
              </button>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link href="/about">
              <button
                data-text="Awesome"
                className={styles.button}
                onClick={() => setPages("About")}
              >
                <span className={styles.actualtext}>&nbsp;About&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{ width: pages == "About" ? "100%" : "0" }}
                  aria-hidden="true"
                >
                  &nbsp;About&nbsp;
                </span>
              </button>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link href="/projects">
              <button
                data-text="Awesome"
                className={styles.button}
                onClick={() => setPages("Projects")}
              >
                <span className={styles.actualtext}>&nbsp;Projects&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{ width: pages == "Projects" ? "100%" : "0" }}
                  aria-hidden="true"
                >
                  &nbsp;Projects&nbsp;
                </span>
              </button>
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link href="/contact">
              <button
                data-text="Awesome"
                className={styles.button}
                onClick={() => setPages("Contact")}
              >
                <span className={styles.actualtext}>&nbsp;Contact&nbsp;</span>
                <span
                  className={styles.hovertext}
                  style={{ width: pages == "Contact" ? "100%" : "0" }}
                  aria-hidden="true"
                >
                  &nbsp;Contact&nbsp;
                </span>
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
