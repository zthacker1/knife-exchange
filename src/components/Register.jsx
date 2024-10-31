import React, { useState } from 'react';
import { registerUser, loginUser, setAuthToken } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = ({ setUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        username: formData.username,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName
      });

      // Automatically log in the user after successful registration
      const loginResponse = await loginUser({
        username: formData.username,
        password: formData.password
      });
      const token = loginResponse.data.token;
      localStorage.setItem('token', token);
      setAuthToken(token);
      setUser(loginResponse.data.user); // Set the user in App state
      navigate('/'); // Redirect to home or profile after registration
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <button type="submit" style={{ marginTop: '20px' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
