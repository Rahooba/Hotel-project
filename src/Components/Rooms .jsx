import React, { useState, useEffect } from 'react';
import './Rooms.css';
import { motion } from 'framer-motion';
import standardroom from "../Images/standardroom.webp"
import DeluxeRoom from "../Images/Deluxe Room.jpeg"
import Suite from "../Images/Suite.webp"

const Rooms = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Standard Room",
      description: "Comfortable 25 m² room with all basic amenities",
      price: "$120/night",
      image: "standardroom",
      features: ["Free WiFi", "Air Conditioning", "TV", "Coffee Maker"]
    },
    {
      id: 2,
      name:"DeluxeRoom",
      description: "Luxurious 35 m² room with great view and premium services",
      price: "$220/night",
      image: "./deluxe-room.jpg",
      features: ["Free WiFi", "Air Conditioning", "Minibar", "King Bed", "Bathrobe"]
    },
    {
      id: 3,
      name: "Executive Suite",
      description: "Elegant 50 m² suite with living area and VIP services",
      price: "$350/night",
      image: "Suite",
      features: ["Free WiFi", "Air Conditioning", "Minibar", "Separate Living Area", "Jacuzzi"]
    }
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="rooms-page">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="rooms-header"
      >
        <h1>Our Rooms & Suites</h1>
        <p>Experience unparalleled luxury in our carefully designed accommodations</p>
      </motion.div>

      <div className="rooms-container">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="room-card"
            onClick={() => setSelectedRoom(room)}
          >
            <div className="room-image-container">
              <img src={room.image} alt={room.name} />
              <div className="room-price">{room.price}</div>
            </div>
            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedRoom && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="room-modal"
          onClick={() => setSelectedRoom(null)}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setSelectedRoom(null)}>×</button>
            <img src={selectedRoom.image} alt={selectedRoom.name} />
            <div className="modal-info">
              <h2>{selectedRoom.name}</h2>
              <p className="price">{selectedRoom.price}</p>
              <p>{selectedRoom.description}</p>
              <div className="features">
                <h4>Features:</h4>
                <ul>
                  {selectedRoom.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Rooms;