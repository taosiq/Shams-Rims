import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h2 className="footer-logo">SHAMS RIMS</h2>
              <p className="footer-desc">Specializing in painting and repair of rims and calipers. We provide mobile services, oxidized wheels refinishing, and custom color options.</p>
              <div className="footer-contact">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>4601 C ST BARNABAS RD<br />TEMPLE HILLS, MD 20748</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <span><a href="tel:5713070308">(571) 307-0308</a></span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span><a href="mailto:shams.rims@gmail.com">shams.rims@gmail.com</a></span>
                </div>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-services">
              <h3>Our Services</h3>
              <ul>
                <li><Link to="/services">Mobile Repair</Link></li>
                <li><Link to="/services">Oxidized Wheels Refinishing</Link></li>
                <li><Link to="/services">Custom Color</Link></li>
                <li><Link to="/services">Caliper Painting</Link></li>
              </ul>
            </div>
            
            <div className="footer-hours">
              <h3>Business Hours</h3>
              <ul className="hours-list">
                <li>
                  <span className="day">Monday - Friday:</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span className="day">Saturday:</span>
                  <span className="time">10:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span className="day">Sunday:</span>
                  <span className="time">Closed</span>
                </li>
              </ul>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-yelp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Shams Rims. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 