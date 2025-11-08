import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <br /><br />
        <input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <br /><br />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}
