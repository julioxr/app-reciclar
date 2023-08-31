import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import HandleLogin from "@/utils/handleLogin";

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
                const statusLogin = await HandleLogin(username, password);
                if (statusLogin.status == 200) {
                    setErrorLogin(false);
                    setIsLoggedIn(true);
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
                    <p className="text-red-500 text-sm">
                        *Completar los datos vacios
                    </p>
                )}
                {errorLogin && (
                    <p className="text-red-500 text-sm">
                        *Usuario o contraseña incorrectos
                    </p>
                )}
            </form>
        </section>
    );
};

export default Login;
