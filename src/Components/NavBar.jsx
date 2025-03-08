import { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import Home from "./Home";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="bg-gray-900 text-white p-2 fixed w-full top-0 z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                
                {/* Logo */}
                <h1 className="text-xl font-bold hover:text-blue-500 p-2">MyPortfolio</h1>
                
                {/* Hamburger Button for Mobile */}
                <button
                    className="md:hidden text-white focus:outline-none mr-3 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}>
                    ☰ {/* Unicode for hamburger icon */}
                </button>

                {/* Navigation Links - Smooth Scroll Enabled */}
                <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:flex gap-9 p-5 md:p-0 md:ml-auto ${isOpen ? "block" : "hidden"}`}>
                    <li>
                        <Link to="home" smooth={true} duration={500} className="block py-2 hover:text-blue-500 cursor-pointer">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} className="block py-2 hover:text-blue-500 cursor-pointer">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} className="block py-2 hover:text-blue-500 cursor-pointer">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="block py-2 hover:text-blue-500 cursor-pointer">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="block py-2 hover:text-blue-500 cursor-pointer">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Home/>
        </>
    );
}
