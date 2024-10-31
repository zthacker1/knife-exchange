import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user?.firstName || 'User'}!</h1>
      <p>This is the Knife Exchange platform, where you can view and manage your knife listings.</p>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/profile">
          <button style={{ margin: '10px' }}>Go to Profile</button>
        </Link>
        <Link to="/listings">
          <button style={{ margin: '10px' }}>View All Listings</button>
        </Link>
        {user?.isAdmin && (
          <Link to="/users">
            <button style={{ margin: '10px' }}>View All Users (Admin)</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
