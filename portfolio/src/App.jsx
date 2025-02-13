import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Download } from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "C++", "JavaScript", "React", "Node.js",
    "Express.js", "MongoDB", "SQL", "Tailwind CSS",
    "Bootstrap", "Git", "Data Structures", "Algorithms"
  ];

  const projects = [
    {
      title: "Kursefy - Online Learning Platform",
      description: "A responsive online learning platform with features like course enrolment, video playback, and progress tracking. Built with React.js and Tailwind CSS, with a secure backend using Node.js and MongoDB.",
      tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "Cloudinary"],
      link: "github.com/achintyashende/kursefy"
    },
    {
      title: "Real-Time Whiteboard Sharing Application",
      description: "A real-time collaborative whiteboard application using WebSockets for seamless synchronization. Features an intuitive user interface built with React.js focusing on scalability and responsiveness.",
      tags: ["React.js", "WebSockets", "Node.js", "Bootstrap CSS"],
      link: "realtime-whiteboard-sharing-forntend.onrender.com"
    }
  ];

  const experience = [
    {
      role: "Full-Stack Development Intern",
      company: "ZasmLabs",
      period: "Dec 2024 - Present",
      description: "Developing full-stack applications using React and MERN stack. Working with MongoDB, SQL, and cloud technologies."
    }
  ];

  const certifications = [
    "React Basics (Meta, Coursera, 2024)",
    "Introduction to Front-End Development (Meta, Coursera, 2024)",
    "Learn C++ Programming-Beginner to Advance (Udemy, 2023)",
    "Version Control (Meta, Coursera, 2024)"
  ];

  const TechStackCarousel = () => {
    const techStack = [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "Express", color: "bg-gray-600" },
      { name: "JavaScript", color: "bg-yellow-400" },
      { name: "C++", color: "bg-blue-600" },
      { name: "Git", color: "bg-orange-500" },
      { name: "Tailwind", color: "bg-teal-500" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
      }, 2000);

      return () => clearInterval(interval);
    }, []);

    const visibleTech = [];
    for (let i = 0; i < 6; i++) {
      const index = (currentIndex + i) % techStack.length;
      visibleTech.push(techStack[index]);
    }

    return (
      <div className="flex justify-center items-center gap-8 py-8 overflow-hidden">
        {visibleTech.map((tech, index) => (
          <div
            key={tech.name + index}
            className="transform transition-all duration-500 hover:scale-110"
          >
            <div className={`w-16 h-16 rounded-lg ${tech.color} flex items-center justify-center mb-2`}>
              <span className="text-white font-bold">{tech.name.charAt(0)}</span>
            </div>
            <p className="text-center text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <header className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold hover:text-blue-500 transition-colors duration-300">
            Achintya Shende
          </h1>
          <div className="flex items-center gap-4">
            <a
              href="/Achintya_Shende.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              <Download size={16} />
              Resume
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-6 hover:scale-110 transition-transform duration-300"></div>
            <h1 className="text-4xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300">
              Achintya Shende
            </h1>
            <h2 className="text-2xl mb-6 text-blue-500">Full Stack Developer</h2>
            <p className="max-w-2xl text-lg mb-8">
              Analytical and driven software developer with hands-on experience in full-stack development.
              Proficient in C++, React, and problem-solving, I aim to leverage my technical expertise,
              innovative mindset, and quick learning ability to contribute to impactful, data-driven projects
              and sustainable solutions.
            </p>
            <div className="flex gap-6">
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
              <a
                href="mailto:achintyashende@gmail.com"
                className="transform hover:scale-125 transition-transform duration-300"
              >
                <Mail className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
            Tech Stack
          </h2>
          <TechStackCarousel />
        </div>
      </section>


      {/* Skills Section */}
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

      {/* Projects Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
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
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp) => (
              <div
                key={exp.role}
                className={`p-6 rounded-lg mb-4 transform hover:scale-105 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
              >
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <h4 className="text-lg text-blue-500">{exp.company}</h4>
                <p className="text-sm mb-2">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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

      {/* Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center hover:text-blue-500 transition-colors duration-300">
            Get in Touch
          </h2>
          <div className={`max-w-xl mx-auto p-8 rounded-lg transform hover:scale-105 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
            <div className="text-center space-y-4">
              <p className="text-lg">Feel free to reach out to me at:</p>
              <p className="text-blue-500">achintyashende@gmail.com</p>
              <p>Phone: +91-7350045035</p>
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

      {/* Footer */}
      <footer className={`py-6 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <p>&copy; 2025 Achintya Shende. All rights reserved.</p>
      </footer>
      
    </div>
  );
};

export default Portfolio;