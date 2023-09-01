import React from "react";

const Navbar = ({ username }) => {
    return (
        <nav className="bg-gray-800 h-12 flex justify-end pr-12 items-center gap-8 text-white">
            <h3>Usuario: {username}</h3>
            <button className="w-auto px-6 bg-gray-200 text-black">
                Salir
            </button>
        </nav>
    );
};

export default Navbar;
