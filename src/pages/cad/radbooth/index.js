import styles from "./index.module.scss";
import Header from "@components/elements/Header/Header";
import { motion } from "framer-motion";

export default function RadBooth() {
  return (
    <>
      <Header
        title="RadBooth"
        info="This was an open source Photo and Video booth I'm working on. The general idea is that it will utilize a mirrorless camera connected to a small single board computer to create a photo booth capable of creative images, GIFs, videos and slow motion videos."
        recycle
      />
      <motion.iframe
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.frame}
        src="https://myhub.autodesk360.com/ue29e8783/g/shares/SH9285eQTcf875d3c53963fea12558efdd32"
      ></motion.iframe>
    </>
  );
}
