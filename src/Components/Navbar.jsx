import React from 'react'

function Navbar() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="hotel-nav">
        <div className="hotel-logo">Luxury Hotel</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button className="booking-btn">Book Now</button></li>
        </ul>
      </nav>
      </>
  )
}

export default Navbar