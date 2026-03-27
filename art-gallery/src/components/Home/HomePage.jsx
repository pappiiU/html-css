import React from 'react';
import './HomePage.css';

const HomePage = ({ onGalleryClick, onAboutClick, onTestimonialClick }) => {
  return (
    <div className="home-page">
      <div className="background-images">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z3BDjYDQVAQjI3Xa" alt="Space background 1" className="bg-image" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z3BDjYDQVAQjI3Xb" alt="Space background 2" className="bg-image overlay" />
      </div>
      
      <nav className="top-nav">
        <div className="logo">Art Gallery</div>
        <div className="nav-links">
          <button className="nav-link" onClick={onAboutClick}>About</button>
          <button className="nav-link" onClick={onGalleryClick}>Gallery</button>
          <button className="nav-link" onClick={onTestimonialClick}>Testimonials</button>
          <button className="contact-btn">Contact Artist</button>
        </div>
      </nav>

      <main className="main-content">
        <h1 className="title">Explore the World of Digital Art</h1>
        <button className="gallery-btn" onClick={onGalleryClick}>
          View Gallery
        </button>
      </main>
    </div>
  );
};

export default HomePage;
