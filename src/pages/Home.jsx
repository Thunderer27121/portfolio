import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { SiReact, SiJavascript, SiTailwindcss, SiGithub } from "react-icons/si";
import Footer from "./Footer";

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
    <section id="home" className="relative overflow-auto" style={{fontFamily: "Bricolage Grotesque"}}>

      <svg
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute  w-full h-full"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#021" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,160 C360,320 1080,0 1440,160 L1440,800 L0,800 Z"
        />
      </svg>

      <div className="absolute w-[150px] h-[150px] bg-white/10 backdrop-blur-sm rounded-full top-80 left-10 animate-ping z-0" />
      <div className="absolute w-[100px] h-[100px] bg-white/10 backdrop-blur-sm rounded-full bottom-80 right-16 animate-bounce z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen mt-50 text-white">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", duration: 1,   ease: "easeInOut" }}
          alt="Profile"
          whileHover={{ rotate: 5 }}
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mt-10 border-4 border-white shadow-xl transition duration-300 hover:scale-105"
          decoding="auto"
          fetchPriority="high"
          src={"/profile.webp"}
        >
          </motion.img>
  

        <motion.h1
          className="text-4xl md:text-6xl mb-3 font-montserrat"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm <span className="underline underline-offset-4">Inderjeet Singh</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typewriter
            words={[
              "A Fullstack developer.",
              "A creative problem solver.",
              "A Coding ninja lookig for greater opportunities.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.p className="mb-10">
          I’m a Full Stack developer focused on building clean, user-friendly web interfaces. <br />I love transforming ideas into reality using code and design.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition" onClick={() => {
            navigate("/projects");
          }}>
            View projects
          </button>
          <button
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition"
            onClick={handleDownload}
          >
            Download resume
          </button>
        </motion.div>
        <motion.div 
        initial={{opacity : 0}}
        whileInView={{opacity:1}}
        transition={{duration :2, type:"tween" , loop: true}}
        className="grid grid-cols-4 gap-6 text-5xl text-gray-600">
          <SiReact />
          <SiJavascript />
          <SiTailwindcss />
          <SiGithub />
        </motion.div>
        <Footer/>
      </div>
    </section>
  );
}
