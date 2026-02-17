import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { SiReact, SiJavascript, SiTailwindcss, SiGithub } from "react-icons/si";
import Footer from "./Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const techStack = [
  { icon: SiReact,      label: "React",      color: "#61DAFB" },
  { icon: SiJavascript, label: "JavaScript",  color: "#F7DF1E" },
  { icon: SiTailwindcss,label: "Tailwind",    color: "#38BDF8" },
  { icon: SiGithub,     label: "GitHub",      color: "#ffffff" },
];

export default function Home() {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Inderjeet_resume.pdf";
    link.download = "Inderjeet_singh_resume";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080808]"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      {/* ── Grain texture overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* ── Ambient glow orbs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* top-left cyan orb */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        {/* bottom-right lime orb */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-lime-400/8 blur-[140px]" />
        {/* center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/3 blur-[100px]" />
      </div>

      {/* ── Decorative grid lines ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Floating accent shapes ── */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-32 right-16 w-16 h-16 border border-cyan-400/20 rounded-xl z-0"
      />
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute bottom-48 left-12 w-10 h-10 border border-lime-400/20 rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-60 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full z-0"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-28 pb-10">

        {/* Status badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 tracking-widest uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 group"
        >
          {/* Glow ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/40 via-transparent to-lime-400/30 blur-sm group-hover:blur-md transition-all duration-500" />
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-cyan-400/60 to-lime-400/40" />
          <motion.img
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            alt="Profile"
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-black"
            decoding="auto"
            fetchPriority="high"
            src="/profile.webp"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-4"
        >
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-lime-300">
              Inderjeet Singh
            </span>
            {/* underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-lime-400 origin-left rounded-full"
            />
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div {...fadeUp(0.3)} className="mb-5">
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide min-h-[2rem]">
            <Typewriter
              words={[
                "A Fullstack Developer.",
                "A Creative Problem Solver.",
                "A Coding Ninja looking for greater opportunities.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          className="mb-10 max-w-lg text-gray-500 text-sm md:text-base leading-relaxed"
        >
          Full Stack developer focused on building{" "}
          <span className="text-gray-300">clean, user-friendly</span> web interfaces.
          I love transforming ideas into reality using{" "}
          <span className="text-gray-300">code and design.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex gap-4 flex-wrap justify-center mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/projects")}
            className="relative group px-7 py-3 rounded-full font-semibold text-sm overflow-hidden"
          >
            {/* gradient bg */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-lime-400 transition-opacity duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-lime-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 text-black tracking-wide">View Projects →</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownload}
            className="relative group px-7 py-3 rounded-full font-semibold text-sm border border-white/20 text-white overflow-hidden backdrop-blur-sm"
          >
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/8 transition-colors duration-300" />
            <span className="relative z-10 tracking-wide">Download Resume ↓</span>
          </motion.button>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 mb-12"
        >
          <p className="text-xs text-gray-600 uppercase tracking-[0.2em]">Built with</p>
          <div className="flex items-center gap-6">
            {techStack.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.15 }}
                className="group flex flex-col items-center gap-1.5 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm flex items-center justify-center text-2xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10"
                  style={{ boxShadow: `0 0 0 0 ${color}` }}
                >
                  <Icon style={{ color, filter: "drop-shadow(0 0 6px currentColor)" }} />
                </div>
                <span className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col items-center gap-2 mb-6"
        >
          <span className="text-[10px] text-gray-700 tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
          />
        </motion.div>

        <Footer />
      </div>
    </section>
  );
}