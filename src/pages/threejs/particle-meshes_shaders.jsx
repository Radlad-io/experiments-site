import styles from "./threejs.module.scss";
import { motion } from "framer-motion";
import Header from "@components/elements/Header/Header";

export default function particleMeshes() {
  return (
    <>
      <Header
        title="ThreeJS Particle Systems"
        info="This is an exploration of how manipulate particle systems in Three.js. In this instance, a particle system is being mapped to simple geometry. A custom shader is then loaded to move the particles on every tick. A uniform is passed to that same shader so the models can respond to mouse input"
        recycle
      />
      <motion.iframe
        className={styles.frame}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        src="https://experiments-threejs-particles.vercel.app/"
      ></motion.iframe>
    </>
  );
}
