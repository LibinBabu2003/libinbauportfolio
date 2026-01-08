
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6">
      <div className="glass px-6 py-3 rounded-full flex gap-4 md:gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative group"
          >
            <span className={`text-sm md:text-base font-medium transition-colors ${
              location.pathname === item.path ? 'text-indigo-400' : 'text-gray-400 group-hover:text-white'
            }`}>
              {item.name}
            </span>
            {location.pathname === item.path && (
              <motion.div
                layoutId="nav-pill"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};
