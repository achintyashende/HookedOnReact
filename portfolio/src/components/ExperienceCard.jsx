import React from 'react';

const ExperienceCard = ({ experience, isDarkMode }) => {
    return (
        <div
            className={`p-6 rounded-lg mb-4 transform hover:scale-105 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
        >
            <h3 className="text-xl font-bold">{experience.role}</h3>
            <h4 className="text-lg text-blue-500">{experience.company}</h4>
            <p className="text-sm mb-2">{experience.period}</p>
            <p>{experience.description}</p>
        </div>
    );
};

export default ExperienceCard;