import React, { useEffect, useRef } from "react";

function CameraCapture() {
    const videoRef = useRef();
    const canvasRef = useRef();

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                })
                .catch((error) =>
                    console.error("Error accessing camera:", error)
                );
        }
    }, []);

    const capturePhoto = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Aquí puedes enviar la imagen capturada a tu servidor o realizar cualquier otra acción
    };

    return (
        <div>
            <h1>Camera Capture</h1>
            <video ref={videoRef} autoPlay></video>
            <button onClick={capturePhoto}>Capture Photo</button>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </div>
    );
}

export default function Home() {
    return (
        <div>
            <CameraCapture />
        </div>
    );
}
