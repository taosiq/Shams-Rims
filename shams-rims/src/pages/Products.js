import React, { useState } from 'react';

function Products() {
  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      name: "Sport Alloy Rim - SR01",
      description: "Lightweight alloy rim perfect for sports vehicles",
      price: 299.99,
      category: "sports"
    },
    {
      id: 2,
      name: "Luxury Chrome Rim - LX200",
      description: "Premium chrome finish rim for luxury vehicles",
      price: 399.99,
      category: "luxury"
    },
    {
      id: 3,
      name: "Off-Road Tough Rim - OR450",
      description: "Durable and rugged rim designed for off-road adventures",
      price: 349.99,
      category: "off-road"
    },
    {
      id: 4,
      name: "Classic Vintage Rim - CV100",
      description: "Elegant design inspired by classic cars",
      price: 279.99,
      category: "classic"
    },
    {
      id: 5,
      name: "Performance Racing Rim - PR750",
      description: "High-performance rim for racing enthusiasts",
      price: 449.99,
      category: "sports"
    },
    {
      id: 6,
      name: "SUV All-Terrain Rim - AT500",
      description: "Versatile rim suitable for all terrains",
      price: 329.99,
      category: "off-road"
    }
  ];

  // State for filtering
  const [filter, setFilter] = useState('all');
  
  // Filtered products
  const filteredProducts = filter === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === filter);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Our Products</h1>
      
      {/* Filter Options */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="d-flex justify-content-center">
            <button 
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`btn ${filter === 'sports' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
              onClick={() => setFilter('sports')}
            >
              Sports
            </button>
            <button 
              className={`btn ${filter === 'luxury' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
              onClick={() => setFilter('luxury')}
            >
              Luxury
            </button>
            <button 
              className={`btn ${filter === 'off-road' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
              onClick={() => setFilter('off-road')}
            >
              Off-Road
            </button>
            <button 
              className={`btn ${filter === 'classic' ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
              onClick={() => setFilter('classic')}
            >
              Classic
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Grid */}
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
            <div className="card h-100">
              <div className="bg-light" style={{height: "200px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="text-center text-secondary">Product Image</div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text text-primary fw-bold">${product.price.toFixed(2)}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary">Add to Cart</button>
                  <button className="btn btn-outline-secondary">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center my-5">
          <h3>No products found in this category.</h3>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => setFilter('all')}
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
}

export default Products; 