import Link from "next/link";
import styles from "../styles/navbar.module.css";
import Head from "next/head";

export default function Navbar({ pages, setPages }: any) {
  return (
    <>
      <Head>
        <title>{"Ragib Ajmal / " + pages}</title>
        <meta name="description" content="Ragib Ajmal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/R_icon.png" />
      </Head>
      <div className={styles.header_class}>
        <ul className={styles.nav_ul}>
          <li>
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
                  <span className={styles.actualtext}>
                    &nbsp;Projects&nbsp;
                  </span>
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
    </>
  );
}
