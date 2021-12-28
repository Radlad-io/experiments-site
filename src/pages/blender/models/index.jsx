import styles from "./models.module.scss";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Header from "@components/elements/Header/Header";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 1;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default function Model() {
  const [animate, setAnimate] = useState(true);
  return (
    <>
      <Header
        title="Exploring Blender Physics"
        info="This is an exploration of how to animate in Blender using physics. In this instance, the ball is manually keyframed up until it meets the tower of cubes. From that point on, Blender's physics engine takes over and animates the position of everything using properties like weight and friction that are assigned to each of the objects."
        recycle
      />
      <div className="webgl">
        <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
          <CameraController />
          {/* <primitive object={new THREE.AxesHelper(10)} /> */}
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}
