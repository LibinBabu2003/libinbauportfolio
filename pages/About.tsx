
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { SkillCloud } from '../components/3D/SkillCloud';
import { RESUME_DATA } from '../constants';
import { GlassCard } from '../components/UI/GlassCard';

const ThreeLoader = () => (
  <mesh>
    <sphereGeometry args={[0.5, 16, 16]} />
    <meshStandardMaterial color="#6366f1" wireframe />
  </mesh>
);

export const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Pioneering the <span className="text-indigo-400">Future of AI</span>
          </h2>
          <GlassCard className="mb-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {RESUME_DATA.summary}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Based in {RESUME_DATA.location}, I bridge the gap between academic research and real-world deployment. My journey is fueled by a passion for solving complex problems using neural networks and statistical analysis.
            </p>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/5 bg-white/5">
              <h3 className="text-indigo-400 font-bold text-2xl">98%</h3>
              <p className="text-gray-400 text-sm">HSC Academic Score</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/5">
              <h3 className="text-indigo-400 font-bold text-2xl">B.Tech</h3>
              <p className="text-gray-400 text-sm">Computer Science</p>
            </div>
          </div>
        </motion.div>

        <div className="h-[400px] md:h-[600px] relative group border border-white/5 rounded-3xl overflow-hidden bg-white/5">
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={<ThreeLoader />}>
              <SkillCloud />
            </Suspense>
          </Canvas>
          <div className="absolute inset-x-0 bottom-6 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Interactive Skill Sphere</span>
          </div>
        </div>
      </div>
    </div>
  );
};
