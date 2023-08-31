"use client";
import Login from "@/components/Login";
import { AuthProvider } from "@/context/AuthContext";

export default function Home() {
    return (
        <AuthProvider>
            <main className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
                <Login />
            </main>
        </AuthProvider>
    );
}
