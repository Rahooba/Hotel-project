import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaWifi, FaSnowflake, FaTv, FaCoffee, FaWineGlassAlt, FaBath, FaConciergeBell } from 'react-icons/fa';
import './Rooms.css';
import standardroom from "../Images/standardroom.webp";
import standardroom1 from "../Images/standardroom1.webp";
import standardroom2 from "../Images/standardroom2.webp";
import DeluxeRoom from "../Images/Deluxe Room.jpeg";
import DeluxeRoom2 from "../Images/Deluxe Room2.jpeg";
import DeluxeRoom3 from "../Images/DeluxeRoom3.webp";
import Suite from "../Images/Suite.webp";
import Suite2 from "../Images/Suite3.webp";
import Suite3 from "../Images/Suite2.webp";
import { useNavigate } from 'react-router-dom'; // Add this import

const Rooms = () => {
  const navigate = useNavigate();
 const handleBookNow = (room) => {
    // Transform room data to match what BookingPage expects
    const bookingRoom = {
      title: room.name,
      img: room.images[0],
      price: room.price,
      capacity: room.capacity, // Extract number from size
      desc: room.description,
      type: room.name.toLowerCase().includes('suite') ? 'suite' : 
            room.name.toLowerCase().includes('deluxe') ? 'deluxe' : 'standard'
    };
    
    navigate('/booking', { state: { room: bookingRoom } });
  };
  const rooms = [
  {
    id: 1,
    name: "Standard Room",
    description: "Our standard rooms offer comfort and functionality with 25m² of carefully designed space. Perfect for business travelers.",
    price: "$120/night",
    capacity: 1, // Explicit capacity
    images: [standardroom, standardroom1, standardroom2],
    features: [
      { icon: <FaWifi />, text: "Free High-Speed WiFi" },
      { icon: <FaSnowflake />, text: "Air Conditioning" },
      { icon: <FaTv />, text: "40\" Smart TV" },
      { icon: <FaCoffee />, text: "Coffee Maker" }
    ],
    amenities: ["Work desk", "Hairdryer", "Safe", "Iron", "Daily housekeeping"],
    size: "25 m²",
    view: "City View"
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Experience luxury in our 35m² deluxe rooms featuring premium amenities and breathtaking views. Ideal for couples.",
    price: "$220/night",
    capacity: 2, // Explicit capacity
    images: [DeluxeRoom, DeluxeRoom2, DeluxeRoom3],
    features: [
      { icon: <FaWifi />, text: "Free Premium WiFi" },
      { icon: <FaWineGlassAlt />, text: "Minibar" },
      { icon: <FaBath />, text: "Premium Bath Amenities" },
      { icon: <FaConciergeBell />, text: "24/7 Room Service" }
    ],
    amenities: ["King Size Bed", "Bathrobe", "Slippers", "Nespresso Machine", "Evening turndown service"],
    size: "35 m²",
    view: "Partial Sea View"
  },
  {
    id: 3,
    name: "Executive Suite",
    description: "Our 50m² suites offer separate living areas and VIP services. Perfect for families or groups.",
    price: "$350/night",
    capacity: 4, // Explicit capacity
    images: [Suite, Suite2, Suite3],
    features: [
      { icon: <FaStar />, text: "VIP Check-in" },
      { icon: <FaConciergeBell />, text: "Personal Concierge" },
      { icon: <FaBath />, text: "Jacuzzi Bath" },
      { icon: <FaWineGlassAlt />, text: "Welcome Champagne" }
    ],
    amenities: ["Separate Living Room", "Dining Area", "Premium Toiletries", "Express Laundry", "Private Check-out"],
    size: "50 m²",
    view: "Panoramic Sea View"
  }
];

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === selectedRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedRoom.images.length - 1 : prev - 1
    );
  };

  const selectRoom = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  return (
    <div className="rooms-page">
      {/* Hero Section */}
      <motion.div 
        className="rooms-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1>Our Rooms & Suites</h1>
          <p>Experience unparalleled luxury in our carefully designed accommodations</p>
        </motion.div>
      </motion.div>

      {/* Room Showcase */}
      <div className="rooms-showcase">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            className="room-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="room-slideshow">
              <img 
                src={room.images[0]} 
                alt={room.name} 
                onClick={() => selectRoom(room)}
              />
              <div className="room-badge">{room.price}</div>
            </div>
            <div className="roomm-info">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <div className="rooms-highlights">
                {room.features.map((feature, i) => (
                  <div key={i} className="highlight">
                    <span className="icon">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <button 
                className="view-details-btn"
                onClick={() => selectRoom(room)}
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Room Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div 
            className="room-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="close-modal"
                onClick={() => setSelectedRoom(null)}
              >
                &times;
              </button>
              
              <div className="modal-gallery">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedRoom.images[currentImageIndex]}
                    alt={selectedRoom.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <button className="gallery-nav prev" onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <button className="gallery-nav next" onClick={nextImage}>
                  <FaChevronRight />
                </button>
                <div className="gallery-dots">
                  {selectedRoom.images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="modal-info">
                <h2>{selectedRoom.name}</h2>
                <p className="price">{selectedRoom.price}</p>
                <p className="description">{selectedRoom.description}</p>
                
                <div className="room-specs">
                  <div>
                    <span>SIZE</span>
                    <strong>{selectedRoom.size}</strong>
                  </div>
                  <div>
                    <span>VIEW</span>
                    <strong>{selectedRoom.view}</strong>
                  </div>
                </div>

                <div className="features-section">
                  <h4>Key Features</h4>
                  <div className="features-grid">
                    {selectedRoom.features.map((feature, i) => (
                      <div key={i} className="feature">
                        <div className="feature-icon">{feature.icon}</div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="amenities-section">
                  <h4>Amenities</h4>
                  <ul>
                    {selectedRoom.amenities.map((amenity, i) => (
                      <li key={i}>{amenity}</li>
                    ))}
                  </ul>
                </div>
 <button 
    className="book-now-btn"
    onClick={() => handleBookNow(selectedRoom)}
  >
    Book Now
  </button>       
     </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Rooms;