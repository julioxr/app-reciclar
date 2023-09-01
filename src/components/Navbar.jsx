import { useRouter } from "next/navigation";

const Navbar = ({ username }) => {
    const router = useRouter();
    const handleLogOut = () => {
        localStorage.clear();
        router.push("/");
    };
    return (
        <nav className="bg-gray-800 h-12 flex justify-end items-center gap-8 text-white px-8">
            <div className="flex justify-between w-full px-8">
                <h1>RECICLAR</h1>
                <h3>Usuario: {username}</h3>
            </div>
            <button
                onClick={handleLogOut}
                className="w-auto px-6 bg-gray-200 text-black"
            >
                Salir
            </button>
        </nav>
    );
};

export default Navbar;
