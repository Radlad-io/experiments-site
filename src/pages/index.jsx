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
              <p className={styles.key}>
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
                    <Link href="https://polygonrunway.com/" passHref>
                      Learning the ins and outs of Blender
                    </Link>
                  </li>
                  <li>
                    <Link href="https://thebookofshaders.com/" passHref>
                      Getting through the book of shaders
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article variants={articles} className={styles.block}>
                <h2>Unreal Engine</h2>
                <div id="vertFlex">
                  <ul>
                    <li className={styles.tutorial}>
                      <Link
                        href="https://github.com/Radlad-io/Unreal-Warehouse-Wreckage/blob/main/README.md"
                        passHref
                        scroll={false}
                      >
                        <a target="_blank" rel="noreferrer">
                          Wearhouse Wreckage
                          <i className={`material-icons-outlined`}>
                            open_in_new
                          </i>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link
                        href="https://github.com/Radlad-io/unreal-obstacle-assault/tree/master"
                        passHref
                        scroll={false}
                      >
                        <a target="_blank" rel="noreferrer">
                          Obstacle Assualt
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
                    <p>Requires Unreal Engine 5.0.2</p>
                  </div>
                </div>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.framerMotion}
              >
                <h2>Framer Motion</h2>
                <ul>
                  <li className={styles.demo}>
                    <Link
                      href="/framer-motion/orchestration-state"
                      passHref
                      scroll={false}
                    >
                      Orchestration + State
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link
                      href="/framer-motion/drag-animation"
                      passHref
                      scroll={false}
                    >
                      Drag Animation
                    </Link>
                  </li>
                  <li className={styles.demo}>
                    <Link
                      href="/framer-motion/scroll-reveal"
                      passHref
                      scroll={false}
                    >
                      Scroll Reveal
                    </Link>
                  </li>
                </ul>
              </motion.article>

              <motion.article variants={articles} className={styles.block}>
                <h2>AFrame</h2>
                <div id="vertFlex">
                  <ul>
                    <li>
                      <Link href="https://ar.uarts.edu" passHref scroll={false}>
                        <a target="_blank" rel="noreferrer">
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
                <h2>Electron</h2>
                <div id="vertFlex">
                  <ul>
                    <li className={styles.wip}>
                      <Link
                        href="https://github.com/Radlad-io/RadBooth-App"
                        passHref
                        scroll={false}
                      >
                        <a target="_blank" rel="noreferrer">
                          RadBooth Application
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
                id={styles.threejs}
              >
                <h2>Three.js</h2>
                <ul>
                  <li className={styles.wip}>
                    <Link
                      href="https://lander-game.kevinmerinsky.com"
                      passHref
                      scroll={false}
                    >
                      <a target="_blank" rel="noreferrer">
                        Lunar Lander Game
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                  <li className={styles.wip}>
                    <Link
                      href="https://github.com/Black-Dot-Studio/three-zapworks"
                      passHref
                      scroll={false}
                    >
                      <a target="_blank" rel="noreferrer">
                        Advanced AR Application
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="https://traffic-game.kevinmerinsky.com"
                      passHref
                      scroll={false}
                    >
                      <a target="_blank" rel="noreferrer">
                        Traffic Game
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="/threejs/particle-meshes_shaders"
                      passHref
                      scroll={false}
                    >
                      Particle Meshes + Shaders
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
                      Physics Animation
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
              <motion.article variants={articles} className={styles.block}>
                <h2>Arduino</h2>
                <ul>
                  <li>
                    <Link
                      href="https://www.youtube.com/watch?v=G_-dKWhOJTg"
                      passHref
                      scroll={false}
                    >
                      <a target="_blank" rel="noreferrer">
                        Slo-Mo Video Booth
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                </ul>
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
                      <a target="_blank" rel="noreferrer">
                        Discord SoundBot
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                  <li className={styles.wip}>
                    <Link
                      href="https://github.com/Radlad-io/radbooth-service"
                      passHref
                      scroll={false}
                    >
                      <a target="_blank" rel="noreferrer">
                        RadBooth Service
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
                      <Link href="/webxr/004" passHref scroll={false}>
                        Objects + Animation
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/005" passHref scroll={false}>
                        Model Loading
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/006" passHref scroll={false}>
                        Animated Model
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/007" passHref scroll={false}>
                        Touch Gestures
                      </Link>
                    </li>
                    <li className={styles.tutorial}>
                      <Link href="/webxr/009" passHref scroll={false}>
                        Hit Testing
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
              <motion.article variants={articles} className={styles.block}>
                <h2>TensorFlow.JS</h2>
                <ul>
                  <li className={styles.demo}>
                    <Link href="/tensorflow/face-mesh" passHref scroll={false}>
                      Face Mesh
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article variants={articles} className={styles.block}>
                <h2>P5.JS</h2>
                <ul>
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
                  <li className={styles.tutorial}>
                    <Link
                      href="/p5/06_webgl_and_shaders"
                      passHref
                      scroll={false}
                    >
                      WebGL + Shaders
                    </Link>
                  </li>
                  <li className={styles.tutorial}>
                    <Link
                      href="/p5/07_noise_and_shaders"
                      passHref
                      scroll={false}
                    >
                      Noise + Shaders
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
                      RadBooth
                    </Link>
                  </li>
                  <li>
                    <Link href="/cad/dongle-defender" passHref scroll={false}>
                      Dongle Defender
                    </Link>
                  </li>
                  <li>
                    <Link href="/cad/dragonberry" passHref scroll={false}>
                      DragonBerry
                    </Link>
                  </li>
                  <li>
                    <Link href="/cad/360-gopro-rig" passHref scroll={false}>
                      360 GoPro Rig
                    </Link>
                  </li>
                </ul>
              </motion.article>
              <motion.article
                variants={articles}
                className={styles.block}
                id={styles.fusion360}
              >
                <h2>DragonFrame</h2>
                <ul>
                  <li>
                    <Link
                      href="https://youtu.be/to7CT1D7nhg"
                      passHref
                      scroll={false}
                    >
                      <a target="_blank" rel="noreferrer">
                        Unicorn Origami
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://vimeo.com/487390693/4361ad42aa"
                      passHref
                      scroll={false}
                    >
                      <a target="_blank" rel="noreferrer">
                        Google Cardboard Tour
                        <i className={`material-icons-outlined`}>open_in_new</i>
                      </a>
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
