import styles from "./models.module.scss";
import React, { Suspense, useState, useRef, useEffect } from "react";
import Image from "next/image";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  useHelper,
  Environment,
  MeshReflectorMaterial,
  Html,
  MeshWobbleMaterial,
  MeshDistortMaterial,
} from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink";
import Loading from "@components/elements/Loading/Loading";

/*
https://github.com/pmndrs/gltfjsx
Run: npx gltfjsx <glTF model source file>
*/

const dev = process.env.NODE_ENV !== "production";

function Model({ ...props }) {
  const group = useRef();
  const bakedTexture = useTexture(
    dev
      ? "http://localhost:3000/models/forest-road-baked.jpg"
      : "https://experiments.kevinmerinsky.com/models/forest-road-baked.jpg"
  );
  const { nodes, materials } = useGLTF(
    dev
      ? "http://localhost:3000/models/forest-road-baked.glb"
      : "https://experiments.kevinmerinsky.com/models/forest-road-baked.glb"
  );
  return (
    <group
      position={[0, -1, 0]}
      ref={group}
      {...props}
      dispose={null}
      castShadow
      receiveShadow
    >
      <mesh geometry={nodes.Terrain.geometry} material={materials.Ground}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Water.geometry} material={materials.Water}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Road.geometry} material={materials.Raod}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Road Line"]}
        position={[0.39, 1.24, 3.52]}
        rotation={[0, 0.65, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Road Line.001"]}
        position={[-0.06, 1.24, 2.22]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials["Road Line.002"]}
        position={[-0.06, 1.24, 0.57]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials["Road Line.003"]}
        position={[0.17, 1.24, -1.17]}
        rotation={[0, -0.5, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Plane004.geometry}
        material={materials["Road Line.004"]}
        position={[0.89, 1.24, -2.73]}
        rotation={[0, -0.01, 0]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Rock.geometry} material={materials.Rock}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh geometry={nodes.Rock001.geometry} material={nodes.Rock001.material}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock002.geometry}
        material={nodes.Rock002.material}
        position={[-2.55, 1.36, -1.82]}
        rotation={[-1.82, 0.69, -2.6]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock003.geometry}
        material={nodes.Rock003.material}
        position={[-3.16, 1.48, -2.71]}
        rotation={[-0.32, 0.75, 1.12]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock004.geometry}
        material={nodes.Rock004.material}
        position={[2.29, 0.98, 2.13]}
        rotation={[0.67, 0.45, -0.64]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock005.geometry}
        material={nodes.Rock005.material}
        position={[2.33, 1.37, -2.77]}
        rotation={[0.69, 0.07, -2.44]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock006.geometry}
        material={nodes.Rock006.material}
        position={[-2.08, 1.39, -2.28]}
        rotation={[-2.74, 0.27, -2.02]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock007.geometry}
        material={nodes.Rock007.material}
        position={[-3.07, 1.17, 1.37]}
        rotation={[1.64, -0.98, 0.85]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock008.geometry}
        material={nodes.Rock008.material}
        position={[-1.83, 0.84, 2.28]}
        rotation={[0.51, -0.92, 0.15]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock009.geometry}
        material={nodes.Rock009.material}
        position={[2.33, 1.2, -2.21]}
        rotation={[2.29, 0.97, 0.03]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock010.geometry}
        material={nodes.Rock010.material}
        position={[-1.98, 0.97, -2.79]}
        rotation={[-2.26, -0.47, 3.1]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock011.geometry}
        material={nodes.Rock011.material}
        position={[2.8, 0.78, 1.9]}
        rotation={[-2.66, 0.61, 0.75]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock012.geometry}
        material={nodes.Rock012.material}
        position={[2.59, 0.87, 0.01]}
        rotation={[0.22, 0.68, 2.72]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock013.geometry}
        material={nodes.Rock013.material}
        position={[2.98, 0.49, 2.2]}
        rotation={[0.67, 0.45, -0.64]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock014.geometry}
        material={nodes.Rock014.material}
        position={[2.37, 0.58, 2.84]}
        rotation={[0.58, 0.69, -0.14]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock015.geometry}
        material={nodes.Rock015.material}
        position={[2.99, 0.47, -1.23]}
        rotation={[0.22, 0.68, 2.72]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock016.geometry}
        material={nodes.Rock016.material}
        position={[3.04, 0.52, -1.65]}
        rotation={[0.22, 0.68, 2.72]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock017.geometry}
        material={nodes.Rock017.material}
        position={[2.58, 0.8, -2.47]}
        rotation={[0.05, 1.02, -3.05]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock018.geometry}
        material={nodes.Rock018.material}
        position={[-2.06, 1.01, 3.23]}
        rotation={[0.21, -0.76, -0.04]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock019.geometry}
        material={nodes.Rock019.material}
        position={[-0.72, 1.18, -1.88]}
        rotation={[-2.9, 0.44, -1.88]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock020.geometry}
        material={nodes.Rock020.material}
        position={[-2.07, 0.97, 0.62]}
        rotation={[0.06, -0.86, 2.98]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock021.geometry}
        material={nodes.Rock021.material}
        position={[-1.09, 1.2, -1.39]}
        rotation={[-2.96, -0.1, -0.21]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock022.geometry}
        material={nodes.Rock022.material}
        position={[1.18, 1.14, 1.83]}
        rotation={[0.58, 0.69, -0.14]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Rock023.geometry}
        material={nodes.Rock023.material}
        position={[1.21, 1.27, 2.47]}
        rotation={[2.05, 0.11, 1.33]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <group position={[-2.82, 1.17, -0.18]} rotation={[0, -0.09, 0.05]}>
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={nodes.Cylinder002_1.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
      </group>
      <mesh
        geometry={nodes.Tree001.geometry}
        material={nodes.Tree001.material}
        position={[2.26, 0.98, -0.1]}
        rotation={[0.06, -0.15, 0.22]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <group position={[-0.87, 1.22, -2.83]} rotation={[-0.2, 0.61, 0.3]}>
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={nodes.Cylinder003_1.geometry}
          material={nodes.Cylinder003_1.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
      </group>
      <group position={[2.3, 1.33, -1.42]} rotation={[0.06, 1.13, 0.04]}>
        <mesh
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={nodes.Cylinder004_1.geometry}
          material={nodes.Cylinder004_1.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
      </group>
      <mesh
        geometry={nodes.Tree004.geometry}
        material={nodes.Tree004.material}
        position={[-3.44, 1.08, 1.7]}
        rotation={[Math.PI, -0.88, Math.PI]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Tree005.geometry}
        material={nodes.Tree005.material}
        position={[-3.34, 1.22, -1.74]}
        rotation={[-0.92, -1.48, -0.85]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      <group position={[-2.24, 1.02, 1.45]} rotation={[-0.01, -0.49, 0.08]}>
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={nodes.Cylinder001_1.material}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
          {/* <MeshWobbleMaterial
            attach="material"
            map={bakedTexture}
            map-flipY={false}
            factor={0.25}
            speed={2}
          /> */}
        </mesh>
      </group>
      <mesh
        geometry={nodes.Tree007.geometry}
        material={nodes.Tree007.material}
        position={[-2.34, 1.15, -0.44]}
        rotation={[2.4, 0.12, -1.63]}
      >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </group>
  );
}

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const renderTarget = document.querySelector(".webgl");
    window.addEventListener("resize", () => {
      renderTarget.width = window.innerWidth;
      renderTarget.height = window.innerHeight;
    });
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 30;
    controls.min;
    controls.enabled = true;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
export default function ForestRoad() {
  const [animate, setAnimate] = useState(true);

  return (
    <>
      <Header info="" recycle>
        <h3>Exploring Blender</h3>
        <p>
          This is an exploration of how to model and light in Blender. Scenes
          are based on a Polygon Runway course. Blender's cycle render engine
          performers better ray tracing but is not realtime. Similar visuals can
          be acheived in Three.js by baking lighting into the model.
        </p>
        <figure>
          <Image
            src={"/images/forest-road.png"}
            height={550}
            width={700}
            objectFit="cover"
          />
          <figcaption>
            Rendered image from Blender using cycles engine
          </figcaption>
        </figure>
        <CodeLink link="https://github.com/Radlad-io/experiments/tree/main/site/src/pages/blender/models/blender_files/forest-road" />
      </Header>

      <motion.div
        className="webgl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <Canvas
          style={{ width: "100vw", height: "100vh" }}
          dpr={[1, 2]}
          shadows
          gl={{ alpha: false }}
          camera={{ fov: 30, position: [16, 16, 16] }}
        >
          <directionalLight
            castShadow
            intensity={1}
            position={[10, 6, 6]}
            shadow-mapSize={[1024, 1024]}
            color="#fff"
          >
            <orthographicCamera
              attach="shadow-camera"
              left={-20}
              right={20}
              top={20}
              bottom={-20}
            />
          </directionalLight>
          <color attach="background" args={["#dddddd"]} />
          <CameraController enableDamping={true} dampingFactor={0.5} />
          <fog attach="fog" args={["#ddd", 20, 40]} />
          <Suspense
            fallback={
              <Html fullscreen>
                <Loading />
              </Html>
            }
          >
            <mesh position={[0, -1.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={2048}
                mixBlur={0.1}
                mixStrength={1}
                depthScale={2}
                minDepthThreshold={0.85}
                color="#ccc"
                distortion={0.5}
                metalness={0.8}
                roughness={0.5}
              />
            </mesh>
            <Environment preset="dawn" />
            <Model />
          </Suspense>
        </Canvas>
      </motion.div>
    </>
  );
}
