import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Products() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <h4>{p.name}</h4>
            <p>Price: ${p.price}</p>
            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
