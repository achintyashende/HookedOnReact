import React from 'react';

const SkillsSection = ({ skills, isDarkMode }) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
                    Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={skill}
                            className={`px-4 py-2 rounded-full transform hover:scale-110 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                                }`}
                            style={{
                                transitionDelay: `${index * 50}ms`
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;