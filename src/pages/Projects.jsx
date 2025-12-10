import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "CRUD App (PHP + MySQL)",
    description:
      "A CRUD application with user & admin login, email verification, and MySQL database.",
    live: "https://php-crud-sflf.onrender.com",
    github: "https://github.com/Thunderer27121/Php_crud",
  },
  {
    title: "Pizza Ordering Website (React)",
    description:
      "A pizza website with category-based menu, cart system, payment gateway and Tailwind styling.",
    live: "https://pizzawebapp-z1td.vercel.app/",
    github: "https://github.com/Thunderer27121/pizzawebapp",
  },
  {
    title: "Excalidraw clone app (React, tailwind)",
    description:
      "A clone of excalidraw that has some of helping tools like pencil, eraser, shape and line tool.",
    live: "https://excalidraw-clone-lilac.vercel.app/",
    github: "https://github.com/Thunderer27121/excalidraw-clone",
  },
  {
  title: "StreamX (MERN, Tailwind, Cloudinary)",
  description:
    "A full-featured video platform where users can upload, like, dislike, subscribe, and manage channels — built with MERN stack and optimized UI using Tailwind.",
  live: "https://stream-x-mu.vercel.app/",
  github: "https://github.com/Thunderer27121/StreamX",
},
{
  title: "Real-time Chat App (React, InstantDB)",
  description:
    "A modern real-time chat application built with React and InstantDB, featuring instant message syncing, room-based chats, and a clean, responsive UI.",
  live: "https://share.google/IsfeeBBk0Ym5Iz9DW",
  github: "https://github.com/Thunderer27121/Chatapp",
}

];

export default function ProjectsPage() {
  return (
    <section id="projects" className="w-full bg-[#0a0a0a] text-white px-6 md:px-12 py-20 mt-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text"
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-gray-800">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 hover:scale-105 transition-transform"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
