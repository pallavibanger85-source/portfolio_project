// components/Experence.jsx
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiAward,
  FiCode,
  FiServer,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiExternalLink,
  FiBookOpen
} from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function Experence() {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      id: 1,
      title: 'Cyber Security & Web Development Training',
      company: 'Hartron Advanced Skill Centre',
      location: 'Kaithal',
      period: '2024 - 2026',
      duration: '1.5 Years',
      type: 'Training',
      description: [
        'Completed comprehensive training in Cyber Security and Web Development',
        'Hands-on experience with security tools and frameworks',
        'Built real-world projects using MERN stack',
        'Learned network security, cryptography, and ethical hacking'
      ],
      technologies: ['Cyber Security', 'Web Development', 'MERN Stack'],
      icon: FiAward,
      color: 'text-black dark:text-white',
      bgColor: 'bg-gray-50 dark:bg-gray-900'
    },
    {
      id: 2,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: 'March 2026 - Present',
      duration: 'Current',
      type: 'Freelance',
      description: [
        'Working as a freelance MERN Stack developer',
        'Building custom web applications for clients',
        'Developing e-commerce platforms and real-time applications',
        'Providing cyber security consultation services'
      ],
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
      icon: FiCode,
      color: 'text-black dark:text-white',
      bgColor: 'bg-gray-50 dark:bg-gray-900'
    },
    {
      id: 3,
      title: 'MERN Stack Developer - Freelance Project',
      company: 'Hartron India',
      location: 'Remote',
      period: '2026',
      duration: 'Current Project',
      type: 'Project',
      description: [
        'Building a complete MERN stack solution for Hartron India',
        'Developing LMS (Learning Management System) contribution',
        'Working on dashboard and admin panel development',
        'Implementing user management and course tracking features'
      ],
      technologies: ['MERN Stack', 'LMS', 'Dashboard', 'REST API'],
      icon: FiServer,
      color: 'text-black dark:text-white',
      bgColor: 'bg-gray-50 dark:bg-gray-900',
      links: [
        { label: 'Hartron India', url: 'https://hartronindia.com', icon: FiExternalLink },
        { label: 'LMS Dashboard', url: 'https://dashboard.hartronindia.com/import', icon: FiBookOpen }
      ]
    }
  ];

  const certifications = [
    {
      name: 'Cyber Security Fundamentals',
      issuer: 'Hartron Advanced Skill Centre',
      year: '2025'
    },
    {
      name: 'Web Development with MERN Stack',
      issuer: 'Hartron Advanced Skill Centre',
      year: '2025'
    },
    {
      name: 'Prompt Engineering',
      issuer: 'Self-Learning',
      year: '2026'
    }
  ];

  const ongoingCourses = [
    {
      name: 'CYWDA Course',
      platform: 'Hartron India',
      description: 'Advanced Cyber Security and Web Development Course',
      link: 'https://hartronindia.com'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
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
            My <span className="text-gray-500 dark:text-gray-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
            1.5 years of experience in Cyber Security and Web Development
          </p>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`p-6 rounded-2xl ${exp.bgColor} border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md`}>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <exp.icon className={`w-6 h-6 ${exp.color}`} />
                      <div>
                        <h3 className="text-lg font-bold text-black dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Type Badge */}
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white mb-3">
                      {exp.type}
                    </span>

                    {/* Description */}
                    <ul className="space-y-1.5 mb-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <FiCheckCircle className="w-3.5 h-3.5 text-black dark:text-white mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-md bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {exp.links && (
                      <div className="flex flex-wrap gap-3">
                        {exp.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-black dark:text-white hover:underline"
                          >
                            <link.icon className="w-3.5 h-3.5" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Ongoing Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {/* Certifications */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
              <FiAward className="w-5 h-5 text-black dark:text-white" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <div>
                    <p className="font-medium text-black dark:text-white">{cert.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ongoing Courses */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
              <FiBookOpen className="w-5 h-5 text-black dark:text-white" />
              Ongoing Learning
            </h3>
            <div className="space-y-3">
              {ongoingCourses.map((course, index) => (
                <motion.div
                  key={course.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-black dark:text-white">{course.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{course.platform}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{course.description}</p>
                    </div>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-white hover:underline text-sm flex items-center gap-1"
                    >
                      View <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
        >
          <h3 className="text-xl font-bold text-black dark:text-white mb-4 text-center">
            Quick Stats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Experience', value: '1.5+ Years', icon: FiBriefcase },
              { label: 'Projects', value: '5+', icon: FiCode },
              { label: 'Certifications', value: '3', icon: FiAward },
              { label: 'Freelance Clients', value: '2+', icon: FiUsers },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
                <stat.icon className="w-5 h-5 text-black dark:text-white mx-auto mb-1" />
                <div className="text-xl font-bold text-black dark:text-white">{stat.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}