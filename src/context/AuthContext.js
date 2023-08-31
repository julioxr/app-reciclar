import { createContext, useContext, useState } from "react";

// Creo el contexto
const AuthContext = createContext();

// Creo el provider (proveedor del contexto)
export function AuthProvider({ children }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = {
        username,
        setUsername,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

// Creo el hook para usar el contexto
export function useAuth() {
    return useContext(AuthContext);
}
