import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import LuxuryHotel from "../Images/Luxury Hotel.jpeg";
import HeadChef from "../Images/chef.webp";
import GeneralManager from "../Images/Hotel Manager.webp";
import ChiefConcierge from "../Images/Chief Concierge.webp";

const About = () => {
  return (
    <div className="about-page">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="about-header"
      >
        <h1>Our Story</h1>
        <p>Discover the legacy of Luxury Hotel</p>
      </motion.div>

      <div className="about-content">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="about-image"
        >
          <img src={LuxuryHotel } alt="Luxury Hotel" />
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="about-text"
        >
          <h2>Welcome to Luxury Hotel</h2>
          <p>
            Founded in 1995, Luxury Hotel has been providing exceptional hospitality 
            for over 25 years. What began as a small boutique hotel has grown into 
            one of the most prestigious hospitality brands in the region.
          </p>
          <p>
            Our mission is to create unforgettable experiences for our guests through 
            impeccable service, luxurious accommodations, and attention to every detail.
          </p>
          <div className="stats-container">
            <div className="stat">
              <h3>25+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>150+</h3>
              <p>Rooms & Suites</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Guest Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="team-section"
      >
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <motion.div 
            whileHover={{ y: -10 }}
            className="team-member"
          >
            <img src={GeneralManager} alt="Hotel Manager" />
            <h3>Sarah Johnson</h3>
            <p>General Manager</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="team-member"
          >
            <img src={HeadChef} alt="Head Chef" />
            <h3>Michael Chen</h3>
            <p>Head Chef</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="team-member"
          >
            <img src={ChiefConcierge} alt="Chief Concierge" />
            <h3>David Wilson</h3>
            <p>Chief Concierge</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;