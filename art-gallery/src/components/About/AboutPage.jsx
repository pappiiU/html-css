import React from 'react';
import './AboutPage.css';

const AboutPage = ({
  title = "Get to Know Ady",
  description = "Ady has always had a passion for art and technology. She started experimenting with digital art in her early years and quickly discovered her talent for creating mesmerizing works of art that captivate audiences. Ady honed her skills over the years and has become a renowned digital artist, known for her unique style and imaginative works.",
  artistImage = "https://dashboard.codeparrot.ai/api/assets/Z3BLHYDQVAQjI3Xo",
  onMeetClick = () => console.log("Meet with Ady clicked")
}) => {
  return (
    <div className="about-page">
      <nav className="navigation">
        <div className="nav-left">
          {/* <span className="logo">ABOUT SECTION</span> */}
          <h1 className='main-title'> About Section</h1>
          {/* <span className="nav-item">Gallery</span>
          <span className="nav-item">About</span>
          <span className="nav-item">Testimonials</span>
          <span className="nav-item">Shop</span> */}
        </div>
        
      </nav>

      <div className="content-container">
        <div className="left-content">
          <div className="background-ellipse"></div>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <button className="meet-button" onClick={onMeetClick}>
            Meet with Ady
          </button>
        </div>
        
        <div className="right-content">
          <img 
            src={artistImage} 
            alt="Artist portrait" 
            className="artist-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
