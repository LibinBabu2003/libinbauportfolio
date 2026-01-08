
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { RESUME_DATA } from '../../constants';

interface SkillItemProps {
  word: string;
  position: THREE.Vector3;
}

const SkillItem: React.FC<SkillItemProps> = ({ word, position }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={0.4}
        color="#818cf8"
        // Using a reliable CDN font that is known to work well with Drei Text
        font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoSREwPBkeO4nS6_.woff"
        anchorX="center"
        anchorY="middle"
      >
        {word}
      </Text>
    </Float>
  );
};

export const SkillCloud = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const skills = useMemo(() => RESUME_DATA.skills.map(s => s.name), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const points = useMemo(() => {
    const temp: THREE.Vector3[] = [];
    const radius = 4;
    const count = skills.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      temp.push(new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      ));
    }
    return temp;
  }, [skills]);

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillItem key={`${skill}-${i}`} word={skill} position={points[i]} />
      ))}
    </group>
  );
};
