import styles from "./webxr.module.scss";

import Header from "@components/elements/Header/Header";
import CodeLink from "@components/elements/CodeLink/CodeLink";

export default function Blender001() {
  return (
    <>
      <Header
        title="Exploring WebXR API"
        info={
          <p>
            Reading touch gestures. The intention of this project is to explore
            the very new WebXR API, which will one day power augmented reality
            experiences delivered via web browsers. At this time, these
            experiments can only be run in browsers which support the API which
            are few and far between.{" "}
            <b>
              <a href={"https://labs.mozilla.org/projects/webxr-viewer/"}>
                WebXRViewer
              </a>{" "}
            </b>
            by Mozilla is the only option I know of currently.
          </p>
        }
      >
        <CodeLink link="https://github.com/Radlad-io/experiments-webxr/blob/main/6-touch_gestures.html" />
      </Header>
      <iframe
        className={styles.frame}
        src="https://webxr.kevinmerinsky.com/6-touch_gestures.html"
      ></iframe>
      <div className={styles.launch}>
        <a href="https://webxr.kevinmerinsky.com/6-touch_gestures.html">
          Launch WebXR Application
          <i className={`${styles.external} material-icons-outlined`}>
            open_in_new
          </i>
        </a>
      </div>
    </>
  );
}
