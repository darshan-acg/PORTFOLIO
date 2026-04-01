import { useEffect, useRef, useState } from "react";

const skillsData = [
  {
    title: "Programming & Core Skills",
    items: ["Python", "OOP", "Data Structures", "Exception Handling"]
  },
  {
    title: "Machine Learning",
    items: ["NumPy", "Pandas", "PyTorch", "Data Preprocessing", "Feature Handling"]
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "YOLO", "Face Detection", "Image Processing"]
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design", "DOM"]
  },
  {
    title: "Frontend",
    items: ["React.js", "Hooks", "Components", "Router"]
  },
  {
    title: "Mobile Development",
    items: ["React Native"]
  },
  {
    title: "Backend",
    items: ["Flask", "Django", "REST APIs"]
  },
  {
    title: "Database",
    items: ["Oracle SQL", "CRUD", "Joins", "Subqueries", "Normalization"]
  }
];

export default function Skills() {
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
    <section
      id="skills"
      className={`section section-light-blue reveal ${visible ? "active" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <p>Technical Skills</p>
          <h2>What I Work With</h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card glass-card" key={index}>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.items.map((item, i) => (
                  <span className="tag" key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}