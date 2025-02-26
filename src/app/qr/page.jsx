"use client";
import React, { useState, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

const QRPage = () => {
  const [data, setData] = useState("No result");
  const videoRef = useRef(null);

  const startScanning = async () => {
    try {
      const constraints = {
        video: {
          facingMode: { ideal: "environment" }, // Prioritize back camera
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;

      const reader = new BrowserMultiFormatReader();
      reader.decodeFromVideoElement(videoRef.current, (result) => {
        if (result) {
          setData(result.getText());
          stopScanning(); // Stop immediately after scanning
        }
      });
    } catch (error) {
      console.error("Camera access error:", error);
    }
  };

  const stopScanning = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div>
      <h2>Scan a QR Code</h2>
      <button onClick={startScanning}>Start Scanning</button>
      <p>
        Scanned Data:{" "}
        <a href={data !== "No result" ? data : "#"} target="_blank" rel="noopener noreferrer">
          {data}
        </a>
      </p>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxWidth: "400px" }} />
    </div>
  );
};

export default QRPage;
