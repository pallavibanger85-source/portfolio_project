// components/Contact.jsx
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend,
    FiGithub,
    FiLinkedin,
    FiCheckCircle,
    FiAlertCircle
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Contact() {
    const { theme } = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            setIsError(true);
            setTimeout(() => setIsError(false), 3000);
            return;
        }

        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: FiMail,
            label: 'Email',
            value: 'pallavibanger85@email.com',
            href: 'mailto:pallavibanger85@email.com',
            color: 'hover:text-black dark:hover:text-white'
        },
        {
            icon: FiMapPin,
            label: 'Location',
            value: 'Kaithal, Haryana, India',
            href: null,
            color: 'hover:text-black dark:hover:text-white'
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+91 85710 74054',
            href: 'tel:+918571074054',
            color: 'hover:text-black dark:hover:text-white'
        }
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/pallavibanger85-source', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/pallavi-banger/', label: 'LinkedIn' },
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
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
                        Get In <span className="text-gray-500 dark:text-gray-400">Touch</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                    <div className="w-20 h-1 bg-black dark:bg-white mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                                Let's Connect
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                I'm always interested in hearing about new opportunities,
                                collaborations, or just having a chat about technology.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300"
                                >
                                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                        <info.icon className="w-5 h-5 text-black dark:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target={info.label === 'Email' ? '_blank' : undefined}
                                                rel="noopener noreferrer"
                                                className={`font-medium text-black dark:text-white transition-colors ${info.color}`}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="font-medium text-black dark:text-white">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                                Connect with me
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all duration-200"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                Available for freelance work
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                                Send Me a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200"
                                        required
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                                >
                                    <FiSend className="w-4 h-4" />
                                    Send Message
                                </motion.button>

                                {/* Success/Error Messages */}
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-300"
                                    >
                                        <FiCheckCircle className="w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm">Message sent successfully!</span>
                                    </motion.div>
                                )}

                                {isError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300"
                                    >
                                        <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm">Please fill in all required fields.</span>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}