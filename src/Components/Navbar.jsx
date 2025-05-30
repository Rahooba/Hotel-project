import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/rooms", name: "Rooms" },
    { path: "/services", name: "Services" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" }
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(231, 76, 60, 0.4)"
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.nav 
      className={`hotel-nav ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="hotel-logo"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">Luxury Hotel</Link>
      </motion.div>

      <div 
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="hamburger"></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <motion.li 
            key={link.path}
            custom={i}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.name}
              <span className="link-underline"></span>
            </Link>
          </motion.li>
        ))}
        <motion.li
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button 
            className="booking-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book Now
          </motion.button>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;