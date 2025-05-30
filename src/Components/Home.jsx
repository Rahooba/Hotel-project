import React from 'react';
import './Home.css';
import standardroom from "../Images/standardroom.webp"
import DeluxeRoom from "../Images/Deluxe Room.jpeg"
import Suite from "../Images/Suite.webp"
const Home = () => {
  return (
    <div className="hotel-homepage">
    
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Experience Luxury Accommodation</h1>
          <p>Luxury Hotel provides unforgettable stays with premium services and care</p>
          <button className="cta-button">Explore Rooms</button>
        </div>
      </header>

      {/* Booking Search Section */}
      <section className="booking-search">
        <div className="search-container">
          <h2>Check Room Availability</h2>
          <form className="search-form">
            <div className="form-group">
              <label>Check-in Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Check-out Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Guests</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <button type="submit" className="search-btn">Search</button>
          </form>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="room-types">
        <h2>Our Room Types</h2>
        <div className="rooms-grid">
          <div className="room-card">
            <img src={standardroom} alt="Standard Room" />
            <h3>Standard Room</h3>
            <p>Comfortable 25 m² room with all basic amenities</p>
            <button className="room-btn">Book Now</button>
          </div>
          <div className="room-card">
            <img src={DeluxeRoom} alt="Deluxe Room" />
            <h3>Deluxe Room</h3>
            <p>Luxurious 35 m² room with great view and premium services</p>
            <button className="room-btn">Book Now</button>
          </div>
          <div className="room-card">
            <img src={Suite} alt="Suite" />
            <h3>Suite</h3>
            <p>Elegant 50 m² suite with living area and VIP services</p>
            <button className="room-btn">Book Now</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="icon-restaurant"></i>
            <h3>Fine Dining</h3>
            <p>Wide selection of international and local cuisine</p>
          </div>
          <div className="service-card">
            <i className="icon-spa"></i>
            <h3>Spa & Massage</h3>
            <p>Relaxation and beauty treatments to highest standards</p>
          </div>
          <div className="service-card">
            <i className="icon-pool"></i>
            <h3>Swimming Pool</h3>
            <p>Indoor and outdoor pools with relaxation area</p>
          </div>
          <div className="service-card">
            <i className="icon-gym"></i>
            <h3>Fitness Center</h3>
            <p>Modern equipment with professional trainers</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hotel-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Luxury Hotel</h3>
            <p>Premium accommodation experience in the city</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#rooms">Rooms</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Address: City Center Street, Downtown</p>
            <p>Phone: +1 234 567 8900</p>
            <p>Email: info@luxuryhotel.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;