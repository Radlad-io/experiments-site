import styles from "./p5.module.scss";
import Header from "@components/elements/Header/Header";
import { motion } from "framer-motion";

export default function P5001() {
  return (
    <>
      <Header
        title="Exploring P5"
        info="This is an exploration of how to animate and interact with audio in P5. In this instance, a song is analyzed and represened by drawing it's waveform on a canvas."
        recycle
      />
      <motion.iframe
        className={styles.frame}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src="https://experiments-p5.vercel.app/04_static_audio_waveform/index.html"
      ></motion.iframe>
    </>
  );
}
