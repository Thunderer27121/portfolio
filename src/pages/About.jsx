import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#0a0a0a] text-white px-6 md:px-12 py-20 mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Hey there! I'm <span className="text-white font-semibold">Inderjeet Singh</span>, a passionate self-taught developer with a strong foundation in both programming fundamentals and modern web technologies. From <span className="text-cyan-400">C, C++, and Java</span> to building responsive web applications using <span className="text-cyan-400">React, Tailwind CSS, and MySQL</span>, I love turning complex problems into elegant, user-focused digital solutions.
        </p>

        <p className="text-gray-400 text-base md:text-lg mb-12">
          I'm constantly evolving — currently diving deep into the <span className="text-green-400">MERN stack (MongoDB, Express, React, Node.js)</span> and exploring the exciting world of <span className="text-purple-400">Generative AI</span>. Whether it’s frontend, backend, or full-stack, I’m always eager to learn and build.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#111] rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">💻 Core Programming</h3>
            <p className="text-gray-400">
              C, C++, Java — solid understanding of OOP, logic building, and efficient problem-solving techniques.
            </p>
          </div>

          <div className="bg-[#111] rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">🌐 Web Development</h3>
            <p className="text-gray-400">
              HTML, CSS, JavaScript, Bootstrap, SCSS, Tailwind CSS, PHP — skilled in crafting responsive, modern UIs and clean layouts.
            </p>
          </div>

          <div className="bg-[#111] rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">⚛️ Frameworks & Tools</h3>
            <p className="text-gray-400">
              React.js, WordPress, MySQL — experienced in dynamic frontend apps, CMS-based websites, and working with databases.
            </p>
          </div>

          <div className="bg-[#111] rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">🚀 Currently Exploring</h3>
            <p className="text-gray-400">
              Node.js, Express.js, MongoDB (MERN stack), and Generative AI tools — building toward becoming a full-stack & AI-integrated developer.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
