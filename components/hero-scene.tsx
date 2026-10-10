"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function Network() {
  const ref = useRef<Group>(null);
  const points = useMemo(() => {
    const values: number[] = [];
    for (let i = 0; i < 34; i += 1) {
      const angle = i * 1.47;
      const radius = 1.4 + (i % 5) * 0.23;
      values.push(Math.cos(angle) * radius, Math.sin(angle * 1.3) * 1.2, Math.sin(angle) * radius);
    }
    return new Float32Array(values);
  }, []);
  const lines = useMemo(() => {
    const result: [number, number, number][][] = [];
    for (let i = 0; i < 15; i += 1) {
      const a = i * 3;
      const b = ((i * 2 + 7) % 34) * 3;
      result.push([[points[a], points[a + 1], points[a + 2]], [points[b], points[b + 1], points[b + 2]]]);
    }
    return result;
  }, [points]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x = state.pointer.y * 0.08;
    ref.current.rotation.z = state.pointer.x * 0.05;
  });

  return (
    <group ref={ref}>
      <Points positions={points} stride={3} frustumCulled>
        <PointMaterial transparent color="#c66335" size={0.055} sizeAttenuation depthWrite={false} opacity={0.75} />
      </Points>
      {lines.map((line, index) => (
        <Line key={index} points={line} color="#9e6b50" lineWidth={0.55} transparent opacity={0.24} />
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 48 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <Network />
      </Canvas>
    </div>
  );
}
