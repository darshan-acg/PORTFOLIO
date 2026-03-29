import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const init = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80 },
          color: { value: "#38bdf8" },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.4 },
          size: { value: 2 }
        }
      }}
    />
  );
}