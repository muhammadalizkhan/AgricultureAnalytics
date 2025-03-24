"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";

function Terrain() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial
        color="#4a9375"
        wireframe={false}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

function CropBars() {
  const bars = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const height = Math.random() * 3 + 0.5;
      bars.push(
        <mesh
          key={`${i}-${j}`}
          position={[i * 4 - 20, height / 2, j * 4 - 20]}
        >
          <boxGeometry args={[0.5, height, 0.5]} />
          <meshStandardMaterial
            color={`hsl(${120 + height * 20}, 70%, ${40 + height * 10}%)`}
          />
        </mesh>
      );
    }
  }
  return <>{bars}</>;
}

export function FarmMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[600px]"
    >
      <Card className="w-full h-full overflow-hidden backdrop-blur-lg bg-opacity-50">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[20, 20, 20]} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2.1}
          />
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={1}
            castShadow
          />
          <Suspense fallback={null}>
            <Terrain />
            <CropBars />
          </Suspense>
          <fog attach="fog" args={["#ffffff", 30, 100]} />
        </Canvas>
      </Card>
    </motion.div>
  );
}