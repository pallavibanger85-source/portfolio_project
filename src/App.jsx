// App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skill from './components/Skill';
import Projects from './components/Project';
import Experence from './components/Experence';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
                <Navbar />
                <Hero />
                <Skill />
                <Projects />
                <Experence />
                <Contact />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;