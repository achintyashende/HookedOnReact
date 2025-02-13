import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, isDarkMode }) => {
    return (
        <div
            className={`p-6 rounded-lg transform hover:scale-105 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}
        >
            <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                {project.title}
                <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 transition-transform duration-300"
                >
                    <ExternalLink className="w-5 h-5 hover:text-blue-500 transition-colors duration-300" />
                </a>
            </h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-sm px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;