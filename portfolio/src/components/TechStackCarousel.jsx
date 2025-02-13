import React, { useState, useEffect } from 'react';
import StackIcon from "tech-stack-icons";


const TechStackCarousel = () => {
    const techStack = [
        { name: "React", icon: "reactjs" },
        { name: "Node.js", icon: "nodejs" },
        { name: "MongoDB", icon: "mongodb" },
        // { name: "Express", icon: "express" },
        { name: "JavaScript", icon: "js" },
        { name: "HTML", icon: "html5" },
        { name: "C++", icon: "c++" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Tailwind", icon: "tailwindcss" },
        { name: "Bootstrap", icon: "bootstrap4" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const visibleTech = [...Array(8).keys()].map(i =>
        techStack[(currentIndex + i) % techStack.length]
    );

    return (
        <div className="flex justify-center items-center gap-14 py-8 overflow-hidden">
            {visibleTech.map((tech, index) => (
                <div
                    key={tech.name + index}
                    className="transform transition-all duration-500 hover:scale-110 flex flex-col items-center"
                >
                    {/* Using StackIcon component without background */}
                    <StackIcon name={tech.icon} className="w-12 h-12 text-gray-800 dark:text-white" />
                    <p className="text-center text-sm mt-2">{tech.name}</p>
                </div>
            ))}
        </div>
    );
};

export default TechStackCarousel;
