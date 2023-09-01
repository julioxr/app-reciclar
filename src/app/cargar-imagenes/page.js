"use client";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import ImageLoader from "@/components/ImageLoader";

const LoadingImages = () => {
    const { username } = useAuth();

    return (
        <>
            <Navbar username={username} />
            <ImageLoader username={username} />
        </>
    );
};

export default LoadingImages;
