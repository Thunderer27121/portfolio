import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
  ];

  return (
    <motion.nav 
    initial={{y:-20, opacity:0}}
    whileInView={{y:0 , opacity : 1}}
    transition={{duration: 0.5, ease:"easeInOut"}}
    style={{fontFamily:"arvo"}}
    className="fixed top-0 left-0 w-full text-white z-50 bg-gradient-to-br from-gray-900 to-slate-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl md:text-2xl font-bold tracking-tighter uppercase">
          <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3 cursor-pointer"
    >
      {/* Gradient circle with </> inside */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg">
        <span className="text-white font-bold text-lg">{`</>`}</span>
      </div>

      {/* Gradient developer name */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Inderjeet.dev
      </h1>
    </motion.div>
        </h1>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-8 text-white font-medium text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline underline-offset-4"
                    : "hover:text-blue-500 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/80 backdrop-blur-md text-white text-lg font-medium shadow-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline underline-offset-4"
                    : "hover:text-blue-500 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
