import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="glass" style={{
      height: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem" }}
      >
        Darshan A.C
      </motion.h1>

      <h2 style={{ color: "#38bdf8" }}>
        <Typewriter
          words={[
            "ML Engineer",
            "Full Stack Developer",
            "React Developer",
            "AI Vision Engineer"
          ]}
          loop
          cursor
          typeSpeed={80}
          deleteSpeed={50}
        />
      </h2>

      <div style={{ marginTop: "20px" }}>
        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
}