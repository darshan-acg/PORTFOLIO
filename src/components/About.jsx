import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`section reveal ${visible ? "active" : ""}`} ref={ref}>
      <div className="container">
        <div className="section-header">
          <p>About Me</p>
          <h2>Professional Summary</h2>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card">
            <p>
              Software Developer with 7 months of Machine Learning development
              experience and Python full-stack training. Skilled in Python,
              Django, React.js, Machine Learning, Computer Vision, OpenCV,
              PyTorch, and YOLO.
            </p>
            <p>
              I build AI-powered, web, and mobile applications using modern
              development frameworks. My work includes computer vision models,
              real-time object detection, face recognition, React.js interfaces,
              and React Native mobile AI apps.
            </p>
            <p>
              Seeking to leverage strong problem-solving and rapid-learning
              abilities to deliver scalable, high-impact software solutions as
              part of a growth-focused engineering team.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-box glass-card">
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React.js, Responsive UI</p>
            </div>
            <div className="highlight-box glass-card">
              <h3>Backend</h3>
              <p>Django, Flask, REST APIs</p>
            </div>
            <div className="highlight-box glass-card">
              <h3>AI / ML</h3>
              <p>PyTorch, NumPy, Pandas, OpenCV, Ultralytics YOLO, TensorFlow Lite</p>
            </div>
            <div className="highlight-box glass-card">
              <h3>Database</h3>
              <p>Oracle SQL, Firebase, CRUD, Joins, Subqueries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
