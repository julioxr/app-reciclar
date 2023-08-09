"use client";
import Webcam from "react-webcam";
import { useState, useRef } from "react";

export default function Home() {
    const [showWebcam, setShowWebcam] = useState(false);
    return (
        <div>
            <h1>App</h1>
            {showWebcam ? <Webcam /> : ""}

            <button onClick={() => setShowWebcam(true)}>Abrir Camara</button>
        </div>
    );
}
