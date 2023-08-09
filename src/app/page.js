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

        // console.log(webcamRef.current.getScreenshot());
    };

    const savePicture = () => {
        setShowWebcam(false);
        setImage(webcamRef.current.getScreenshot());
        alert("Foto guardada");
    };

    const showImage = () => {
        setMostrar(true);
    };

    return (
        <div>
            <h1>App</h1>
            {showWebcam ? <Webcam ref={webcamRef} /> : ""}

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
                        <img
                            src="data:image/webp;base64,UklGRlQEAABXRUJQVlA4WAoAAAAgAAAAfwIA3wEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggZgIAAHBEAJ0BKoAC4AE+KRSJQ6GhIRAEABgChLS3cLuwj24D8AP0AAAJ7APfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJiAAA/v+9R///+o1fqgN//UbP//8y5rQe9/5iYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                            alt=""
                        />
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
