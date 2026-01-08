
import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundScene } from './components/3D/BackgroundScene';
import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-[100]">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-indigo-400 font-bold tracking-widest uppercase text-xs">Initializing Scene</p>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative w-full min-h-screen">
        {/* Persistent 3D Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Canvas dpr={[1, 2]}>
            <Suspense fallback={null}>
              <BackgroundScene />
            </Suspense>
          </Canvas>
        </div>

        {/* UI Layer */}
        <div className="relative z-10">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
