import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast"; // Notification library

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                "service_mgqma5s",  // ✅ Your EmailJS Service ID
                "template_cgk578a", // ✅ Your EmailJS Template ID
                formData,
                "f43Q-TgrIJDE80aOv" // ✅ Your EmailJS Public Key
            );

            toast.success("Message sent successfully! ✅");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message. ❌");
        }
    };

    return (
        <footer id="contact"className="bg-gray-800 text-white pt-16 pb-10">
            <Toaster position="top-center" reverseOrder={false} /> {/* Toast Notifications */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-4/5 gap-16">
                
                {/* Left Side - Text Content */}
                <div className="flex-1 text-left">
                    <h2 className="text-3xl font-bold">Let's Connect</h2>
                    <p className="text-lg mt-3 text-gray-300">
                        I'm always open to discussing new projects, collaborations, or opportunities.  
                        Feel free to reach out via email or ask any questions!
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-lg">
                        <FaEnvelope className="text-blue-400" />
                        <span className="text-gray-300">jgururaja2004@gmail.com</span>
                    </div>
                    <div className="flex gap-6 mt-6 text-3xl">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-white" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-600" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-700 " />
                        </a>
                    </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-center md:text-left">Any Queries?</h2>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            {/* Name Input */}
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Name"
                            />

                            {/* Email Input */}
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Email"
                            />
                        </div>

                        {/* Message Textarea */}
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full mt-4 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 h-24 resize-none"
                            placeholder="Send a message"
                        ></textarea>

                        {/* Send Button */}
                        <button 
                            type="submit"
                            className="mt-4 w-40 flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
                        >
                            <FaPaperPlane /> Send
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}
