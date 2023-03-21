import Navbar from "./navbar";
import Footer from "./footer";
import Background from "./background";
import { useState } from "react";
import Page from "./pageTransitions";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path =
    router.pathname == "/"
      ? "Home"
      : router.pathname == "/about"
      ? "About"
      : router.pathname == "/projects"
      ? "Projects"
      : "Contact";

  const [pages, setPages] = useState(path);

  return (
    <>
      <div>
        <Navbar pages={pages} setPages={setPages} />
        <Background pages={pages} setPages={setPages} />
        <Page>
          <div>{children}</div>
        </Page>
        <Footer />
      </div>
    </>
  );
}
