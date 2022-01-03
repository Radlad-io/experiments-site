import styles from "./index.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink.jsx";

const dev = process.env.NODE_ENV !== "production";
const transition = { ease: [0.5, 0.01, -0.05, 0.9] };

export const wrapperVariant = {
  in: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  out: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: 1,
    },
  },
};
export const boxVariant = {
  initial: {
    opacity: 0,
    width: 0,
  },
  in: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.75,
    },
  },
  out: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 1,
    },
  },
};

// TODO: Fix X scrolling
export default function ScrollReveal() {
  const [animate, setAnimate] = useState(true);
  return (
    <>
      <Header
        title="Exploring Framer Motion"
        info="Framer Motion is a powerful motion library for React. I've created a few demos to become more familiar with it. This one is focused on hooking into the intersection observer to trigger an animation when an object is in the viewport. Being a react based library, Framer Motion allows for some advanced application animations. Notice the full page transistions I've added to the entire site."
      >
        <CodeLink link="https://github.com/Radlad-io/experiments-site/blob/main/src/pages/framer-motion/scroll-reveal/index.jsx" />
      </Header>
      <motion.div
        className={styles.wrapper}
        variants={wrapperVariant}
        initial={"inital"}
        exit={"out"}
      >
        <div className={styles.flex}>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>First</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Second</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Third</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Fourth</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Fifth</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Sixth</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Seventh</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Eighth</p>
          </motion.div>
          <motion.div
            className={styles.block}
            variants={boxVariant}
            whileInView={"in"}
            style={{
              backgroundImage: dev
                ? "url(http://localhost:3000/images/forest-road.png)"
                : "url(https://experiments.kevinmerinsky.com/images/forest-road.png)",
            }}
          >
            <p>Ninth</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
