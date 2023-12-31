import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "ds5brol44",
    api_key: "964361916131929",
    api_secret: process.env.API_SECRET,
});

const uploadFile = async (file, username) => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const archivosSubidos = await new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                { folder: `reciclar/${username}` },
                (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                }
            )
            .end(buffer);
    });
    return archivosSubidos;
};

export async function POST(request) {
    const data = await request.formData();
    const username = data.get("username");
    const files = data.getAll("files");
    const resultadosSubida = [];

    if (!files || files.length === 0) {
        return NextResponse.json("No se ha enviado ningun archivo", {
            status: 400,
        });
    }

    for (const file of files) {
        const archivoSubido = await uploadFile(file, username);
        resultadosSubida.push(archivoSubido);
    }

    return NextResponse.json({
        message: "Archivos subidos correctamente",
        uploadedFiles: resultadosSubida,
    });
}
