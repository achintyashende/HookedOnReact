import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import TechStackCarousel from './components/TechStackCarousel';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceCard from './components/ExperienceCard';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// project images
import kursefy from '../src/assets/kursefy.png';
import greenToken from '../src/assets/greenToken.png';
import realtimeWhiteboard from '../src/assets/realtimeWhiteboard.png';

const Portfolio = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Data
    const skills = [
        "C++", "HTML", "CSS", "JavaScript", "React", "Node.js",
        "Express.js", "MongoDB", "SQL", "Tailwind CSS",
        "Bootstrap", "Git", "Data Structures", "Algorithms", "Problem-Solving"
    ];

    const projects = [
        {
            title: "Kursefy - Online Learning Platform",
            description: "A responsive online learning platform with features like course enrolment, video playback, and progress tracking. Built with React.js and Tailwind CSS, with a secure backend using Node.js and MongoDB.",
            tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Cloudinary"],
            link: "github.com/achintyashende/kursefy",
            image: kursefy
        },
        {
            title: "Real-Time Whiteboard Sharing Application",
            description: "A real-time collaborative whiteboard application using WebSockets for seamless synchronization. Features an intuitive user interface built with React.js focusing on scalability and responsiveness.",
            tags: ["React.js", "WebSockets", "Node.js", "Bootstrap CSS"],
            link: "realtime-whiteboard-sharing-forntend.onrender.com",
            image: realtimeWhiteboard
        },
        {
            title: "Green Tokens",
            description: "A decentralized blockchain-based application ensuring secure, transparent, and tamper-proof transactions. Implements smart contracts for automation and efficiency in data integrity and trustless interactions.",
            tags: ["React.js", "Solidity", "Node.js", "Tailwind CSS", "Bitfinity"],
            link: "github.com/achintyashende/Energy-Trading-Blockchain",
            image: greenToken
        }
    ];

    const experience = [
        {
            role: "Full-Stack Development Intern",
            company: "ZasmLabs",
            period: "Dec 2024 - Present",
            description: "Developing full-stack applications using React and MERN stack."
        }
    ];

    const certifications = [
        "React Basics (Meta, Coursera, 2024)",
        "Introduction to Front-End Development (Meta, Coursera, 2024)",
        "Learn C++ Programming-Beginner to Advance (Udemy, 2023)",
        "Version Control (Meta, Coursera, 2024)"
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-200 text-gray-900'}`}>
            {/* header section  */}
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            {/* Hero section */}
            <Hero isVisible={isVisible} isDarkMode={isDarkMode} />

            {/* Tech Stack */}
            <section className={`py-12 px-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-slate-300 text-gray-900'}`}>
                <div className="max-w-full mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
                        Tech Stack
                    </h2>
                    <TechStackCarousel />
                </div>
            </section>

            <SkillsSection skills={skills} isDarkMode={isDarkMode} />
            
            {/* <ProjectsSection projects={projects} isDarkMode={isDarkMode} /> */}

            <ProjectsSection projects={projects} isDarkMode={isDarkMode} />

            <section className={`py-12 px-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-slate-300 text-gray-900'}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
                        Experience
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        {experience.map((exp) => (
                            <ExperienceCard
                                key={exp.role}
                                experience={exp}
                                isDarkMode={isDarkMode}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
                        Certifications
                    </h2>
                    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert) => (
                            <div
                                key={cert}
                                className={`p-4 rounded-lg transform hover:scale-105 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                                    }`}
                            >
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </div>
    );
};

export default Portfolio;