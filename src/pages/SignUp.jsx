import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert('Account created successfully!');
      navigate('/signin');
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
}
