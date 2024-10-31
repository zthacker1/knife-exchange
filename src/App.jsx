// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setAuthToken, fetchProfile } from './api';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Listings from './components/Listings';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      fetchProfile()
        .then((response) => {
          setUser(response.data); // Set user data from the response
        })
        .catch(() => {
          localStorage.removeItem('token');
          setAuthToken(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false); // No token, so loading is complete
    }
  }, []);

  if (loading) return <div>Loading...</div>; // Show a loading state until profile data is fetched

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </Router>
  );
};

export default App;
