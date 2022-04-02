import styles from "./Video.module.scss";
import { motion } from "framer-motion";
export default function Video() {
  return (
    <>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75 } }}
        exit={{ opacity: 0, transition: { duration: 0.75 } }}
      >
        <video
          src="https://s3.fervor.nyc3.digitaloceanspaces.com/personal/experiments/blender/Blender_Physics.mp4"
          autoPlay
          playsInline
          muted
          loop
          controls
        ></video>
      </motion.div>
    </>
  );
}
