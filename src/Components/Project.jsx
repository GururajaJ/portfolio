import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaChevronDown ,FaChevronRight} from "react-icons/fa"; // Import icons
import Footer from "./Footer";
// Correctly resolve images for Vite
const project1 = new URL("../assets/expense-tracker-app.png", import.meta.url).href;
const project2 = new URL("../assets/project2.png", import.meta.url).href;
const project3 = new URL("../assets/image.png", import.meta.url).href;
const project4 = new URL("../assets/project1.png", import.meta.url).href;
const project5 = new URL("../assets/project5.png", import.meta.url).href;
const project6 = new URL("../assets/project6.png", import.meta.url).href;

export default function Project() {
    const [expandedId, setExpandedId] = useState(null); // Track which card is expanded

    const projects = [
        { 
            id: 1,
            name: "Expense Tracker App", 
            about: "Track your daily expenses efficiently.",
            extraContent: "This app lets users set budgets, track expenses, and analyze spending trends with graphs.",
            image: project1,
            repo: "https://github.com/GururajaJ/Expense-Tracker-App"
        },
        { 
            id: 2,
            name: "Employee Status", 
            about: "Monitor employee availability in real time.",
            extraContent: "Includes real-time tracking, attendance reports, and role-based access control.",
            image: project2,
            repo: "https://github.com/GururajaJ/EmployeeStatus"
        },
        { 
            id: 3,
            name: "Food Delivery Website", 
            about: "Order food online seamlessly.",
            extraContent: "Customers can browse menus, customize orders, make payments, and track deliveries in real time.",
            image: project3,
            repo: "https://github.com/yourusername/food-restaurant"
        },
        {
            id: 4,
            name: "Personal Portfolio Website", 
            about: "Showcase your projects, skills, and experience.",
            extraContent: "A fully responsive portfolio website built with React and Tailwind CSS. Includes sections for About Me, Projects, Skills, and Contact. Optimized for fast loading and SEO.",
            image: project4, 
            repo: "https://github.com/yourusername/portfolio-website"  
        }
        
       
    ];

    return (
         <>
         <p className=" flex justify-center font-bold text-4xl mt-4 underline decoration-4 decoration-blue-500" >Projects</p>
        <section id="projects"className="text-gray-400 py-12 flex justify-center">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        expandedId={expandedId}
                        setExpandedId={setExpandedId}
                    />
                ))}
            </div>
        </section>
        <Footer/>
        </>
    );
}

// 🛠️ Each card checks `expandedId` instead of using its own state
function ProjectCard({ project, expandedId, setExpandedId }) {
    const isExpanded = expandedId === project.id; // Only this card expands when clicked

    const handleToggle = () => {
        setExpandedId(isExpanded ? null : project.id); // Collapse if already expanded, else expand
    };

    return (
        <motion.div 
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-black dark:border-gray-700 p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }} // Smooth hover effect
        >
            <img src={project.image} alt={project.name} className="w-full rounded-lg shadow-md"/>
            <h2 className="text-2xl text-white font-bold mt-4 underline decoration-4 decoration-blue-500">
                {project.name}
            </h2>
            <p className="text-gray-200 dark:text-gray-300 mt-2">{project.about}</p>

            {/* Read More Toggle */}
            <button 
                onClick={handleToggle}
                className="mt-3 flex items-center text-blue-500 hover:text-blue-600 transition"
            >
                {isExpanded ? "Read Less" : "Read More"}
                <FaChevronDown className={`ml-2 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </button>

            {/* Extra Content (Expands only for clicked card) */}
            <motion.div 
                className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
            >
                <p className="text-gray-300 dark:text-gray-400 mt-3">{project.extraContent}</p>
            </motion.div>

            {/* Repository Button (At Bottom) */}
            <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
            >
                <FaGithub /> Repository<FaChevronRight/>
            </a>
        </motion.div>
    );
}
