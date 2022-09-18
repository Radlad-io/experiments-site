import styles from "./unity.module.scss";
import Header from "@components/elements/Header/Header";

export default function obstacleCourse() {
  return (
    <>
      <Header
        title="Exploring the Unity Engine"
        info="Unity is a powerful game and graphics rendering engine. In an effort to better understand it, I've been runnning throught a series of tutorials. This is a very basic obstacle course that doesn't include much gameplay."
        recycle
      />
      <iframe
        className={styles.frame}
        src="https://experiment-unity-obstacle-course.vercel.app/"
      ></iframe>
    </>
  );
}
