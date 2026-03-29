const projects = [
  {
    title: "AI Food Recommendation System",
    desc: "ML-based system suggesting food based on user behavior"
  },
  {
    title: "Face Recognition System",
    desc: "OpenCV based security system with alert mechanism"
  },
  {
    title: "Hand Gesture Control",
    desc: "Real-time gesture detection using OpenCV"
  },
  {
    title: "Employee Management System",
    desc: "React CRUD web app with state management"
  },
  {
    title: "Shopping Website",
    desc: "E-commerce React app with cart & filters"
  },
  {
    title: "Box Touch Game",
    desc: "React Native mobile game with scoring system"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            padding: "20px",
            background: "#1e293b",
            borderRadius: "10px"
          }}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}