import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Details = ({ match }) => {
  const [product, setProduct] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    axios.get(`https://cars-pagination.onrender.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="details-img" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {}
    </div>
  );
};

export default Details;
