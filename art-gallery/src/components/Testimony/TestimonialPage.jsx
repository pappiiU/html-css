import React from 'react';
import './TestimonialPage.css';

const TestimonialPage = () => {
  const testimonials = [
    {
      name: "JOHN D.",
      quote: "Captivated by Ady's stunning digital art. Purchased piece, blown away by detail and print quality. Highly recommend for unique, beautiful collection additions.",
      image: "https://dashboard.codeparrot.ai/api/assets/Z3BPjIDQVAQjI3Xt"
    },
    {
      name: "SARAH M.",
      quote: "Ady's digital art exceeds expectations, intricate details, vivid colors breathtaking. Commissioned custom piece, not disappointed. Highly recommend for high-quality digital art.",
      image: "https://dashboard.codeparrot.ai/api/assets/Z3BPjIDQVAQjI3Xu"
    },
    {
      name: "MICHAEL P.",
      quote: "Found unique art for home office at Art of Ady, unlike anything seen before. Impressive attention to detail, use of color. Purchased print, received compliments. Highly recommend for special, one-of-a-kind pieces.",
      image: "https://dashboard.codeparrot.ai/api/assets/Z3BPjIDQVAQjI3Xv"
    }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      {/* <nav className="header">
        <div className="logo">Art of Ady</div>
        <div className="nav-links">
          <a href="/gallery" className="nav-link">Gallery</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/testimonials" className="nav-link">Testimonials</a>
          <a href="/shop" className="nav-link">Shop</a>
        </div>
        <button className="contact-button" onClick={() => console.log('Contact button clicked')}>
          Contact Artist
        </button>
      </nav> */}

      {/* Main Title */}
      <div className="main-title-container">
        <h1 className='main-title'> Testimonial </h1>
        <p className="main-description">
          Discover why art lovers and collectors can't get enough of Art of Ady. Read what satisfied customers have to say about Ady's stunning digital creations and why they highly recommend Ady's art to others.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="image-wrapper">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3 className="name">{testimonial.name}</h3>
            <p className="quote">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
