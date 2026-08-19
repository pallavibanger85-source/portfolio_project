// components/Footer.jsx
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiCode,
    FiHeart,
    FiMapPin,
    FiGlobe,
    FiArrowUp,
    FiPhone,
    FiUser
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
    const { theme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`transition-colors duration-300 ${
            theme === 'dark' 
                ? 'bg-black text-gray-300' 
                : 'bg-white text-gray-600'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <FiCode className={`w-6 h-6 ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`} />
                            <span className={`text-lg font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>
                                Pallavi<span className={
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }>Banger</span>
                            </span>
                        </div>
                        <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                            Cyber Security & MERN Stack Developer
                        </p>
                        {/* Contact Info */}
                        <div className="mt-3 space-y-1.5">
                            <p className={`text-xs flex items-center gap-2 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                <FiUser className="w-3.5 h-3.5" />
                                Pallavi Banger
                            </p>
                            <p className={`text-xs flex items-center gap-2 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                <FiMail className="w-3.5 h-3.5" />
                                pallavibanger85@gmail.com
                            </p>
                            <p className={`text-xs flex items-center gap-2 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                <FiPhone className="w-3.5 h-3.5" />
                                +91 85710 74054
                            </p>
                            <p className={`text-xs flex items-center gap-2 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                <FiMapPin className="w-3.5 h-3.5" />
                                Kaithal, Haryana, India - 136027
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={`font-semibold mb-3 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                            Quick Links
                        </h3>
                        <ul className="space-y-1.5">
                            {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className={`text-sm transition-colors ${
                                            theme === 'dark' 
                                                ? 'text-gray-400 hover:text-white' 
                                                : 'text-gray-500 hover:text-black'
                                        }`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className={`font-semibold mb-3 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                            Services
                        </h3>
                        <ul className="space-y-1.5">
                            {[
                                'Web Development',
                                'Cyber Security',
                                'MERN Stack',
                                'Prompt Engineering'
                            ].map((item) => (
                                <li key={item}>
                                    <span className={`text-sm ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className={`font-semibold mb-3 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                            Connect
                        </h3>
                        <div className="flex gap-3 mb-4">
                            <a
                                href="https://github.com/pallavibanger85-source"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 rounded-lg transition-colors ${
                                    theme === 'dark'
                                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                                        : 'bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200'
                                }`}
                            >
                                <FiGithub className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pallavi-banger/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 rounded-lg transition-colors ${
                                    theme === 'dark'
                                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                                        : 'bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200'
                                }`}
                            >
                                <FiLinkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="mailto:pallavibanger85@gmail.com"
                                className={`p-2 rounded-lg transition-colors ${
                                    theme === 'dark'
                                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                                        : 'bg-gray-100 text-gray-500 hover:text-black hover:bg-gray-200'
                                }`}
                            >
                                <FiMail className="w-4 h-4" />
                            </a>
                        </div>
                        {/* Location */}
                        <div className={`text-xs ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                            <p>Available for freelance work</p>
                            <p className="mt-1">📍 Kaithal, Haryana</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={`border-t ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                            © {currentYear} <span className={
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }>Pallavi Banger</span>. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className={`text-sm flex items-center gap-1 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                Made with <FiHeart className="w-3.5 h-3.5 text-red-500" />
                            </span>
                            <button
                                onClick={scrollToTop}
                                className={`p-1.5 rounded-lg transition-colors ${
                                    theme === 'dark'
                                        ? 'bg-white text-black hover:bg-gray-200'
                                        : 'bg-black text-white hover:bg-gray-800'
                                }`}
                            >
                                <FiArrowUp className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}