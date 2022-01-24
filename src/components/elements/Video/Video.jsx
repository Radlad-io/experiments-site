import styles from "./Video.module.scss";
import {motion} from 'framer-motion';
;


export default function Video() {
  return (
    <>
      <motion.div className={styles.wrapper} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .75}}} exit={{opacity: 0, transition: {duration: 0.75} }}>
        <video
          src="https://s3.blk.studio/Personal/Experiments/Blender/001/Blender_Physics%20001.mp4"
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
