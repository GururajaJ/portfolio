import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from "react-icons/fa"; 
import Typed  from "react-typed";  // ✅ Fix: Use named import
import hero from "../assets/hero.png";
import About from "./About";

function Home() {
    // Function to download the resume
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";  
        link.download = "Gururaja_Resume.pdf";  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        <div id="home"className="container flex justify-center items-center min-h-screen bg-gray-200 pt-16">
            <div className="flex flex-col md:flex-row w-3/4 gap-16">  
                
                {/* Text Section */}
                <div className="flex-1 p-4 text-black font-bold mt-7">
                    <p className="text-4xl">Hey there! <span className="text-gray-500 text-4xl"> I'm Gururaja J. 🚀</span></p>

                    {/* Fix: Auto Typing Animation (Now Visible) */}
                    <div className="text-2xl mt-3 text-gray-800 font-bold">
                    <Typed
                   strings={["As a passionate Full Stack and Android Developer, I thrive on creating innovative, high-performance applications that enhance user experiences."]}
                            typeSpeed={50}  
                        showCursor={false}  
/>

                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-6 text-3xl">
                        <a href="https://github.com/GururajaJ" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-gray-800" />
                        </a>
                        <a href="https://www.linkedin.com/in/gururaja-j-2650ba26a/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-600" />
                        </a>
                        <a href="https://www.instagram.com/guruji_23_j/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-700 " />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <button 
                        className="mt-6 px-5 py-3 bg-blue-600 text-white flex items-center gap-3 text-lg rounded-md shadow-lg hover:bg-blue-700"
                        onClick={handleDownload}
                    >
                        <FaFileDownload /> Resume
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex-1 p-4 flex justify-center">
                    <img src={hero} alt="Hero image" className="h-[400px] w-auto object-cover" />
                </div>
            </div>
        </div>
        <About/>
        </>
    );
}

export default Home;
