import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import standardroom from "../Images/standardroom.webp";
import DeluxeRoom from "../Images/Deluxe Room.jpeg";
import Suite from "../Images/Suite.webp";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  const tapEffect = {
    scale: 0.98
  };

  return (
    <div className="hotel-homepage">
      {/* Hero Section */}
      <motion.header 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience Luxury Accommodation
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Luxury Hotel provides unforgettable stays with premium services and care
          </motion.p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(231, 76, 60, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Explore Rooms
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Booking Search Section */}
      <motion.section 
        className="booking-search"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="search-container">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Check Room Availability
          </motion.h2>
          <motion.form 
            className="search-form"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Check-in Date', 'Check-out Date', 'Guests'].map((label, index) => (
              <motion.div 
                key={index}
                className="form-group"
                variants={itemVariants}
              >
                <label>{label}</label>
                {index === 2 ? (
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                ) : (
                  <input type="date" />
                )}
              </motion.div>
            ))}
            <motion.button 
              type="submit" 
              className="search-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Search
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Room Types Section */}
      <motion.section 
        className="room-types"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Room Types
        </motion.h2>
        <div className="rooms-grid">
          {[
            { img: standardroom, title: "Standard Room", desc: "Comfortable 25 m² room with all basic amenities" },
            { img: DeluxeRoom, title: "Deluxe Room", desc: "Luxurious 35 m² room with great view and premium services" },
            { img: Suite, title: "Suite", desc: "Elegant 50 m² suite with living area and VIP services" }
          ].map((room, index) => (
            <motion.div
              key={index}
              className="room-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={hoverEffect}
              whileTap={tapEffect}
            >
              <div className="room-image-container">
                <img src={room.img} alt={room.title} />
                <div className="room-overlay"></div>
              </div>
              <div className="room-info">
                <h3>{room.title}</h3>
                <p>{room.desc}</p>
                <motion.button 
                  className="room-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="services-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: "icon-restaurant", title: "Fine Dining", desc: "Wide selection of international and local cuisine" },
            { icon: "icon-spa", title: "Spa & Massage", desc: "Relaxation and beauty treatments to highest standards" },
            { icon: "icon-pool", title: "Swimming Pool", desc: "Indoor and outdoor pools with relaxation area" },
            { icon: "icon-gym", title: "Fitness Center", desc: "Modern equipment with professional trainers" }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="hotel-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Luxury Hotel</h3>
            <p>Premium accommodation experience in the city</p>
          </motion.div>
          <motion.div 
            className="footer-section"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </motion.div>
          <motion.div 
            className="footer-section"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Contact Us</h3>
            <p>Address: City Center Street, Downtown</p>
            <p>Phone: +1 234 567 8900</p>
            <p>Email: info@luxuryhotel.com</p>
          </motion.div>
        </div>
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Home;