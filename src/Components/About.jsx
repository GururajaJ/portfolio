import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/hero.png";
import Skills from "./Skills";
import profile from "../assets/profile.jpg"
export default function About() {
    const sslcRef = useRef(null);
    const hscRef = useRef(null);
    const cgpRef = useRef(null);
    const [sslcProgress, setSslcProgress] = useState(0);
    const [hscProgress, setHscProgress] = useState(0);
    const [cgpProgress, setCgpProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === sslcRef.current) setSslcProgress(78.5);
                        if (entry.target === hscRef.current) setHscProgress(82.3);
                        if (entry.target === cgpRef.current) setCgpProgress(8.3);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sslcRef.current) observer.observe(sslcRef.current);
        if (hscRef.current) observer.observe(hscRef.current);
        if (cgpRef.current) observer.observe(cgpRef.current);

        return () => {
            if (sslcRef.current) observer.unobserve(sslcRef.current);
            if (hscRef.current) observer.unobserve(hscRef.current);
            if (cgpRef.current) observer.unobserve(cgpRef.current);
        };
    }, []);

    return (
        <>
        <section id="about" className="container flex justify-center items-center min-h-screen py-12">
            <div className="flex flex-col md:flex-row w-3/4 gap-10 md:gap-16 items-center">
                <div className="flex-1 flex justify-center">
                <img 
                    src={profile} 
                      alt="About me" 
                 className="h-[400px] w-[400px] object-cover rounded-full animate-bounce-updown"
                  />


                </div>
                <div className="flex-1 text-center md:text-left flex flex-col">
                    <h2 className="text-4xl font-bold text-gray-800 text underline decoration-4 decoration-blue-500">About Me</h2>
                    <p className="text-1xl text-gray-800 mt-4">
                       Hello I am <span className="text-3xl text-gray-900 font-bold ">Gururaja J</span>, I am currently pursuing a Bachelor of Engineering 
                        in Computer Science and Engineering (CSE) at Karpagam College of Engineering.
                         I am passionate about software development. Additionally, I am skilled in web development with technologies such as React.js, HTML, CSS, Tailwind CSS, and Material-UI to craft responsive and visually appealing user interfaces.
                    </p>
                    <div className="mt-6">
                        <span className="text-2xl text-gray-900 font-semibold ">What I Achieved</span>
                        <div className="mt-4">
                            <p className="font-medium text-lg">SSLC - AKT Academy Matric High School</p>
                            <div className="w-full bg-gray-300 rounded-full h-5 mt-1 overflow-hidden">
                                <div
                                    ref={sslcRef}
                                    className="bg-blue-600 h-5 text-white text-sm flex items-center justify-center rounded-full transition-all duration-[2000ms] ease-in-out"
                                    style={{ width: `${sslcProgress}%` }}
                                >
                                    {sslcProgress}%
                                </div>
                            </div>
                        </div>

                        {/* HSC Progress */}
                        <div className="mt-4">
                            <p className="font-medium text-lg">HSC - AKT Academy Matric Higher Secondary School</p>
                            <div className="w-full bg-gray-300 rounded-full h-5 mt-1 overflow-hidden">
                                <div
                                    ref={hscRef}
                                    className="bg-blue-600 h-5 text-white text-sm flex items-center justify-center rounded-full transition-all duration-[2000ms] ease-in-out"
                                    style={{ width: `${hscProgress}%` }}
                                >
                                    {hscProgress}%
                                </div>
                            </div>
                        </div>

                        {/* CGPA Progress */}
                        <div className="mt-4">
                            <p className="font-medium text-lg">CGPA - Karpagam College Of Engineering</p>
                            <div className="w-full bg-gray-300 rounded-full h-5 mt-1 overflow-hidden">
                                <div
                                    ref={cgpRef}
                                    className="bg-blue-600 h-5 text-white text-sm flex items-center justify-center rounded-full transition-all duration-[2000ms] ease-in-out"
                                    style={{ width: `${cgpProgress * 10}%` }} // Convert CGPA to percentage
                                >
                                    {cgpProgress} CGPA
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <Skills />
        </>
    );
}
