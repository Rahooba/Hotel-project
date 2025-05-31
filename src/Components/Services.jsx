import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { FaUtensils, FaSpa, FaSwimmingPool, FaDumbbell, FaConciergeBell, FaWifi } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaUtensils size={40} />,
      title: "Fine Dining",
      description: "Experience our award-winning restaurants with international cuisine",
      delay: 0.1
    },
    {
      icon: <FaSpa size={40} />,
      title: "Spa & Wellness",
      description: "Relax with our premium spa treatments and massage therapies",
      delay: 0.2
    },
    {
      icon: <FaSwimmingPool size={40} />,
      title: "Infinity Pool",
      description: "Enjoy our rooftop infinity pool with panoramic city views",
      delay: 0.3
    },
    {
      icon: <FaDumbbell size={40} />,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment with personal trainers available",
      delay: 0.4
    },
    {
      icon: <FaConciergeBell size={40} />,
      title: "24/7 Concierge",
      description: "Our concierge team is always available to assist with your needs",
      delay: 0.5
    },
    {
      icon: <FaWifi size={40} />,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the hotel",
      delay: 0.6
    }
  ];

  return (
    <div className="services-page">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="services-header"
      >
        <h1>Our Premium Services</h1>
        <p>Discover the exceptional services that make your stay unforgettable</p>
      </motion.div>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: service.delay }}
            className="service-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-icon" style={{ color: '#e74c3c' }}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="service-cta"
      >
        <h2>Ready to Experience Luxury?</h2>
        
      </motion.div>
    </div>
  );
};

export default Services;