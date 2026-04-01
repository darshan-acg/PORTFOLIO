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
              Aspiring Software Developer with a strong foundation in Python,
              Full Stack Development, and Machine Learning. Completed 6-month
              Python Full Stack training and gained 4 months of experience as a
              Trainee Machine Learning Developer.
            </p>
            <p>
              Skilled in building web and mobile applications using React and
              React Native, along with backend frameworks like Flask and Django.
              Hands-on experience in computer vision and AI-based applications.
            </p>
            <p>
              Passionate about developing scalable and real-world software
              solutions with premium UI, practical features, and clean code.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-box glass-card">
              <h3>Frontend</h3>
              <p>React.js, JavaScript, HTML, CSS, Responsive UI</p>
            </div>
            <div className="highlight-box glass-card">
              <h3>Backend</h3>
              <p>Flask, Django, REST API basics</p>
            </div>
            <div className="highlight-box glass-card">
              <h3>AI / ML</h3>
              <p>PyTorch, NumPy, Pandas, OpenCV, YOLO</p>
            </div>
            <div className="highlight-box glass-card">
              <h3>Database</h3>
              <p>Oracle SQL, CRUD, Joins, Subqueries, Normalization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}