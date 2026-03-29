import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="glass" style={{
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      zIndex: 1000
    }}>
      <Link to="home" smooth>Home</Link>
      <Link to="about" smooth>About</Link>
      <Link to="projects" smooth>Projects</Link>
      <Link to="contact" smooth>Contact</Link>
    </div>
  );
}