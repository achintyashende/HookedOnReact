import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects, isDarkMode }) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} isDarkMode={isDarkMode} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;