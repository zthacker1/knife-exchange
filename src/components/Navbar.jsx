import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear the token from local storage
    setUser(null);  // Clear the user state
    navigate('/login');  // Redirect to login page
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f8f9fa' }}>
      <Link to="/profile">Profile</Link>
      <Link to="/listings">All Listings</Link>
      <button onClick={handleLogout} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'blue' }}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
