import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './BookingPage.css';

const BookingConfirmation = ({ room, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
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
          <h3>Booking Confirmed!</h3>
          <p>Thank you for booking our <strong>{room.title}</strong>.</p>
          <div className="booking-details">
            <p><span>Price:</span> {room.price}</p>
            <p><span>Capacity:</span> {room.capacity} guest{room.capacity !== 1 ? 's' : ''}</p>
          </div>
          <motion.button
            className="close-btn"
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  useEffect(() => {
    if (location.state?.room) {
      setRoom(location.state.room);
      setFormData(prev => ({
        ...prev,
        guests: location.state.room.capacity.toString()
      }));
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      alert('Check-out date must be after check-in date');
      return;
    }
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    navigate('/');
  };

  if (!room) return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Loading room details...</p>
    </div>
  );

  return (
    <>
      <motion.div
        className="booking-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="booking-container">
          <div className="room-info">
            <h2>Book Your Stay</h2>
            <div className="room-image-container">
              <img src={room.img} alt={room.title} />
            </div>
            <div className="room-details">
              <h3>{room.title}</h3>
              <p className="price">{room.price}</p>
              <p className="capacity">{room.capacity} guest{room.capacity !== 1 ? 's' : ''}</p>
              <p className="description">{room.desc}</p>
              <div className="amenities">
                <h4>Room Amenities:</h4>
                <ul>
                  <li>Free WiFi</li>
                  <li>Air Conditioning</li>
                  <li>Flat-screen TV</li>
                  <li>Mini Bar</li>
                  <li>Safe Deposit Box</li>
                  {room.type === 'suite' && <li>Separate Living Area</li>}
                  {room.type === 'deluxe' && <li>Balcony with View</li>}
                </ul>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Your Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label>Check-out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                {[...Array(room.capacity).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Special Requests (Optional)</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="3"
                placeholder="Any special requirements..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Complete Booking
            </button>
          </form>
        </div>
      </motion.div>

      {showConfirmation && (
        <BookingConfirmation 
          room={room} 
          onClose={handleCloseConfirmation} 
        />
      )}
    </>
  );
};

export default BookingPage;