import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import standardroom from "../Images/standardroom.webp";
import DeluxeRoom from "../Images/Deluxe Room.jpeg";
import Suite from "../Images/Suite.webp";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
const navigate = useNavigate();
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

  // Room data with capacity information
  const roomTypes = [
    { 
      img: standardroom, 
      title: "Standard Room", 
      desc: "Comfortable 25 m² room with all basic amenities",
      capacity: 1,
      type: "single",
      price: "$120/night"
    },
    { 
      img: DeluxeRoom, 
      title: "Deluxe Room", 
      desc: "Luxurious 35 m² room with great view",
      capacity: 2,
      type: "double",
      price: "$220/night"
    },
    { 
      img: Suite, 
      title: "Suite", 
      desc: "Elegant 50 m² suite with living area and VIP services",
      capacity: 4,
      type: "suite",
      price: "$350/night"
    }
  ];

  // Search form state
  const [searchParams, setSearchParams] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1'
  });

  // Filtered rooms state
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Filter rooms based on guest count
    let filtered = [];
    const guestCount = parseInt(searchParams.guests);
    
    if (guestCount === 1) {
      filtered = roomTypes.filter(room => room.capacity === 1);
    } else if (guestCount === 2) {
      filtered = roomTypes.filter(room => room.capacity === 2);
    } else if (guestCount === 3) {
      filtered = roomTypes.filter(room => room.capacity === 3);
    } else if (guestCount >= 4) {
      filtered = roomTypes.filter(room => room.capacity >= 4);
    }
    
    setFilteredRooms(filtered);
    setShowResults(true);
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
          <Link to="/rooms">
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
          </Link>
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
      onSubmit={handleSearch}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        key="guests"
        className="form-group"
        variants={itemVariants}
      >
        <label>Guests</label>
        <select
          name="guests"
          value={searchParams.guests}
          onChange={handleInputChange}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
      </motion.div>
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

      {/* Search Results Section */}
      <AnimatePresence>
        {showResults && (
          <motion.section 
            className="search-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="results-container">
              <h3>Available Rooms for {searchParams.guests} Guest{searchParams.guests !== "1" ? "s" : ""}</h3>
              
              {filteredRooms.length > 0 ? (
                <div className="rooms-grid">
                  {filteredRooms.map((room, index) => (
                    <motion.div
                      key={index}
                      className="room-cardd"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={hoverEffect}
                      whileTap={tapEffect}
                    >
                      <div className="room-image-container">
                        <img src={room.img} alt={room.title} />
                        <div className="room-price">{room.price}</div>
                      </div>
                      <div className="room-inffo">
                        <h3>{room.title}</h3>
                        <p>{room.desc}</p>
                        <p className="room-capacity">Capacity: {room.capacity} guest{room.capacity !== 1 ? "s" : ""}</p>
                      <motion.button 
  className="room-btn"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate('/booking', { state: { room } })}
>
  Book Now
</motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="no-rooms">
                  <p>No rooms available for the selected criteria.</p>
                  <button 
                    className="room-btn"
                    onClick={() => setShowResults(false)}
                  >
                    Show All Rooms
                  </button>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Regular Room Types Section */}
      <AnimatePresence>
        {!showResults && (
          <motion.section 
            className="room-types"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              {roomTypes.map((room, index) => (
                <motion.div
                  key={index}
                  className="room-carddd"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={hoverEffect}
                  whileTap={tapEffect}
                >
                  <div className="room-image-container">
                    <img src={room.img} alt={room.title} />
                    <div className="room-price">{room.price}</div>
                  </div>
                  <div className="room-infoo">
                    <h3>{room.title}</h3>
                    <p>{room.desc}</p>
                  <motion.button 
  className="room-btn"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate('/booking', { state: { room } })}
>
  Book Now
</motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

    

{/* Testimonials Section */}
<motion.section 
  className="testimonials-section"
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
    What Our Guests Say
  </motion.h2>
  <motion.div 
    className="testimonials-grid"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {[
      { 
        name: "Mary John",
        rating: 5,
        comment: "The most comfortable bed I've ever slept in! The staff went above and beyond to make our anniversary special.",
        stay: "Stayed in Deluxe Room, May 2023",
        avatar: "👩"
      },
      { 
        name: "Michael Chen",
        rating: 5,
        comment: "Exceptional service from check-in to check-out. The rooftop pool has an amazing city view at sunset.",
        stay: "Stayed in Suite, March 2023",
        avatar: "👨"
      },
      { 
        name: "Emma Rodriguez",
        rating: 4,
        comment: "Beautiful property with attention to every detail. The breakfast buffet was outstanding!",
        stay: "Stayed in Standard Room, April 2023",
        avatar: "👩"
      },
      { 
        name: "David Wilson",
        rating: 5,
        comment: "Perfect location for business travelers. The executive lounge was a great place to work and relax.",
        stay: "Stayed in Executive Room, February 2023",
        avatar: "👨"
      },
      { 
        name: "Olivia Martinez",
        rating: 5,
        comment: "The spa treatments were heavenly! We loved the couples massage package. Will definitely return for our next getaway.",
        stay: "Stayed in Deluxe Room, January 2024",
        avatar: "👩"
      },
      { 
        name: "James Thompson",
        rating: 5,
        comment: "Impeccable cleanliness and the concierge gave us fantastic restaurant recommendations. Made our vacation perfect!",
        stay: "Stayed in Suite, December 2023",
        avatar: "👨"
      }
    ].map((testimonial, index) => (
      <motion.div
        key={index}
        className="testimonial-card"
        variants={itemVariants}
        whileHover={{ 
          y: -5,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="testimonial-header">
          <span className="testimonial-avatar">{testimonial.avatar}</span>
          <div>
            <h4>{testimonial.name}</h4>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < testimonial.rating ? "star filled" : "star"}>★</span>
              ))}
            </div>
          </div>
        </div>
        <p className="testimonial-comment">"{testimonial.comment}"</p>
        <p className="testimonial-stay">{testimonial.stay}</p>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/rooms">Rooms</Link></li>
              <li><Link to="/services">Services</Link></li>
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