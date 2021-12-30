import styles from "./index.module.scss";
import Header from "@components/elements/Header/Header";
import { motion } from "framer-motion";

export default function PrinterDesign() {
  return (
    <>
      <Header
        title="3D Printer Design"
        info="This was an open source FDM 3d printer design that I was working on for fun. At the time open source machines all seemed to prioritize low cost which presented quality issues. This machine was being designed as a middle ground between high end machines and low cost machines. A surge of new 3d printer companies caused me to halt this project. Valuable experience in CAD was gained."
        recycle
      />
      <motion.iframe
        className={styles.frame}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src="https://myhub.autodesk360.com/ue29e8783/g/shares/SH7f1edQT22b515c761e7856c5f45f3ad7ab"
      ></motion.iframe>
    </>
  );
}
