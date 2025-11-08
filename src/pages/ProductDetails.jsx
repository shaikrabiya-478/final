import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
