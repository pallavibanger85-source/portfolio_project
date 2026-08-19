// components/Hero.jsx - Updated with black/white/grey theme
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiShield,
    FiCode,
    FiCpu,
    FiArrowRight,
    FiChevronDown,
    FiLock,
    FiGlobe
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';
import profile from "../assets/profile.jpg";

export default function Hero() {
    const { theme } = useContext(ThemeContext);

    const skills = [
        { icon: FiShield, label: 'Cyber Security', color: 'text-black dark:text-white' },
        { icon: FiCode, label: 'MERN Stack', color: 'text-black dark:text-white' },
        { icon: FiCpu, label: 'Prompt Engineering', color: 'text-black dark:text-white' },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-sm font-medium"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
                            </span>
                            Available for Work
                        </motion.div>

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
                                Hi, I'm{' '}
                                <span className="text-gray-600 dark:text-gray-400">
                                    Pallavi Banger
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-3">
                                Cyber Security & MERN Stack Developer
                            </p>
                            <p className="text-gray-500 dark:text-gray-500 mt-1">
                                Specializing in Secure Web Development & AI Integration
                            </p>
                        </motion.div>

                        {/* Skills Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-3"
                        >
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
                                >
                                    <skill.icon className={`w-4 h-4 ${skill.color}`} />
                                    <span className="text-sm font-medium text-black dark:text-white">
                                        {skill.label}
                                    </span>
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-6 pt-2"
                        >

                            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
                                </span>
                                Open to opportunities
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                            className="relative max-w-sm w-full"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-gray-300/20 dark:bg-gray-700/20 rounded-full blur-2xl"></div>

                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-black shadow-2xl bg-gray-200 dark:bg-gray-800 aspect-square">
                                <img
                                    src={profile}
                                    alt="Pallavi Banger"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}