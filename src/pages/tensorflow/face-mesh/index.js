import styles from "./index.module.scss";
import Header from "@components/elements/Header/Header";
import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import { drawMesh } from "@components/utility/tensorflow/TensorflowUtil";

export default function FaceMesh() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runFacemesh = async () => {
    const net = await facemesh.load(
      facemesh.SupportedPackages.mediapipeFacemesh
    );
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const face = await net.estimateFaces({ input: video });
      // console.log(face);

      // Get canvas context
      const ctx = canvasRef.current.getContext("2d");
      requestAnimationFrame(() => {
        drawMesh(face, ctx);
      });
    }
  };

  useEffect(() => {
    runFacemesh();
  }, []);

  return (
    <>
      <Header
        title="Tensorflow Face Mesh"
        info="This was an open source FDM 3d printer design that I was working on for fun. At the time open source machines all seemed to prioritize low cost which presented quality issues. This machine was being designed as a middle ground between high end machines and low cost machines. A surge of new 3d printer companies caused me to halt this project. Valuable experience in CAD was gained."
      />
      <div className={styles.wrapper}>
        <div>
          <Webcam
            ref={webcamRef}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
          <p>Webcam</p>
        </div>
        <div>
          <canvas
            ref={canvasRef}
            style={{
              marginLeft: "auto",
              backgroundColor: "black",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
          <p>Canvas</p>
        </div>
      </div>
    </>
  );
}
