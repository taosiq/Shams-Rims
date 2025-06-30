import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import wheelRefinishing1 from '../WHEEL-refinishing-pic1.jpg';
import wheelRefinishing2 from '../wheelrefinishing-pic2.jpg';
import wheelRefinishing3 from '../WhEEL-refinishing-pic-3.jpg';
import oxidizedWheel1 from '../OXIDIZED-WHEEL-1.jpg';
import oxidizedWheel2 from '../oxidizesd-wheel-2.jpg';
import oxidizedWheel3 from '../oxidized-wheel-3.jpg';
import customColor1 from '../custom-color-pic-1.jpg';
import customColor2 from '../custom-color2.jpg';
import customColor3 from '../custome-colore-3.jpg';
import caliperPaint1 from '../caliper paint 1.jpg';
import caliperPaint3 from '../caliperpaint-pic-3.jpg';

function Home() {
  const galleryImages = [
    { src: wheelRefinishing1, category: 'Wheel Refinishing' },
    { src: oxidizedWheel1, category: 'Oxidized Wheels' },
    { src: customColor1, category: 'Custom Color' },
    { src: caliperPaint1, category: 'Caliper Painting' },
    { src: wheelRefinishing2, category: 'Wheel Refinishing' },
    { src: customColor2, category: 'Custom Color' },
    { src: oxidizedWheel2, category: 'Oxidized Wheels' },
    { src: caliperPaint3, category: 'Caliper Painting' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">SHAMS RIMS</h1>
          <p className="hero-subtitle">Specializing in Painting and Repair of Rims and Calipers</p>
          <Link to="/services" className="cta-button">
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Services Overview */}
      <div className="services-overview">
        <h2>Our Premium Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Mobile Repair</h3>
            <p>Professional rim repair services at your location with our mobile service unit.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-spray-can"></i>
            </div>
            <h3>Oxidized Wheels Refinishing</h3>
            <p>Restore your oxidized and damaged wheels to their original shine and beauty.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Custom Color</h3>
            <p>Choose from a wide range of custom colors and finishes to personalize your rims.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-car"></i>
            </div>
            <h3>Caliper Painting</h3>
            <p>Enhance your vehicle's appearance with our professional caliper painting services.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="container">
          <h2>Our Recent Work</h2>
          <p className="gallery-intro">Browse through some of our latest rim and caliper transformations</p>
          
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image.src} alt={image.category} className="gallery-img" />
                <div className="gallery-overlay">
                  <span className="gallery-category">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-cta">
            <Link to="/services" className="cta-button">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <div className="container">
          <h2>Why Choose Shams Rims</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h3>Expert Technicians</h3>
              <p>Our team consists of trained professionals with years of experience in rim repair and refinishing.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Mobile Service</h3>
              <p>We come to you! Our mobile service saves you time and makes repairs convenient.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <h3>Satisfaction Guaranteed</h3>
              <p>We stand behind our work with a satisfaction guarantee on all services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Restore Your Rims?</h2>
          <p>Contact us today for a free consultation and quote!</p>
          <div className="cta-buttons">
            <a href="tel:5713070308" className="cta-button">
              <i className="fas fa-phone-alt"></i> Call: (571) 307-0308
            </a>
            <Link to="/contact" className="cta-button secondary">
              <i className="fas fa-envelope"></i> Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="quote">
                <i className="fas fa-quote-left"></i>
                <p>Shams Rims completely transformed my oxidized wheels. They look better than new! Highly recommended for quality service.</p>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="client">
                <div className="client-info">
                  <h4>Michael Johnson</h4>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="quote">
                <i className="fas fa-quote-left"></i>
                <p>The custom color work on my rims was exceptional. The attention to detail and quality of the finish exceeded my expectations.</p>
                <i className="fas fa-quote-right"></i>
              </div>
              <div className="client">
                <div className="client-info">
                  <h4>Sarah Williams</h4>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 