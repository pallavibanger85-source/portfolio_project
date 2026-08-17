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
    FiArrowUp
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
    const { theme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black dark:bg-white text-gray-300 dark:text-gray-600 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <FiCode className="w-6 h-6 text-white dark:text-black" />
                            <span className="text-lg font-bold text-white dark:text-black">
                                Pallavi<span className="text-gray-400 dark:text-gray-600">Banger</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                            Cyber Security & MERN Stack Developer
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white dark:text-black font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-1.5">
                            {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white dark:text-black font-semibold mb-3">Connect</h3>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/pallavibanger85-source"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 dark:bg-gray-100 rounded-lg text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                            >
                                <FiGithub className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pallavi-banger/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-800 dark:bg-gray-100 rounded-lg text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                            >
                                <FiLinkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="mailto:pallavibanger85@email.com"
                                className="p-2 bg-gray-800 dark:bg-gray-100 rounded-lg text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                            >
                                <FiMail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 dark:border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                            © {currentYear} <span className="text-white dark:text-black">Pallavi</span>. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                Made with <FiHeart className="w-3.5 h-3.5 text-red-500" />
                            </span>
                            <button
                                onClick={scrollToTop}
                                className="p-1.5 bg-white dark:bg-black text-black dark:text-white rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
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