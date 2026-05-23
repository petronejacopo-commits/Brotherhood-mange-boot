"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { mouse, viewport } = useThree();

  const particleCount = 150;
  const colors = ['#D9A63E', '#DC4424', '#F5D64E'];

  const particles = useMemo(() => {
    const temp = [];
    const colorArray = new Float32Array(particleCount * 3);
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10 - 5;

      const speed = 0.01 + Math.random() * 0.02;
      const factor = 20 + Math.random() * 100;
      const type = Math.floor(Math.random() * 3); // 0: box, 1: sphere, 2: octahedron (handled in geometry setup if needed, but keeping it simple with one shape or varied scales)

      const particleColor = colors[Math.floor(Math.random() * colors.length)];
      color.set(particleColor);
      color.toArray(colorArray, i * 3);

      temp.push({ x, y, z, speed, factor, type });
    }
    return { data: temp, colorArray };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Mouse interaction max 30px influence mapped to 3D space
    const targetX = (mouse.x * viewport.width) / 2;
    const targetY = (mouse.y * viewport.height) / 2;

    particles.data.forEach((particle, i) => {
      let { x, y, z, speed, factor } = particle;

      // Floating animation
      const t = (state.clock.elapsedTime * speed) + i * 100;
      const currentX = x + Math.cos(t) * 2;
      const currentY = y + Math.sin(t) * 2;
      const currentZ = z + Math.sin(t) * 2;

      // Mouse reactivity
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Affect particles within a certain radius (approximating the 30px requirement in 3d space units)
      const influenceRadius = 3;
      let pullX = 0;
      let pullY = 0;

      if (distance < influenceRadius) {
         const force = (influenceRadius - distance) / influenceRadius;
         // Push away from mouse
         pullX = -(dx / distance) * force * 1.5;
         pullY = -(dy / distance) * force * 1.5;
      }

      dummy.position.set(currentX + pullX, currentY + pullY, currentZ);

      // Rotate
      dummy.rotation.x = t * 2;
      dummy.rotation.y = t * 2;
      dummy.rotation.z = t * 2;

      // Scale based on distance to camera/center
      const scale = Math.max(0.1, 1 - Math.abs(z) / 10);
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial
        toneMapped={false}
        transparent
        opacity={0.6}
        wireframe
      />
      <instancedBufferAttribute
        attach="instanceColor"
        args={[particles.colorArray, 3]}
      />
    </instancedMesh>
  );
};

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}