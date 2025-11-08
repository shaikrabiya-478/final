import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#4caf50', padding: '10px' }}>
      <Link to="/home" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
        Products
      </Link>
    </nav>
  );
}
