import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 -mt-2">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <p className="text-lg">
          Made with <span className="text-red-500">❤️</span> by Usama Javed
        </p>
        <a
          href="https://www.linkedin.com/in/usama-javed-37b5aa211"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 no-underline"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/UsamaJaved35" // Update with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 no-underline"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
