import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiTailwindcss, SiGithub, SiC, SiCplusplus,
  SiHtml5, SiCss3, SiBootstrap, SiPhp, SiWordpress, SiMysql,
  SiSass, SiNodedotjs, SiMongodb, SiExpress, SiOpenai
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const topSkills = [
  { name: "React", icon: <SiReact />, desc: "UI library for building components" },
  { name: "JavaScript", icon: <SiJavascript />, desc: "Scripting language for the web" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, desc: "Utility-first CSS framework" },
  { name: "GitHub", icon: <SiGithub />, desc: "Version control & collaboration" },
];

const categories = [
  {
    title: "Core Programming",
    skills: [
      { icon: <SiC />, name: "C", desc: "Procedural programming language" },
      { icon: <SiCplusplus />, name: "C++", desc: "OOP + low-level performance" },
      { icon: <FaJava />, name: "Java", desc: "Cross-platform backend language" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: <SiHtml5 />, name: "HTML", desc: "Markup for web structure" },
      { icon: <SiCss3 />, name: "CSS", desc: "Styling language for the web" },
      { icon: <SiBootstrap />, name: "Bootstrap", desc: "Prebuilt responsive UI components" },
      { icon: <SiSass />, name: "SCSS", desc: "CSS with variables and nesting" },
    ],
  },
  {
    title: "Backend & CMS",
    skills: [
      { icon: <SiPhp />, name: "PHP", desc: "Server-side scripting language" },
      { icon: <SiWordpress />, name: "WordPress", desc: "Popular CMS for websites" },
      { icon: <SiMysql />, name: "MySQL", desc: "Relational database system" },
      { icon: <SiNodedotjs />, name: "Node.js", desc: "Backend JavaScript runtime" },
      { icon: <SiExpress />, name: "Express.js", desc: "Fast backend web framework" },
      { icon: <SiMongodb />, name: "MongoDB", desc: "NoSQL database system" },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { icon: <SiOpenai />, name: "Generative AI", desc: "AI tools and APIs by OpenAI" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="text-white">
      {/* Hero full-screen top section */}
      <div className="h-screen w-full bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] flex flex-col justify-center items-center px-6 md:px-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🔥 Tech I Work With
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {topSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl w-[150px] h-[150px] flex flex-col items-center hover:scale-110 transition"
              whileHover={{ rotate: 5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="text-4xl text-cyan-400">{skill.icon}</div>
              <p className="text-sm mt-2 font-semibold">{skill.name}</p>
              <p className="text-xs text-gray-400 text-center mt-1">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 animate-bounce">
          <span className="text-xl md:text-2xl font-semibold">Scroll down</span>
          <svg
            className="w-7 h-7 text-cyan-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Scrollable detailed section */}
      <div className="bg-[#0d0d0d] px-6 md:px-16 py-20 space-y-16">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6 border-l-4 border-cyan-500 pl-4">
              {cat.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {cat.skills.map((skill, j) => (
                <div
                  key={j}
                  className="bg-white/5 border border-white/10 p-5 rounded-xl text-center flex flex-col items-center hover:scale-105 transition"
                >
                  <div className="text-3xl text-cyan-400 mb-1">{skill.icon}</div>
                  <p className="text-sm font-semibold">{skill.name}</p>
                  <p className="text-xs text-gray-400 mt-1 text-center">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
