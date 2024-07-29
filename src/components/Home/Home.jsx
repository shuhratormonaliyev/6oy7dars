import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get('https://cars-pagination.onrender.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    axios.get(`https://cars-pagination.onrender.com/products/category?category=${selectedCategory}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching category products:', error));
  };

  return (
    <div className="home">
      <h1>Product List</h1>
      <select onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="средний">Средний</option>
        {}
      </select>
      <div className="product-cards">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} className="card-img" />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <Link to={`/details/${product.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
