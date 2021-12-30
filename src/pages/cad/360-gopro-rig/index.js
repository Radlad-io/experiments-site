import styles from "./index.module.scss";
import Header from "@components/elements/Header/Header";
import { motion } from "framer-motion";

export default function GoProRig() {
  return (
    <>
      <Header
        title="360 GoPro Rig"
        info="A friend and former coworker was working on their thesis at Parsons and was exploring the possibility of 360 video. At the time, 360 camera rigs were very expensive or very poor quality. Between the two of us we had access to a bunch of GoPros so we experimented with the idea a 3D printed / laser cut solution to creating a camer array. He eventually received a grant and went with an off the shelf solution."
      />
      <motion.iframe
        className={styles.frame}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src="https://myhub.autodesk360.com/ue29e8783/g/shares/SH7f1edQT22b515c761ecd60ccff8edd7b06"
      ></motion.iframe>
    </>
  );
}
