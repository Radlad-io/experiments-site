import styles from "./index.module.scss";
import Header from "@components/elements/Header/Header";
import { motion } from "framer-motion";

export default function DragonBerry() {
  return (
    <>
      <Header
        title="DragonBerry"
        info="DragonBerry was a project for work. We wanted to see if it was possible to retrofit a Oxberry with stepper motors so the unit could be controlled digitally with DragonFrame software."
      />
      <motion.iframe
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.frame}
        src="https://myhub.autodesk360.com/ue29e8783/g/shares/SH7f1edQT22b515c761ec8ebc2f9953ece21"
      ></motion.iframe>
    </>
  );
}
