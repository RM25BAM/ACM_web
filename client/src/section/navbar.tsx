import { useEffect, useState } from "react";
import { navItems } from "./mapItems";
import Logo from "../assets/acm_logo.svg";
import { useNavigate } from "react-router-dom";
import Portal from "../assets/portal_doom.gif"

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        /* border-b-stone-300 */
        <nav className={`sticky z-50 top-0 h-18 bg-transparent ${isScrolled}`}>
            <div className="flex items-center h-full px-4 w-full justify-between md:justify-center">
                <div className="flex items-center gap-2">
                    <img className="h-12 w-12" src={Logo} alt="logo" />
                    <button
                        className="text-darkG hover:text-gray-700 focus:outline-none text-md font-bold"
                        onClick={() => navigate("/")}
                    >
                    </button>
                </div>

                {/*  (Visible on md and larger) */}
                <div className="hidden md:flex gap-x-10 flex-1 justify-center">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.navigate)}
                            className="text-darkG hover:text-blue-600 focus:outline-none text-md font-semibold font-Ubuntu"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>


                <div className="hidden md:flex">
                    <img src={Portal} className="h-18 " />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
