import styles from "./index.module.scss";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as variants from "@motion/framer-motion/001.motion";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink.jsx";

export default function DragAnimation() {
  const [startChange, setStartChange] = useState(false);
  const [endChange, setEndChange] = useState(false);
  const [dragStart, setPositionStart] = useState([0, 0]);
  const [dragEnd, setPositionEnd] = useState([0, 0]);

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
        <motion.div className={styles.flex}></motion.div>
      </motion.div>
    </>
  );
}
