"use client";
import Webcam from "react-webcam";
import { useState, useRef } from "react";

export default function Home() {
    const [showWebcam, setShowWebcam] = useState(false);
    const [image, setImage] = useState(null);
    const [mostrar, setMostrar] = useState(false);
    const webcamRef = useRef(null);

    const takePicture = () => {
        setShowWebcam(true);
    };

    const savePicture = () => {
        setShowWebcam(false);
        setImage(webcamRef.current.getScreenshot());
    };

    const showImage = () => {
        setMostrar(true);
    };

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user",
    };

    return (
        <div>
            <h1>App</h1>
            {showWebcam ? (
                <Webcam ref={webcamRef} videoConstraints={videoConstraints} />
            ) : (
                ""
            )}

            {!showWebcam && (
                <button
                    className="bg-white text-black p-2"
                    onClick={takePicture}
                >
                    Abrir Camara
                </button>
            )}
            {showWebcam && (
                <button
                    className="bg-white text-black p-2"
                    onClick={savePicture}
                >
                    Guardar foto
                </button>
            )}
            <div>
                {mostrar && (
                    <div>
                        <p>Foto tomada</p>
                        <img src={image} alt="" />
                    </div>
                )}
            </div>
            <div>
                {image && (
                    <button
                        className="bg-white mt-5 text-black p-2"
                        onClick={showImage}
                    >
                        Mostrar foto tomada
                    </button>
                )}
            </div>
        </div>
    );
}
