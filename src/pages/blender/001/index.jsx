import styles from "./001.module.scss";
import React, { useState } from "react";

import Header from "@components/elements/Header/Header";
import Video from "@components/elements/Video/Video";
import CodeLink from "@components/elements/CodeLink/CodeLink";
export default function Blender001() {
  return (
    <>
      <Header
        title="Exploring Blender Physics"
        info="This is an exploration of how to animate in Blender using physics. In this instance, the ball is manually keyframed up until it meets the tower of cubes. From that point on, Blender's physics engine takes over and animates the position of everything using properties like weight and friction that are assigned to each of the objects."
      ></Header>
      <div className={styles.flex}>
        <Video />
      </div>
    </>
  );
}
