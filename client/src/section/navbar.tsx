import React from "react";
import { navItems } from "./mapItems";
import Logo from "../assets/acm_logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav className="sticky bg-white shadow-2xl h-18">
            <div className="flex items-center h-full px-4 w-full justify-between md:justify-center">

                {/* Logo and Chapter */}
                <div className="flex items-center gap-2">
                    <img className="h-16" src={Logo} alt="logo" />
                    <button
                        className="text-black hover:text-gray-700 focus:outline-none text-md font-bold"
                        onClick={() => navigate("/")}
                    >
                        chapter at MU
                    </button>
                </div>

                {/*  (Visible on md and larger) */}
                <div className="hidden md:flex gap-x-10 flex-1 justify-center">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.navigate)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none text-md font-semibold font-Ubuntu"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

               
                <div className="hidden md:flex border-2">
                    {/* You can add elements here if necessary */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
