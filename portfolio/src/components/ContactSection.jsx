import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const ContactSection = ({ isDarkMode }) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
                    Get in Touch
                </h2>
                <div
                    className={`max-w-xl mx-auto p-8 rounded-lg transform hover:scale-105 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                        }`}
                >
                    <div className="text-center space-y-4">
                        <p className="text-lg">Feel free to reach out to me at:</p>
                        <p className="text-blue-500">achintyashende@gmail.com</p>
                        {/* <p>Phone: +91-7350045035</p> */}
                        <div className="flex justify-center gap-6 mt-4">
                            <a
                                href="https://github.com/achintyashende"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform hover:scale-125 transition-transform duration-300"
                            >
                                <Github className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
                            </a>
                            <a
                                href="https://linkedin.com/in/achintyashende"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform hover:scale-125 transition-transform duration-300"
                            >
                                <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;