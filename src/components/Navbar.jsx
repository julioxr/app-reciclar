import { useRouter } from "next/navigation";

const Navbar = ({ username }) => {
    const router = useRouter();
    const handleLogOut = () => {
        localStorage.clear();
        router.push("/");
    };
    return (
        <nav className="bg-blue-400 h-12 flex justify-end items-center gap-8 text-white px-8">
            <div className="flex justify-between w-full px-8">
                <h1 className="font-black tracking-[5px]">RECICLAR</h1>
                <h3 className="text-sm">Usuario: {username}</h3>
            </div>
            <button
                onClick={handleLogOut}
                className="bg-blue-200 h-10 px-8 text-lg"
            >
                Salir
            </button>
        </nav>
    );
};

export default Navbar;
