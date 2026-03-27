import React, { useRef } from "react";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import GalleryPage from "./components/Gallery/GalleryPage";
import TestimonialPage from "./components/Testimony/TestimonialPage";
import './App.css';

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Pass scroll functions and refs to HomePage */}
      <HomePage 
        onGalleryClick={() => scrollToSection(galleryRef)} 
        onAboutClick={() => scrollToSection(aboutRef)} 
        onTestimonialClick={() => scrollToSection(testimonialRef)} 
      />

      {/* Sections with refs */}
      <section ref={aboutRef}>
        <AboutPage />
      </section>
      <section ref={galleryRef}>
        <GalleryPage />
      </section>
      <section ref={testimonialRef}>
        <TestimonialPage />
      </section>
    </div>
  );
}

export default App;
