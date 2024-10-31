// src/pages/Home.js
import React from 'react';

const Home = ({ user }) => (
  <div>
    <h1>Welcome {user ? user.username : 'to Knife Exchange!'}</h1>
  </div>
);

export default Home;
