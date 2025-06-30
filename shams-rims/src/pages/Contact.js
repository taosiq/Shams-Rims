import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      {/* Contact Header */}
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </div>
      
      {/* Google Map */}
      <div className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.1554269774513!2d-76.9514412!3d38.832779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7a97d372a28c5%3A0x8306adf3eb5a9a1d!2s4601%20St%20Barnabas%20Rd%20C%2C%20Temple%20Hills%2C%20MD%2020748!5e0!3m2!1sen!2sus!4v1710969876543!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Shams Rims Location"
          ></iframe>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Visit our shop or reach out to us through any of the following methods:</p>
              
              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="details">
                  <h3>Our Location</h3>
                  <p>4601 C ST BARNABAS RD<br />TEMPLE HILLS, MD 20748</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="details">
                  <h3>Phone Number</h3>
                  <p><a href="tel:5713070308">(571) 307-0308</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="details">
                  <h3>Email Address</h3>
                  <p><a href="mailto:shams.rims@gmail.com">shams.rims@gmail.com</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="details">
                  <h3>Business Hours</h3>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
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
            
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p>Have questions or want to schedule a service? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {formSubmitted ? (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll respond to your inquiry shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange} 
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Mobile Repair">Mobile Repair</option>
                      <option value="Oxidized Wheels Refinishing">Oxidized Wheels Refinishing</option>
                      <option value="Custom Color">Custom Color</option>
                      <option value="Caliper Painting">Caliper Painting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 