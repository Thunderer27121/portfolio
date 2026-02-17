import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiTailwindcss, SiGithub, SiC, SiCplusplus,
  SiHtml5, SiCss3, SiBootstrap, SiPhp, SiMysql,
  SiSass, SiNodedotjs, SiMongodb, SiExpress, SiOpenai,
  SiNextdotjs, SiTypescript, SiDocker, SiAmazonwebservices, SiFramer, SiThreedotjs
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const topSkills = [
  { name: "React",        icon: <SiReact />,        desc: "UI library for building components", color: "#61DAFB" },
  { name: "JavaScript",   icon: <SiJavascript />,   desc: "Scripting language for the web",     color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />,  desc: "Utility-first CSS framework",        color: "#38BDF8" },
];

const categories = [
  {
    title: "Core Programming",
    accent: "#22d3ee",
    num: "01",
    skills: [
      { icon: <SiC />,         name: "C",    desc: "Procedural programming language" },
      { icon: <SiCplusplus />, name: "C++",  desc: "OOP + low-level performance" },
      { icon: <FaJava />,      name: "Java", desc: "Cross-platform backend language" },
    ],
  },
  {
    title: "Frontend",
    accent: "#a3e635",
    num: "02",
    skills: [
      { icon: <SiHtml5 />,      name: "HTML",          desc: "Markup for web structure" },
      { icon: <SiCss3 />,       name: "CSS",           desc: "Styling language for the web" },
      { icon: <SiBootstrap />,  name: "Bootstrap",     desc: "Prebuilt responsive UI components" },
      { icon: <SiSass />,       name: "SCSS",          desc: "CSS with variables and nesting" },
      { icon: <SiNextdotjs />,  name: "Next.js",       desc: "React framework for production" },
      { icon: <SiTypescript />, name: "TypeScript",    desc: "Typed superset of JavaScript" },
      { icon: <SiFramer />,     name: "Framer Motion", desc: "Production-ready animation library" },
      { icon: <SiThreedotjs />, name: "Three.js",      desc: "3D graphics in the browser" },
    ],
  },
  {
    title: "Backend & Database",
    accent: "#fb923c",
    num: "03",
    skills: [
      { icon: <SiPhp />,       name: "PHP",        desc: "Server-side scripting language" },
      { icon: <SiMysql />,     name: "MySQL",      desc: "Relational database system" },
      { icon: <SiNodedotjs />, name: "Node.js",    desc: "Backend JavaScript runtime" },
      { icon: <SiExpress />,   name: "Express.js", desc: "Fast backend web framework" },
      { icon: <SiMongodb />,   name: "MongoDB",    desc: "NoSQL database system" },
    ],
  },
  {
    title: "DevOps & Cloud",
    accent: "#f472b6",
    num: "04",
    skills: [
      { icon: <SiDocker />,            name: "Docker", desc: "Containerisation platform" },
      { icon: <SiAmazonwebservices />, name: "AWS",    desc: "Amazon cloud infrastructure" },
      { name: "GitHub",       icon: <SiGithub />,       desc: "Version control & collaboration",    color: "#ffffff" }
    ],
  },
  {
    title: "Other Tools",
    accent: "#818cf8",
    num: "05",
    skills: [
      { icon: <SiOpenai />, name: "Generative AI", desc: "AI tools and APIs by OpenAI" },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  return (
    <section
      className="text-white"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      {/* ══════════════════════════════════════
          HERO — Top Skills
      ══════════════════════════════════════ */}
      <div className="relative h-screen w-full bg-[#080808] flex flex-col justify-center items-center px-6 md:px-16 overflow-hidden">

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Orbs */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-lime-400/7 blur-[130px]" />
        </div>

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-24 right-20 w-14 h-14 border border-cyan-400/15 rounded-xl z-0"
        />
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="pointer-events-none absolute bottom-32 left-14 w-8 h-8 border border-lime-400/15 rounded-full z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 tracking-widest uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
              Tech Stack
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-lime-300">
              Tech I Work With
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)} className="text-gray-500 text-sm max-w-md mb-14">
            My core toolkit — the technologies I reach for every day.
          </motion.p>

          {/* Top 4 skill cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-5 max-w-2xl"
          >
            {topSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group relative w-[140px] h-[140px] flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-white/[0.04] backdrop-blur-sm cursor-default overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${skill.color}12, transparent 70%)` }}
                />
                {/* Top line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px group-hover:left-0 group-hover:right-0 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${skill.color}60, transparent)` }}
                />
                <div
                  className="text-4xl mb-2 transition-all duration-300"
                  style={{ color: skill.color, filter: "drop-shadow(0 0 8px currentColor)" }}
                >
                  {skill.icon}
                </div>
                <p className="text-sm font-bold text-white">{skill.name}</p>
                <p className="text-[10px] text-gray-500 text-center mt-1 px-3 leading-tight">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gray-700 tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
          />
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          DETAILED CATEGORIES
      ══════════════════════════════════════ */}
      <div className="relative bg-[#080808] px-6 md:px-16 py-24 space-y-20 overflow-hidden">

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto space-y-20">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-xs font-mono tracking-widest"
                  style={{ color: `${cat.accent}60` }}
                >
                  {cat.num}
                </span>
                <div className="h-px flex-1 max-w-[40px]" style={{ background: `${cat.accent}40` }} />
                <h3
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{ color: cat.accent }}
                >
                  {cat.title}
                </h3>
                <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${cat.accent}30, transparent)` }} />
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: j * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col items-center text-center rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-5 cursor-default overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.055]"
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at center, ${cat.accent}10, transparent 70%)` }}
                    />
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-4 right-4 h-px group-hover:left-0 group-hover:right-0 transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}60, transparent)` }}
                    />
                    <div
                      className="text-3xl mb-2 relative z-10 transition-all duration-300"
                      style={{ color: cat.accent, filter: "drop-shadow(0 0 6px currentColor)" }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm font-bold text-white relative z-10">{skill.name}</p>
                    <p className="text-[10px] text-gray-500 mt-1 leading-tight relative z-10">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Bottom line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs text-gray-700 tracking-widest uppercase font-mono">
              {categories.reduce((acc, c) => acc + c.skills.length, 0) + topSkills.length} skills total
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
