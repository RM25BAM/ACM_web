import React from "react"
import { navItems } from "./mapItems"
import Logo from "../assets/acm_logo.svg";
const navbar: React.FC = () => {
    return (
        <header className="bg-white shadow-2xl h-16">
            <div className="flex items-center justify-center h-full px-4">
                <img className="h-16" src={Logo} alt="logo" />
                <nav className="hidden md:flex gap-x-10 flex-1 justify-center">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => item.navigate}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none text-md font-semibold font-Ubuntu"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className="border-2 flex-end hidden md:flex">
                    <button
                        onClick={() => '#join'}
                        className="text-gray-700 hover:text-blue-600 focus:outline-none text-md font-semibold font-Ubuntu"
                    >
                        Join Us
                    </button>
                </div>
            </div>
        </header>

    )
}

export default navbar