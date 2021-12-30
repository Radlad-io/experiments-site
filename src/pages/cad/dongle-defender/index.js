import styles from "./index.module.scss";
import Header from "@components/elements/Header/Header";
import { motion } from "framer-motion";

export default function DongleDefender() {
  return (
    <>
      <Header
        title="Dongle Defender"
        info="Dongle Defender was something I designed at work. As a technology department we had to constently replace display dongles that vanshed. As a solution, I designed this 3D printed protector that encased the display dongle and secured it using tamper proof bolts. While not impenetrable, it was more than enough to them from vanishing."
      />
      <motion.iframe
        className={styles.frame}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src="https://myhub.autodesk360.com/ue29e8783/g/shares/SH9285eQTcf875d3c5392883fa20709b2182"
      ></motion.iframe>
    </>
  );
}
