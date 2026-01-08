
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Particles = () => {
  const points = useRef<THREE.Points>(null!);
  const count = 2000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export const BackgroundScene: React.FC = () => {
  const { camera } = useThree();
  const location = useLocation();

  React.useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let targetZ = 10;
    let rotX = 0;
    let rotY = 0;

    switch (location.pathname) {
      case '/':
        targetX = 0; targetY = 0; targetZ = 8;
        break;
      case '/about':
        targetX = -5; targetY = 2; targetZ = 12;
        rotY = 0.2;
        break;
      case '/experience':
        targetX = 0; targetY = -10; targetZ = 15;
        break;
      case '/projects':
        targetX = 5; targetY = 0; targetZ = 10;
        rotY = -0.2;
        break;
      case '/contact':
        targetX = 0; targetY = 5; targetZ = 10;
        rotX = -0.3;
        break;
    }

    gsap.to(camera.position, {
      x: targetX,
      y: targetY,
      z: targetZ,
      duration: 2,
      ease: "power2.inOut"
    });
    
    gsap.to(camera.rotation, {
      x: rotX,
      y: rotY,
      duration: 2,
      ease: "power2.inOut"
    });
  }, [location.pathname, camera]);

  return (
    <>
      <color attach="background" args={['#030712']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Particles />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[0, 0, -10]}>
          <octahedronGeometry args={[10, 2]} />
          <meshStandardMaterial color="#111827" wireframe transparent opacity={0.1} />
        </mesh>
      </Float>
    </>
  );
};
