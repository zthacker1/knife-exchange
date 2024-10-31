// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

const Register = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: '', password: '', first_name: '', last_name: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      setUser(response.data.user);
      navigate('/login');
    } catch {
      setError('Registration failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginTop: '10px' }}>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Choose a username"
          style={{ padding: '10px', width: '100%', margin: '5px 0' }}
          required
        />

        <label style={{ display: 'block', marginTop: '10px' }}>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Choose a password"
          style={{ padding: '10px', width: '100%', margin: '5px 0' }}
          required
        />

        <label style={{ display: 'block', marginTop: '10px' }}>First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Enter your first name"
          style={{ padding: '10px', width: '100%', margin: '5px 0' }}
        />

        <label style={{ display: 'block', marginTop: '10px' }}>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Enter your last name"
          style={{ padding: '10px', width: '100%', margin: '5px 0' }}
        />

        <button type="submit" style={{ padding: '10px 20px', marginTop: '20px' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
