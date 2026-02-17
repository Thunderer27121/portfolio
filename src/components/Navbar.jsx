import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home",     path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About",    path: "/about" },
  { name: "Skills",   path: "/skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Frosted glass bar */}
      <div className="mx-4 mt-4 md:mx-8 rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-md shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl overflow-hidden">
              {/* gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-lime-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-black font-black text-sm tracking-tighter">{`</>`}</span>
            </div>
            <span className="text-base font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-lime-300">
              Inderjeet.dev
            </span>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/6"
                    }`
                  }
                > 
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl bg-white/10 -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-4 h-px bg-white rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-4 h-px bg-white rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-4 h-px bg-white rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 md:hidden rounded-2xl border border-white/8 bg-[#0d0d0d]/90 backdrop-blur-md shadow-xl shadow-black/30 overflow-hidden"
          >
            <ul className="flex flex-col p-3 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-gray-400 hover:text-white hover:bg-white/6"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;