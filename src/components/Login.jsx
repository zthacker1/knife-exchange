import React, { useState } from 'react';
import { loginUser, setAuthToken } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setAuthToken(token);
      setUser(response.data.user); // Update user state with response data if available
      navigate('/'); // Redirect to home or profile after login
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />

        <button type="submit" style={{ marginTop: '20px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
