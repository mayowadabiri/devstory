// @ts-nocheck

import Head from "next/head";
import Layout from "../components/layout";
import SplitText from "react-pose-text";
import Image from "next/image";
import { Button } from "../components/button";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 200,
  },
};
const wordPoses = {
  draggable: true,
  dragBounds: { left: "-100%", right: "100%" },
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="landing">
          <div className="landing__container">
            <Image src="/speed.png" alt="speed" layout="fill" />
            <div className="landing__content">
              <h1 className="landing__text mb-bg">
                <SplitText
                  wordPoses={wordPoses}
                  initialPose="exit"
                  pose="enter"
                  charPoses={charPoses}
                >
                  Let the world know your developer's story today
                </SplitText>
              </h1>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
