// components/Skill.jsx - Updated with black/white/grey theme
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import {
    FiShield,
    FiCode,
    FiCpu,
    FiTrendingUp,
    FiAward,
    FiBriefcase,
    FiGlobe
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Skill() {
    const { theme } = useContext(ThemeContext);

    const skillCategories = [
        {
            title: 'Cyber Security',
            icon: FiShield,
            color: 'text-black dark:text-white',
            bgColor: 'bg-gray-100 dark:bg-gray-800',
            skills: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Security Auditing']
        },
        {
            title: 'MERN Stack',
            icon: FiCode,
            color: 'text-black dark:text-white',
            bgColor: 'bg-gray-100 dark:bg-gray-800',
            skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
        },
        {
            title: 'Prompt Engineering',
            icon: FiCpu,
            color: 'text-black dark:text-white',
            bgColor: 'bg-gray-100 dark:bg-gray-800',
            skills: ['AI Prompt Design', 'Optimization', 'Integration', 'Fine-tuning']
        }
    ];

    const technologies = [
        { name: 'JavaScript', icon: '🟡' },
        { name: 'React', icon: '⚛️' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Git', icon: '📝' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                        My <span className="text-gray-600 dark:text-gray-400">Skills</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                        Expertise in Cyber Security, MERN Stack Development, and Prompt Engineering
                    </p>
                    <div className="w-20 h-1 bg-black dark:bg-white mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Main Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className={`${category.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-300`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <category.icon className={`w-8 h-8 ${category.color}`} />
                                <h3 className="text-xl font-bold text-black dark:text-white">
                                    {category.title}
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Technologies Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                    <h3 className="text-xl font-bold text-black dark:text-white text-center mb-6">
                        Technologies I Work With
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-600 justify-center"
                            >
                                <span className="text-xl">{tech.icon}</span>
                                <span className="font-medium text-black dark:text-white text-sm">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats/Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                >
                    {[
                        { icon: FiAward, label: 'Certifications', value: '5+' },
                        { icon: FiBriefcase, label: 'Projects', value: '10+' },
                        { icon: FiTrendingUp, label: 'Experience', value: '3+ Years' },
                        { icon: FiGlobe, label: 'Remote Work', value: 'Available' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
                        >
                            <stat.icon className="w-6 h-6 text-black dark:text-white mx-auto mb-2" />
                            <div className="text-xl font-bold text-black dark:text-white">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}