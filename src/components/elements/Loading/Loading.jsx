import styles from "./Loading.module.scss";
import * as variants from "./Loading.motion";
import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      className={styles.flex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.loading}></div>;
    </motion.div>
  );
}

export default Loading;
