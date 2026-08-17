// components/Projects.jsx
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import {
    FiGithub,
    FiExternalLink,
    FiFolder,
    FiCode,
    FiShoppingCart,
    FiMessageCircle,
    FiShoppingBag,
    FiLink,
    FiGlobe
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Projects() {
    const { theme } = useContext(ThemeContext);
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'Responsive portfolio website built with React and Tailwind CSS',
            icon: FiGlobe,
            tech: ['HTML', 'CSS', 'Tailwind CSS', 'React'],
            features: ['Responsive UI', 'Components', 'Routing', 'Deployment'],
            github: 'https://github.com/pallavibanger85-source/portifolio',
            live: 'https://your-portfolio-link.vercel.app',
            category: 'web',
            color: 'text-black dark:text-white'
        },
        {
            id: 2,
            title: 'E-Commerce (Basic)',
            description: 'Full-stack e-commerce application with MERN stack',
            icon: FiShoppingCart,
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
            features: ['Authentication', 'CRUD', 'Cart', 'Orders', 'REST API'],
            github: 'https://github.com/pallavibanger85-source/mernstackk',
            live: 'https://your-ecommerce-link.vercel.app',
            category: 'web',
            color: 'text-black dark:text-white'
        },
        {
            id: 3,
            title: 'Real-Time Chat App',
            description: 'Real-time messaging application with Socket.IO integration',
            icon: FiMessageCircle,
            tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
            features: ['Real-time Messaging', 'Online Users', 'Typing Indicator'],
            github: 'https://github.com/pallavibanger85-source/chat-app',
            live: 'https://your-chat-app-link.vercel.app',
            category: 'web',
            color: 'text-black dark:text-white'
        },
        {
            id: 4,
            title: 'Real-Time E-Commerce',
            description: 'Advanced e-commerce with real-time updates and admin dashboard',
            icon: FiShoppingBag,
            tech: ['MERN', 'Redux Toolkit', 'Socket.IO'],
            features: ['Live Product Updates', 'Live Cart', 'Admin Dashboard'],
            github: 'https://github.com/pallavibanger85-source/ecommerce',
            live: 'https://your-ecommerce-live-link.vercel.app',
            category: 'web',
            color: 'text-black dark:text-white'
        },
        {
            id: 5,
            title: 'Blockchain Basics',
            description: 'Introduction to blockchain with Web3 integration',
            icon: FiLink,
            tech: ['Web3', 'Solidity', 'Ethereum'],
            features: ['Wallet Connection', 'Smart Contract Basics', 'DApp Introduction'],
            github: 'https://github.com/pallavibanger85-source/blockchain',
            live: 'https://your-blockchain-link.vercel.app',
            category: 'blockchain',
            color: 'text-black dark:text-white'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'blockchain', label: 'Blockchain' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-black transition-colors duration-300">
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
                        My <span className="text-gray-600 dark:text-gray-400">Projects</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                        A collection of my work including web applications, e-commerce platforms, and blockchain projects
                    </p>
                    <div className="w-20 h-1 bg-black dark:bg-white mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                filter === cat.id
                                    ? 'bg-black dark:bg-white text-white dark:text-black'
                                    : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Header with Icon */}
                            <div className="p-6 pb-0">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <project.icon className={`w-6 h-6 ${project.color}`} />
                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
                                            {project.category === 'blockchain' ? 'Blockchain' : 'Web App'}
                                        </span>
                                    </div>
                                    <div className="flex gap-1">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                                            title="View on GitHub"
                                        >
                                            <FiGithub className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                                            title="View Live Demo"
                                        >
                                            <FiExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                    {project.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="px-6 pb-2">
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="px-6 pb-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-xs rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Footer with Links */}
                            <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex gap-4 text-gray-500 dark:text-gray-400">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            <FiGithub className="w-3.5 h-3.5" />
                                            <span>Source</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            <FiExternalLink className="w-3.5 h-3.5" />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        Project #{project.id}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-black dark:text-white">5</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-black dark:text-white">4</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Web Apps</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-black dark:text-white">1</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Blockchain</div>
                        </div>
                        <div className="text-center">
                            <a
                                href="https://github.com/pallavibanger85-source"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm"
                            >
                                <FiGithub className="w-4 h-4" />
                                View All on GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}