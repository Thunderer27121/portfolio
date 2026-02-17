import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

const cards = [
  {
    num: "01",
    title: "Core Programming",
    accent: "#22d3ee",
    body: "C, C++, Java — solid understanding of OOP, logic building, and efficient problem-solving techniques.",
  },
  {
    num: "02",
    title: "Web Development",
    accent: "#a3e635",
    body: "HTML, CSS, JavaScript, Bootstrap, SCSS, Tailwind CSS, PHP — skilled in crafting responsive, modern UIs and clean layouts.",
  },
  {
    num: "03",
    title: "Frameworks & Tools",
    accent: "#fb923c",
    body: "React.js, WordPress, MySQL — experienced in dynamic frontend apps, CMS-based websites, and working with databases.",
  },
  {
    num: "04",
    title: "Currently Exploring",
    accent: "#818cf8",
    body: "Node.js, Express.js, MongoDB (MERN stack), and Generative AI — building toward becoming a full-stack & AI-integrated developer.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#080808] text-white px-6 md:px-12 py-24 overflow-hidden"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      {/* ── Grain ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* ── Grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Orbs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/7 blur-[130px]" />
      </div>

      {/* ── Floating shapes ── */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 left-16 w-12 h-12 border border-cyan-400/15 rounded-xl z-0"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute bottom-28 right-16 w-8 h-8 border border-lime-400/15 rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400/30 rounded-full z-0"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 tracking-widest uppercase backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Who I Am
          </span>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-lime-300">
              About Me
            </span>
          </h2>
        </motion.div>

        {/* Bio block */}
        <div className="mb-16 max-w-3xl mx-auto">
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6"
          >
            Hey there! I'm{" "}
            <span className="text-white font-bold">Inderjeet Singh</span>, a
            passionate self-taught developer with a strong foundation in both
            programming fundamentals and modern web technologies. From{" "}
            <span
              className="font-semibold"
              style={{ color: "#22d3ee" }}
            >
              C, C++, and Java
            </span>{" "}
            to building responsive web applications using{" "}
            <span
              className="font-semibold"
              style={{ color: "#22d3ee" }}
            >
              React, Tailwind CSS, and MySQL
            </span>
            , I love turning complex problems into elegant, user-focused digital
            solutions.
          </motion.p>

          <motion.p
            {...fadeUp(0.2)}
            className="text-gray-500 text-base md:text-lg leading-relaxed"
          >
            I'm constantly evolving — currently diving deep into the{" "}
            <span className="text-gray-300 font-semibold">MERN stack</span> and
            exploring the exciting world of{" "}
            <span style={{ color: "#818cf8" }} className="font-semibold">
              Generative AI
            </span>
            . Whether it's frontend, backend, or full-stack, I'm always eager
            to learn and build.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          {...fadeUp(0.25)}
          className="flex items-center gap-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs text-gray-600 tracking-widest uppercase font-mono">
            Areas of Expertise
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:border-white/15 hover:bg-white/[0.055]"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${card.accent}10, transparent 60%)`,
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px group-hover:left-0 group-hover:right-0 transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.accent}70, transparent)`,
                }}
              />

              {/* Number */}
              <span
                className="text-xs font-mono tracking-widest mb-3 block"
                style={{ color: `${card.accent}60` }}
              >
                {card.num}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-black tracking-tight mb-3 relative z-10"
                style={{ color: card.accent }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs text-gray-700 tracking-widest uppercase font-mono">
            always learning
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;