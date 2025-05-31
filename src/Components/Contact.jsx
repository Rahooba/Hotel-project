import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="contact-page">
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="confirmation-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="confirmation-popup"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="confirmation-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for contacting us. We've received your message and will get back to you soon.</p>
              <motion.button
                className="close-btn"
                onClick={closeConfirmation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="contact-info"
        >
          <h2>Get in Touch</h2>
          
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt size={24} />
            </div>
            <div className="info-text">
              <h3>Address</h3>
              <p>123 Luxury Avenue, Downtown, City Center</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhone size={24} />
            </div>
            <div className="info-text">
              <h3>Phone</h3>
              <p>+1 (234) 567-8900</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope size={24} />
            </div>
            <div className="info-text">
              <h3>Email</h3>
              <p>info@luxuryhotel.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaClock size={24} />
            </div>
            <div className="info-text">
              <h3>Opening Hours</h3>
              <p>24/7 Reception</p>
              <p>Restaurant: 7:00 AM - 11:00 PM</p>
              <p>Spa: 9:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <Link to="#"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#"><i className="fab fa-twitter"></i></Link>
              <Link to="#"><i className="fab fa-instagram"></i></Link>
              <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="contact-form"
        >
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="map-container"
      />
    </div>
  );
};

export default Contact;