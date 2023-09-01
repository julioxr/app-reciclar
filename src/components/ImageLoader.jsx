"use client";
import { useState, useEffect } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import ErrorMessage from "./ErrorMessage";

const ImageLoader = ({ username }) => {
    const [files, setFiles] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fileNames, setFileNames] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (files) {
            const names = Array.from(files).map((file) => file.name);
            setFileNames(names);
        }
    }, [files]);

    const manageFiles = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length > 2) {
            setError(true);
        } else {
            setFiles(selectedFiles);
            setError(false);
        }
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true); // Activar el loader

        const formData = new FormData();

        if (!files) {
            return alert("Toma una foto o carga un archivo");
        } else {
            for (const file of files) {
                formData.append("files", file);
                formData.append("username", username);
            }
        }

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });
        const data = await res.json();

        setImages(data.uploadedFiles);
        setLoading(false); // Desactivar el loader después de la solicitud
    };

    return (
        <main className="bg-gray-200 min-h-[calc(100vh-48px)] flex flex-col justify-center items-center">
            <form
                onSubmit={(e) => {
                    handleForm(e);
                }}
                onClick={() => {
                    document.querySelector("#input").click();
                }}
                className="flex flex-col gap-4 justify-center items-center border-dashed border-2 border-blue-400 h-[300px] w-[500px] rounded-md cursor-pointer mb-2"
            >
                <input
                    type="file"
                    name="file"
                    accept="image/*"
                    multiple
                    id="input"
                    onChange={(e) => {
                        manageFiles(e);
                    }}
                    className="hidden"
                />
                <MdCloudUpload className="text-blue-400 w-16 h-16" />
                <p className="text-gray-800">
                    Cargar archivos (maximo 2 imagenes)
                </p>
                {/* <button
                    type="submit"
                    className="w-32 h-8 bg-gray-100 text-black"
                    disabled={loading} // Desactivar el botón mientras se carga
                >
                    {loading ? "Cargando..." : "Cargar"}
                </button> */}
            </form>
            {error && (
                <ErrorMessage message="*Solo se pueden subir max 2 fotos" />
            )}
            <section className="flex flex-col mt-8 gap-2">
                {fileNames &&
                    fileNames.map((fileName) => (
                        <div
                            className="flex items-center bg-blue-200 rounded-md p-4 justify-between w-[500px]"
                            key={fileName}
                        >
                            <AiFillFileImage className="text-blue-400 w-6 h-6" />
                            <div className="flex gap-4">
                                <p className="truncate w-[300px] text-end">
                                    {fileName}
                                </p>
                                <MdDelete className="text-red-500 w-6 h-6" />
                            </div>
                        </div>
                    ))}
            </section>
        </main>
    );
};

export default ImageLoader;
