import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const projects = [
  {
    title: "CRUD App",
    stack: "PHP + MySQL",
    description:
      "A CRUD application with user & admin login, email verification, and MySQL database.",
    live: "https://php-crud-sflf.onrender.com",
    github: "https://github.com/Thunderer27121/Php_crud",
    accent: "#22d3ee",
    index: "01",
  },
  {
    title: "Pizza Ordering Website",
    stack: "React",
    description:
      "A pizza website with category-based menu, cart system, payment gateway and Tailwind styling.",
    live: "https://pizza-website-sigma-two.vercel.app",
    github: "https://github.com/Thunderer27121/pizza_website",
    accent: "#a3e635",
    index: "02",
  },
  {
    title: "Excalidraw Clone",
    stack: "React + Tailwind",
    description:
      "A clone of Excalidraw featuring pencil, eraser, shape and line tools for collaborative drawing.",
    live: "https://excalidraw-clone-lilac.vercel.app",
    github: "https://github.com/Thunderer27121/excalidraw-clone",
    accent: "#818cf8",
    index: "03",
  },
  {
    title: "StreamX",
    stack: "MERN + Cloudinary",
    description:
      "A full-featured video platform where users can upload, like, dislike, subscribe, and manage channels.",
    live: "https://stream-x-mu.vercel.app",
    github: "https://github.com/Thunderer27121/StreamX",
    accent: "#fb923c",
    index: "04",
  },
  {
    title: "Real-time Chat App",
    stack: "React + InstantDB",
    description:
      "A modern real-time chat application with instant message syncing, room-based chats, and responsive UI.",
    live: "https://share.google/IsfeeBBk0Ym5Iz9DW",
    github: "https://github.com/Thunderer27121/Chatapp",
    accent: "#f472b6",
    index: "05",
  },
];

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#080808] text-white px-6 md:px-12 py-24 overflow-hidden"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      {/* ── Grain overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* ── Grid lines ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Ambient orbs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-lime-400/6 blur-[130px]" />
      </div>

      {/* ── Floating accents ── */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-24 right-20 w-14 h-14 border border-cyan-400/15 rounded-xl z-0"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute bottom-32 left-16 w-8 h-8 border border-lime-400/15 rounded-full z-0"
      />

      {/* ── Header ── */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 tracking-widest uppercase backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Selected Work
          </span>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-lime-300">
              My Projects
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm max-w-md">
            Things I've built — from full-stack platforms to real-time experiences.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col h-full"
            >
              {/* Card glow on hover */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{ background: `${project.accent}18` }}
              />

              <div className="relative flex flex-col h-full rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.055]">

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-px transition-all duration-500 group-hover:left-0 group-hover:right-0"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
                />

                {/* Project number */}
                <span
                  className="text-xs font-mono mb-4 tracking-widest"
                  style={{ color: `${project.accent}60` }}
                >
                  {project.index}
                </span>

                {/* Title + stack */}
                <div className="mb-3">
                  <h3
                    className="text-xl font-bold leading-tight mb-1"
                    style={{ color: project.accent }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-[11px] text-gray-600 uppercase tracking-widest font-mono">
                    {project.stack}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black tracking-wide flex-1 justify-center"
                    style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}cc)` }}
                  >
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-colors tracking-wide"
                  >
                    <CodeBracketIcon className="w-3.5 h-3.5" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom count line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs text-gray-700 tracking-widest uppercase font-mono">
            {projects.length} projects
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
}