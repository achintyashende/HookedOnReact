import React from 'react';
import { Download, Moon, Sun } from 'lucide-react';

const Header = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <header className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-10">
            <nav className="max-w-full mx-auto px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold hover:text-blue-700 transition-colors duration-300">
                    Achintya Shende
                </h1>
                <div className="flex items-center gap-4">
                    <a
                        href="https://drive.google.com/file/d/1iuNRl1xIM6Xu94kWRF1QvZk0aOpB03-0/view?usp=drive_link"
                        target='_blank'
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                    >
                        <Download size={16} />
                        Resume
                    </a>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-grey-500 transition-colors duration-300"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;