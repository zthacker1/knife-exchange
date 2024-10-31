// src/api.js
import axios from 'axios';

// Set up axios instance with the base URL for API requests
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

// Function to set the authorization token in the header for authenticated requests
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Auth API functions
export const loginUser = async (credentials) => {
  // POST request to log the user in with provided credentials
  return await api.post('/users/login', credentials);
};

export const registerUser = async (data) => {
  // POST request to register a new user
  return await api.post('/users/register', data);
};

// Profile API function
export const fetchProfile = () => api.get('/users/profile'); // Assuming profile endpoint is /users/profile

// CRUD API functions for listings
export const fetchListings = () => api.get('/knives'); // Get all knife listings
export const createListing = (data) => api.post('/knives', data); // Create a new listing
export const updateListing = (id, data) => api.put(`/knives/${id}`, data); // Update an existing listing
export const deleteListing = (id) => api.delete(`/knives/${id}`); // Delete a listing

// Fetch mods (options for modifying knives)
export const fetchMods = () => api.get('/mods'); // Adjust endpoint if necessary

// Admin API function to fetch all users (if admin-only access is set up)
export const fetchUsers = () => api.get('/users'); // Get all users for admin view
