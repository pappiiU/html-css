import React from 'react';
import './GalleryPage.css';




  
const GallerySection = ({ artworks = defaultArtworks }) => {
  return (
     <section className="gallery-section">
         <div className="nav-left"><span className="logo">GALLERY SECTION</span></div>
      <div className="gallery-grid">
        {artworks.map((artwork, index) => (
          <div key={index} className="gallery-item">
            <div className="artwork-container">
              <img src={artwork.image} alt={artwork.title} className="artwork-image" />
            </div>
            <h3 className="artwork-title">{artwork.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};


const defaultArtworks = [
  {
    title: "3D Astronaut",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdA"
  },
  {
    title: "Galactic Landscape",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdB"
  },
  {
    title: "Cosmic Vista",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdC"
  },
  {
    title: "Cyberpunk Neon Sports Car",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdD"
  },
  {
    title: "Magical Girl Transformation",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdE"
  },
  {
    title: "Neon Futuristic Sports Car",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdF"
  },
  {
    title: "Enchanted Forest",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdG"
  },
  {
    title: "Futuristic Nostalgia",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdH"
  },
  {
    title: "Surreal Dreamscape",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdI"
  },
  {
    title: "Isometric Pixel Art",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdJ"
  },
  {
    title: "Eco-friendly Metropolis",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdK"
  },
  {
    title: "Retro Futurism",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdL"
  },
  {
    title: "Sophisticated Lady",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdM"
  },
  {
    title: "Brunette Beauty",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdN"
  },
  {
    title: "Alluring Auburn",
    image: "https://dashboard.codeparrot.ai/api/assets/Z3BLrp_bRV0pnkdO"
  }
];

export default GallerySection;

