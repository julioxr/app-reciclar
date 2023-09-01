import { createContext, useContext, useState, useEffect } from "react";

// Creo el contexto
const AuthContext = createContext();

// Creo el provider (proveedor del contexto)
export function AuthProvider({ children }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const savedUser = localStorage.getItem("usuario");
        const parsedUser = JSON.parse(savedUser);
        if (savedUser) {
            setUsername(parsedUser.username);
            setPassword(parsedUser.password);
            setIsAdmin(parsedUser.admin);
            setSchools(parsedUser.schools);
            setIsLoggedIn(true);
        }
    }, []);

    const value = {
        username,
        setUsername,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
        isAdmin,
        schools,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

// Creo el hook para usar el contexto
export function useAuth() {
    return useContext(AuthContext);
}
