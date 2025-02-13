import React from 'react';

const Footer = ({ isDarkMode }) => {
    return (
        <footer className={`py-6 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <p>&copy; 2025 Achintya Shende. All rights reserved.</p>
        </footer>
    );
};

export default Footer;