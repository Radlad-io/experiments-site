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
        info="Framer Motion is a powerful motion library for React. I've created a few demos to become more familiar with it. This one is focused user input to drag elements. Being a React based library, Framer Motion allows for some advanced application animation. Notice the full page transistions I've added to the entire site."
      />
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, trasition: { duration: 1 } }}
        animate={{ opacity: 1, trasition: { duration: 3 } }}
        exit={{ opacity: 0, trasition: { duration: 1 } }}
      >
        <motion.div className={styles.flex}>
          <div className={styles.restraint}>
            <motion.div
              className={`${styles.drag} drag`}
              whileDrag={{ scale: 1.2 }}
              drag
              dragMomentum={false}
              dragElastic={0.2}
              dragConstraints={{
                top: -200,
                left: -200,
                right: 200,
                bottom: 200,
              }}
              onDragStart={(event, info) => {
                setStartChange(true);
                setPositionStart([
                  Math.floor(info.point.x),
                  Math.floor(info.point.y),
                ]);
              }}
              onDragEnd={(event, info) => {
                setEndChange(true);
                setPositionEnd([
                  Math.floor(info.point.x),
                  Math.floor(info.point.y),
                ]);
              }}
            >
              <p>Drag me</p>
            </motion.div>
          </div>
          <div className={styles.output}>
            <p>
              <b>Mouse Drag Start: </b>
              <br />
              <motion.span
                onAnimationComplete={() => {
                  setStartChange(false);
                }}
                animate={
                  startChange
                    ? {
                        backgroundColor: [
                          "rgba(255,255,0,1)",
                          "rgba(255,255,255,1)",
                        ],
                        transition: { duration: 0.5 },
                      }
                    : { backgroundColor: "rgba(255,255,255,1)" }
                }
              >{`${dragStart[0]}X , ${dragStart[1]}Y`}</motion.span>
            </p>
            <p>
              <b>Mouse Drag End: </b>
              <br />
              <motion.span
                onAnimationComplete={() => {
                  setEndChange(false);
                }}
                animate={
                  endChange
                    ? {
                        backgroundColor: [
                          "rgba(255,255,0,1)",
                          "rgba(255,255,255,1)",
                        ],
                        transition: { duration: 0.5 },
                      }
                    : { backgroundColor: "rgba(255,255,255,1)" }
                }
              >{`${dragEnd[0]}X , ${dragEnd[1]}Y`}</motion.span>
            </p>
          </div>
        </motion.div>
      </motion.div>
      <CodeLink link="https://github.com/Radlad-io/experiments/tree/main/site/src/pages/framer-motion/001" />
    </>
  );
}
