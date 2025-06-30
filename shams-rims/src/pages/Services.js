import React from 'react';
import caliperPaintingImg from '../caliper paint 1.jpg';
import customColorImg from '../custom-color-pic-1.jpg';
import mobileRepairImg from '../newrims1.jpg';
import oxidizedWheelImg from '../OXIDIZED-WHEEL-1.jpg';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      title: "Mobile Repair",
      description: "Our mobile repair service brings our expertise directly to you. Whether you need a quick fix or a complete rim restoration, our fully equipped mobile unit can handle it all without you having to leave your location.",
      features: [
        "On-site rim repair and restoration",
        "Curb damage repair",
        "Scratch and scuff removal",
        "Convenient scheduling",
        "No need to remove wheels from vehicle"
      ],
      icon: "fa-tools",
      image: mobileRepairImg
    },
    {
      id: 2,
      title: "Oxidized Wheels Refinishing",
      description: "Restore your oxidized and corroded wheels to their original shine with our specialized refinishing service. We use industry-leading techniques and materials to bring new life to tired, oxidized wheels.",
      features: [
        "Complete surface restoration",
        "Corrosion treatment",
        "Multi-stage polishing process",
        "Protective clear coat application",
        "Long-lasting finish"
      ],
      icon: "fa-spray-can",
      image: oxidizedWheelImg
    },
    {
      id: 3,
      title: "Custom Color",
      description: "Make your vehicle stand out with our custom color service. Choose from a wide range of colors and finishes to personalize your rims and create a unique look that reflects your style.",
      features: [
        "Unlimited color options",
        "Matte, gloss, or satin finishes",
        "Metallic and pearl effects",
        "Custom color matching",
        "Two-tone and accent designs"
      ],
      icon: "fa-palette",
      image: customColorImg
    },
    {
      id: 4,
      title: "Caliper Painting",
      description: "Enhance your vehicle's appearance with professionally painted calipers. This small change can dramatically improve the overall look of your wheels and add a sporty, premium touch to your car.",
      features: [
        "High-temperature resistant paint",
        "Multiple color options",
        "Logo application available",
        "Complete cleaning and prep",
        "Quick turnaround time"
      ],
      icon: "fa-car",
      image: caliperPaintingImg
    }
  ];

  return (
    <div className="services-page">
      {/* Services Header */}
      <div className="services-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Specializing in painting and repair of rims and calipers</p>
        </div>
      </div>

      {/* Services Content */}
      <div className="services-content">
        <div className="container">
          <div className="services-intro">
            <h2>Professional Rim & Caliper Services</h2>
            <p>
              At Shams Rims, we provide comprehensive rim and caliper repair, refinishing, and customization services. 
              Our team of experienced technicians uses the latest technology and premium materials to deliver exceptional results.
              From mobile repairs to custom colors, we have the expertise to transform your wheels.
            </p>
          </div>

          {/* Services List */}
          <div className="services-list">
            {services.map(service => (
              <div className="service-item" key={service.id}>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-details">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    <h4>What we offer:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} className="service-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <p className="process-intro">Our professional rim and caliper services follow a thorough process to ensure the best results:</p>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Inspection & Consultation</h3>
                <p>We thoroughly inspect your rims or calipers and discuss your needs and preferences.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Preparation</h3>
                <p>We clean, strip, and prepare the surface to ensure optimal adhesion and finish.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Repair & Refinishing</h3>
                <p>We repair any damage and apply base coats, custom colors, or finishes as needed.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Quality Control</h3>
                <p>We inspect the finished product to ensure it meets our high standards.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Final Delivery</h3>
                <p>We deliver your beautifully restored rims or calipers, ready to enhance your vehicle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <div className="container">
          <h2>Ready to Transform Your Wheels?</h2>
          <p>Contact us today to schedule a service or get a free quote!</p>
          <div className="cta-buttons">
            <a href="tel:5713070308" className="cta-button">
              <i className="fas fa-phone-alt"></i> Call: (571) 307-0308
            </a>
            <a href="/contact" className="cta-button secondary">
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services; 