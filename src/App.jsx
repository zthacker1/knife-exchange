import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setAuthToken, fetchProfile } from './api';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Listings from './components/Listings';
import AllUsers from './components/AllUsers';
import Login from './components/Login';
import Logout from './components/Logout'; // Import Logout component
import Register from './components/Register';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      fetchProfile()
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setAuthToken(null);
        });
    }
  }, []);

  return (
    <Router>
      {user && <Navbar user={user} setUser={setUser} />}
      <Routes>
         <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/users" element={<AllUsers />} /> {/* Admin only */}
        <Route path="/logout" element={<Logout />} /> {/* Add Logout route */}
      </Routes>
    </Router>
  );
};

export default App;
