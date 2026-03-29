import { useState } from "react";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";
import Scene3D from "./components/Scene3D";
import "./styles.css";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : "light"}>
      
      <button
        onClick={() => setDark(!dark)}
        className="mode-btn"
      >
        Toggle Mode
      </button>

      <ParticleBackground />

      <Hero />

      <Scene3D />
    </div>
  );
}