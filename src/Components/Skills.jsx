import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaHtml5, FaCss3, FaPython, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMaterialdesign, SiJetpackcompose, SiPostgresql } from "react-icons/si";
import Project from "./Project";
const skills = [
  { name: "React", level: "Intermediate", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Spring Boot", level: "Intermediate", icon: <SiSpringboot className="text-green-500 text-4xl" /> },
  { name: "Java", level: "Intermediate", icon: <FaJava className="text-orange-600 text-4xl" /> },
  { name: "HTML", level: "Intermediate", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", level: "Intermediate", icon: <FaCss3 className="text-blue-600 text-4xl" /> },
  { name: "Python", level: "Basic", icon: <FaPython className="text-blue-400 text-4xl" /> },
  { name: "Tailwind CSS", level: "Basic", icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
  { name: "Material UI", level: "Basic", icon: <SiMaterialdesign className="text-blue-400 text-4xl" /> },
  { name: "Jetpack Compose", level: "Basic", icon: <SiJetpackcompose className="text-purple-500 text-4xl" /> },
  { name: "PostgreSQL", level: "Basic", icon: <SiPostgresql className="text-blue-600 text-4xl" /> },
];

export default function Skills() {
  return (
    <>
    <section id="skills"className="bg-gray-100 text-gray-900 py-12 min-h-screen flex flex-col items-center">
      <motion.h2 
        className="text-4xl font-bold text-center mb-8 underline decoration-4 decoration-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-10/12"
        initial={{ opacity: 0,y:-20 }}
        animate={{ opacity: 1,y:0 }}
        transition={{ duration: 1.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="border-2 border-blue-500 bg-white rounded-lg p-6 shadow-md text-center cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center">{skill.icon}</div>
            <h3 className="text-xl font-semibold mt-3">{skill.name}</h3>
            <p className="text-sm text-gray-600">{skill.level}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Project />
    </>
  );
}
