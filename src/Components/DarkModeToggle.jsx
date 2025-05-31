import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { motion } from 'framer-motion';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`}
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.9 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="toggle-circle"
        animate={{
          x: darkMode ? 24 : 0,
          backgroundColor: darkMode ? '#333' : '#ffd700'
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      />
      <span className="moon">🌙</span>
      <span className="sun">☀️</span>
    </motion.button>
  );
};

export default DarkModeToggle;