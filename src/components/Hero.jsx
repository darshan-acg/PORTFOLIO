import { useEffect, useState } from "react";
import profileImage from "../assets/profile.png";

const roles = [
  "Python Developer",
  "Full Stack Developer",
  "Machine Learning Enthusiast",
  "React.js Developer",
  "Computer Vision Developer"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section reveal active">
      <div className="container hero-container">
        <div className="hero-left glass-card hero-animate-left">
          <p className="hero-badge">Aspiring Software Developer</p>

          <h1>
            Hi, I’m <span>Darshan A.C</span>
          </h1>

          <h2 className="typing-line">
            <span>{text}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-text">
            I build modern web applications, machine learning projects, and
            computer vision solutions using React.js, Python, Flask, Django,
            OpenCV, and PyTorch. I focus on creating practical and real-world
            software with clean design and strong functionality.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="/resume.pdf" download className="secondary-btn">
              Download Resume
            </a>
          </div>

          {/* <div className="hero-stats">
            <div className="hero-stat-card glass-mini">
              <h3>6+</h3>
              <p>Projects Built</p>
            </div>
            <div className="hero-stat-card glass-mini">
              <h3>4 Months</h3>
              <p>ML Experience</p>
            </div>
            <div className="hero-stat-card glass-mini">
              <h3>React + AI</h3>
              <p>Focused Stack</p>
            </div>
          </div> */}

          <div className="hero-mini-cards">
            <div className="mini-card glass-mini">
              <h3>6 Months</h3>
              <p>Python Full Stack Training</p>
            </div>
            <div className="mini-card glass-mini">
              <h3>4 Months</h3>
              <p>Trainee ML Experience</p>
            </div>
            <div className="mini-card glass-mini">
              <h3>React + Python</h3>
              <p>Web and AI Projects</p>
            </div>
          </div>
        </div>

        <div className="hero-right hero-animate-right">
          <div className="profile-card glass-card">
            <div className="profile-image-wrap">
              <img src={profileImage} alt="Darshan A.C" className="profile-image" />
            </div>

            <div className="profile-info">
              <h3>Darshan A.C</h3>
              <p>Bengaluru, India</p>

              <div className="profile-links">
                <a
                  href="https://github.com/darshan-acg"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/darshan-a-c-12547036a"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="hero-contact-mini">
                <a href="mailto:darshan.acg2003@gmail.com">
                  darshan.acg2003@gmail.com
                </a>
                <a href="tel:+919731175349">+91 9731175349</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}