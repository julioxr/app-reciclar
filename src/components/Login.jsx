import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import HandleLogin from "@/utils/handleLogin";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
    const [emptyInput, setEmptyInput] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const {
        username,
        setUsername,
        password,
        setPassword,
        isLoggedIn,
        setIsLoggedIn,
    } = useAuth();

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (username == "" || password == "") {
                console.log("Falta llenar campos");
                setEmptyInput(true);
            } else {
                const user = await HandleLogin(username, password);
                if (user.status == 200) {
                    setErrorLogin(false);
                    setIsLoggedIn(true);
                    localStorage.setItem("usuario", JSON.stringify(user.user));
                    router.push("/cargar-imagenes");
                } else {
                    setErrorLogin(true);
                    setIsLoggedIn(false);
                }
                setEmptyInput(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="bg-gray-100 p-12 rounded flex flex-col">
            <h1 className="mb-4 text-4xl font-semibold self-center">
                Reciclar
            </h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col w-72 gap-4"
            >
                <div className="flex flex-col">
                    <label htmlFor="name">Usuario</label>
                    <input
                        type="text"
                        name="name"
                        className="h-8"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        value={username}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="h-8"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-400 text-white h-12 text-lg"
                >
                    Ingesar
                </button>
                {emptyInput && (
                    <ErrorMessage message="*Completar los datos vacios" />
                )}
                {errorLogin && (
                    <ErrorMessage message="*Usuario o contraseña incorrectos" />
                )}
            </form>
        </section>
    );
};

export default Login;
