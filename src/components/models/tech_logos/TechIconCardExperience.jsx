import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const gltf = useGLTF(model.modelPath);

  // only used for Java
  const javaMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#0B73B8" }), // or "#E21B1B"
    []
  );

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (!child.isMesh) return;

      // keep your Interactive Developer special-case
      if (model.name === "Interactive Developer" && child.name === "Object_5") {
        child.material = new THREE.MeshStandardMaterial({ color: "white" });
        return;
      }

      // recolor ONLY Java; leave everything else with their baked materials
      if (model.name === "Java Developer") {
        child.material = javaMat;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf.scene, model.name, javaMat]);

  // apply a default upright rotation ONLY for Java if not provided in constants
  const rotation =
    model.rotation ||
    (model.name === "Java Developer" ? [Math.PI / 2, 0, -Math.PI / 8] : [0, 0, 0]);

  const scale = model.scale ?? 0.05;

  return (
    <Canvas>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={scale} rotation={rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;