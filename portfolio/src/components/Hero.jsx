import React from 'react';
import { Github, Linkedin, Mail, TreeDeciduous, Link } from 'lucide-react';
import myProfile from '../assets/SqProfilePhoto.jpg';

const Hero = ({ isVisible, isDarkMode}) => {
    return (
        <section className="pt-24 pb-12 px-4">
            <div className={`max-w-7xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="flex flex-col items-center text-center">
                    
                    <div className="w-36 h-36 rounded-full border bg-gradient-to-r from-blue-500 to-purple-500 mb-6 hover:scale-110 transition-transform duration-300">
                        <img src={myProfile} alt="Profile" className="w-32 h-32 rounded-full m-2 " />
                    </div>
                    
                    <h1 className="text-4xl font-bold mb-4 hover:text-blue-700 transition-colors duration-300">
                        Achintya Shende
                    </h1>
                    <h2 className={` text-2xl mb-6 text-blue-500 ${isDarkMode ? 'text-sky-400' : 'text-sky-600'}`}>
                        Full Stack Developer
                    </h2>
                    <p className="max-w-2xl text-lg mb-8">
                        Analytical and driven software developer with hands-on experience in full-stack development.
                        Proficient in C++, React, and problem-solving, I aim to leverage my technical expertise,
                        innovative mindset, and quick learning ability to contribute to impactful, data-driven projects
                        and sustainable solutions.
                    </p>
                    {/* Links */}
                    <div className="flex gap-6">
                        <a
                            href="https://github.com/achintyashende"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-125 transition-transform duration-300"
                        >
                            <Github className="w-6 h-6 hover:text-sky-900 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://linkedin.com/in/achintyashende"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-125 transition-transform duration-300"
                        >
                            <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors duration-300" />
                        </a>
                        <a
                            href="mailto:achintyashende@gmail.com"
                            className="transform hover:scale-125 transition-transform duration-300"
                        >
                            <Mail className="w-6 h-6 hover:text-red-500 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://linktr.ee/achintyashende"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-125 transition-transform duration-300"
                        >
                            <Link className="w-6 h-6 hover:text-green-500 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
