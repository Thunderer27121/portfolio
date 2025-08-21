import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 px-6 mt-10 py-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-white mb-2">Inderjeet Singh</h2>
          <p className="text-sm text-gray-400">
            A passionate fullstack developer skilled in React, Tailwind, PHP, WordPress, and currently learning backend and AI technologies. I love building clean, responsive, and functional web experiences.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">📬 Contact Me</h3>
          <p className="text-sm">Email: <a href="mailto:anujsingh27121@gmail.com" className="text-cyan-400 hover:underline">anujsingh27121@gmail.com</a></p>
          <p className="text-sm">Phone : 8130967975</p>
          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            <a href="https://github.com/Thunderer27121" target="_blank" rel="noreferrer" className="hover:text-white text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/inderjeet-singh-34263b336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer" className="hover:text-white text-xl">
              <FaLinkedin />
            </a>
            <a href="mailto:anujsingh27121@gmail.com" className="hover:text-white text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Inderjeet Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
