import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <Float speed={2}>
      <mesh>
        <torusKnotGeometry />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="glass" style={{ height: "400px" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
}