import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink.jsx";

export default function DragAnimation() {
  return (
    <>
      <Header
        title="Exploring Framer Motion"
        info="Framer Motion is a powerful motion library for React. I've created a few demos to become more familiar with it. This one is focused user input to drag elements. Being a React based library, Framer Motion allows for advanced application animations. Notice the full page transistions I've added to the entire site."
      >
        <CodeLink link="https://github.com/Radlad-io/experiments-site/blob/main/src/pages/framer-motion/drag-animation/index.jsx" />
      </Header>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, trasition: { duration: 1 } }}
        animate={{ opacity: 1, trasition: { duration: 3 } }}
        exit={{ opacity: 0, trasition: { duration: 1 } }}
      >
        <motion.div className={styles.flex}>
          <img
            className={styles.profileImg}
            src="http://localhost:3000/images/philosophers/svg/Kierkegaard.svg"
          ></img>
          <p>
            People demand freedom of speech as a compensation for the freedom of
            thought which they seldom use.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}
