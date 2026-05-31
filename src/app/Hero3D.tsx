"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const materialBlue = new THREE.MeshStandardMaterial({ color: '#0055ff', roughness: 0.2, metalness: 0.8 });
const materialOrange = new THREE.MeshStandardMaterial({ color: '#ff7a00', roughness: 0.3, metalness: 0.9, transparent: true, opacity: 0.85 });
const materialGlass = new THREE.MeshPhysicalMaterial({ color: '#ffffff', transmission: 0.9, opacity: 1, metalness: 0.1, roughness: 0.1, ior: 1.5, thickness: 0.5 });

function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-4, 2, -2]} material={materialBlue}>
          <icosahedronGeometry args={[0.5, 0]} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[4.5, 2.5, -3]} material={materialOrange}>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-5, -1, -4]} material={materialGlass}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh position={[5, -1.5, -2]} material={materialBlue}>
          <coneGeometry args={[0.5, 1, 32]} />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={2.5} floatIntensity={1.8}>
        <mesh position={[2.5, -3, -1]} material={materialOrange}>
          <sphereGeometry args={[0.45, 32, 32]} />
        </mesh>
      </Float>
      
      <Float speed={1.7} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-2.5, -2.5, -3]} material={materialGlass}>
          <cylinderGeometry args={[0.35, 0.35, 0.8, 32]} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={3} />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#ff7a00" />
        <pointLight position={[0, 5, 5]} intensity={2} color="#0055ff" />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
