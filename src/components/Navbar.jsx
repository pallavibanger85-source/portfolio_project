// components/Navbar.jsx - Updated with smooth scrolling
import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiMenu,
    FiX,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMoon,
    FiSun,
    FiCode,
    FiHome,
    FiUser,
    FiBriefcase,
    FiFileText,
    FiSend
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('home');
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navItems = [
        { id: 'home', label: 'Home', icon: FiHome, section: 'home' },
        { id: 'skills', label: 'Skills', icon: FiUser, section: 'skills' },
        { id: 'projects', label: 'Projects', icon: FiBriefcase, section: 'projects' },
        { id: 'experience', label: 'Experience', icon: FiFileText, section: 'experience' },
        { id: 'contact', label: 'Contact', icon: FiSend, section: 'contact' },
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/pallavibanger85-source', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/pallavi-banger/', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:pallavibanger85@email.com', label: 'Email' },
    ];

    const scrollToSection = (sectionId) => {
        setActive(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 64; // Height of navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => scrollToSection('home')}
                        >
                            <FiCode className="w-8 h-8 text-black dark:text-white" />
                            <span className="text-xl font-bold text-black dark:text-white">
                                Pallavi<span className="text-gray-600 dark:text-gray-400">Banger</span>
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = active === item.id;
                                return (
                                    <motion.button
                                        key={item.id}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection(item.section)}
                                        className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'text-black dark:text-white'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.label}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            {/* Social Links - Desktop */}
                            <div className="hidden md:flex items-center gap-1">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Theme Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <FiSun className="w-5 h-5" />
                                ) : (
                                    <FiMoon className="w-5 h-5" />
                                )}
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
                        >
                            <div className="px-4 py-3 space-y-1">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = active === item.id;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            whileTap={{ scale: 0.97 }}
                                            onClick={() => scrollToSection(item.section)}
                                            className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200 ${
                                                isActive
                                                    ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white'
                                            }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{item.label}</span>
                                        </motion.button>
                                    );
                                })}

                                {/* Mobile Social Links */}
                                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                                    <div className="flex justify-center gap-4">
                                        {socialLinks.map((social) => {
                                            const Icon = social.icon;
                                            return (
                                                <motion.a
                                                    key={social.label}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </motion.a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}