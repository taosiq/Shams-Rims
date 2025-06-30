import React from 'react';

function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h1>About Shams Rims</h1>
          <p className="lead">Your Trusted Partner for Premium Automotive Rims</p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <div className="bg-light" style={{height: "400px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div className="text-center text-secondary">Company Image</div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Shams Rims has been dedicated to providing high-quality automotive rims and accessories to enthusiasts and everyday drivers alike. What started as a small passion project has grown into one of the most trusted names in the automotive accessory industry.
          </p>
          <p>
            Our journey began when our founder, a car enthusiast himself, recognized the need for premium quality rims that are both stylish and durable. With this vision in mind, Shams Rims was born, bringing together a team of experts who share the same passion for automobiles.
          </p>
          <p>
            Today, we pride ourselves on offering a wide range of products that cater to various preferences and vehicle types, from sports cars to off-road vehicles and everything in between.
          </p>
        </div>
      </div>
      
      {/* Our Mission Section */}
      <div className="row mb-5 bg-light py-5">
        <div className="col-lg-12 text-center">
          <h2 className="mb-4">Our Mission</h2>
          <p className="lead">
            At Shams Rims, our mission is to enhance the driving experience through quality, innovation, and exceptional customer service.
          </p>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card border-0 bg-light h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Quality</h5>
                  <p className="card-text">We are committed to providing products that meet the highest standards of quality and durability.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-light h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Innovation</h5>
                  <p className="card-text">We continuously strive to innovate and improve our products to meet the evolving needs of our customers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-light h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Customer Service</h5>
                  <p className="card-text">We believe in building lasting relationships with our customers by providing exceptional service and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="row mb-5">
        <div className="col-lg-12 text-center mb-4">
          <h2>Our Team</h2>
          <p className="lead">Meet the passionate individuals behind Shams Rims</p>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="bg-light" style={{height: "250px", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <div className="text-center text-secondary">Team Member Image</div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">John Smith</h5>
              <p className="card-text text-muted">Founder & CEO</p>
              <p className="card-text">Car enthusiast with over 15 years of experience in the automotive industry.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="bg-light" style={{height: "250px", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <div className="text-center text-secondary">Team Member Image</div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Sarah Johnson</h5>
              <p className="card-text text-muted">Design Director</p>
              <p className="card-text">Creative mind behind our innovative rim designs with a background in industrial design.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="bg-light" style={{height: "250px", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <div className="text-center text-secondary">Team Member Image</div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Michael Chen</h5>
              <p className="card-text text-muted">Technical Expert</p>
              <p className="card-text">Automotive engineer ensuring all our products meet strict quality and safety standards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 