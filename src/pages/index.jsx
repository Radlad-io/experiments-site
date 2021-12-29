import { useRouter } from "next/router";
import styles from "./Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@components/layout/Container/Container";
import Layout from "@components/utility/Metadata";
import router from "next/router";

const pageWrapper = {
  initial: {
    opacity: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const heading = {
  initial: {
    opacity: 0,
    y: 15,
    transition: {
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: 15,
    transition: {
      ease: "easeInOut",
    },
  },
};

const articles = {
  initial: {
    opacity: 0,
    y: 15,
    transition: {
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 1,
    y: [15, -4, 0],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      exit={"out"}
      initial={"initial"}
      animate={"in"}
      variants={pageWrapper}
    >
      <Layout>
        <Container>
          <main className={styles.wrapper}>
            <motion.h1 variants={heading}>Experiments</motion.h1>
            <motion.ul variants={heading} className={styles.legend}>
              <p>
                <b>Legend: </b>
              </p>
              <li className={styles.wip}>
                <p>Work in progress</p>
              </li>
              <li className={styles.tutorial}>
                <p>Tutorial Based</p>
              </li>
              <li className={styles.demo}>
                <p>Demo</p>
              </li>
              <li className={styles.project}>
                <p>Project</p>
              </li>
            </motion.ul>
            <div className={styles.grid}>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.current}
              >
                <h2>Currently working on</h2>
                <ul>
                  <li>
                    <Link
                      href="https://bubble-cardinal-65d.notion.site/Lander-Game-259d5c2e192449239549158dc749caf1"
                      passHref
                    >
                      A three dimensional version of Atari's 1979 Lunar Lander
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.awwwards.com/academy/course/flawless-typography-understanding-and-breaking-the-rules"
                      passHref
                    >
                      A typography course
                    </Link>
                  </li>
                  <li>
                    <Link href="https://thebookofshaders.com/" passHref>
                      Getting through the book of shaders
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.framerMotion}
              >
                <h2>Framer Motion</h2>
                <ul>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Orchestration + State
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Adding Masks
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Keyframes
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/002" passHref scroll={false}>
                      Intersection Observer
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/003" passHref scroll={false}>
                      Parallax effect
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/003" passHref scroll={false}>
                      Custom cursor
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Drag + Drop
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link href="/framer-motion/001" passHref scroll={false}>
                      Shared layout
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.threejs}
              >
                <h2>Three.js</h2>
                <ul>
                  <li className={styles.wip}>
                    <Link
                      href="https://lander-game.kevinmerinsky.com/"
                      passHref
                      scroll={false}
                    >
                      Lander Game
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="https://experiments-traffic-game.vercel.app/"
                      passHref
                      scroll={false}
                    >
                      Traffic Game
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="/threejs/particle-meshes_shaders"
                      passHref
                      scroll={false}
                    >
                      Particle Meshes + Fragment Shaders
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article variants={articles} className={styles.block}>
                <h2>AFrame</h2>
                <div id="vertFlex">
                  <ul>
                    {/* <li>
                      <Link href="https://ar.uarts.edu" passHref scroll={false}>
                        Augmented Reality App
                      </Link>
                    </li> */}
                    <li>
                      <Link href="https://ar.uarts.edu" passHref scroll={false}>
                        <a>
                          AR Viewbook
                          <i className={`material-icons-outlined`}>
                            open_in_new
                          </i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className={styles.disclaimer}>
                    <i className={`material-icons-outlined`}>
                      report_gmailerrorred
                    </i>
                    <p>Requires printed material</p>
                  </div>
                </div>
              </motion.article>
              <motion.article variants={articles} className={styles.block}>
                <h2>Arduino</h2>
                <ul>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=G_-dKWhOJTg"
                      passHref
                      scroll={false}
                    >
                      <a>
                        Slo-Mo Video Booth
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article variants={articles} className={styles.block}>
                <h2>Electron</h2>
                <div id="vertFlex">
                  <ul>
                    <li>
                      <Link
                        href="https://github.com/Radlad-io/RadBooth-App"
                        passHref
                        scroll={false}
                      >
                        <a>
                          Application
                          <i className={`material-icons-outlined`}>
                            open_in_new
                          </i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className={styles.disclaimer}>
                    <i className={`material-icons-outlined`}>
                      report_gmailerrorred
                    </i>
                    <p>Requires special hardware</p>
                  </div>
                </div>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>React Native</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>Node.JS</h2>
                <ul>
                  <li>
                    <Link
                      href="https://github.com/Radlad-io/Soundbot"
                      passHref
                      scroll={false}
                    >
                      <a>
                        SoundBot
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/Radlad-io/radbooth-service"
                      passHref
                      scroll={false}
                    >
                      <a>
                        Service
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.webXr}
              >
                <h2>WebXR API</h2>
                <div id={styles.vertFlex}>
                  <ul>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/001" passHref scroll={false}>
                        Basic Scene
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/002" passHref scroll={false}>
                        Basic Scene + WebXR
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/003" passHref scroll={false}>
                        Additional Objects
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/004" passHref scroll={false}>
                        Additional Objects + Animation
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/005" passHref scroll={false}>
                        Model loading
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/006" passHref scroll={false}>
                        Animated Model
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/007" passHref scroll={false}>
                        Touch gestures
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/008" passHref scroll={false}>
                        Hit testing (reticle only)
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/009" passHref scroll={false}>
                        Hit testing
                      </Link>
                    </li>
                  </ul>

                  <div className={styles.disclaimer}>
                    <i className={`material-icons-outlined`}>
                      report_gmailerrorred
                    </i>
                    <p>Requires special browser</p>
                  </div>
                </div>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>TensorFlow.JS</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article variants={articles} className={styles.block}>
                <h2>P5.JS</h2>
                <ul>
                  <li className={styles.tutorial}>
                    <Link
                      href="/p5/01_simple-canvas-drawing"
                      passHref
                      scroll={false}
                    >
                      Simple Canvas
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="/p5/02_input-interactions"
                      passHref
                      scroll={false}
                    >
                      User Interactions
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link href="/p5/03_audio_input" passHref scroll={false}>
                      Audio Input
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="/p5/04_static_audio_waveform"
                      passHref
                      scroll={false}
                    >
                      Audio Waveform
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="/p5/05_amplitude_and_waveform"
                      passHref
                      scroll={false}
                    >
                      Amplitude Waveform
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.nodejs}
              >
                <h2>Blender</h2>
                <ul>
                  <li className={styles.tutorial}>
                    <Link href="/blender/001" passHref scroll={false}>
                      Physics animation
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="/blender/models/forest-road"
                      passHref
                      scroll={false}
                    >
                      Forest Road Scene
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.comingSoon}
              >
                <h2>Spark AR Studio</h2>
                <p>Coming soon.</p>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.fusion360}
              >
                <h2>Fusion360 / CAD</h2>
                <ul>
                  <li>
                    <Link href="/cad/3d-printer" passHref scroll={false}>
                      3D Printer
                    </Link>
                  </li>
                  <li>
                    <Link href="/cad/radbooth" passHref scroll={false}>
                      Radbooth
                    </Link>
                  </li>
                </ul>
              </motion.article>
            </div>
          </main>
        </Container>
      </Layout>
    </motion.div>
  );
}
