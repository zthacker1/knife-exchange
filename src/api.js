import axios from 'axios';

// Set base URL
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

// Authenticated requests
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// CRUD API functions
export const fetchProfile = () => api.get('/users/profile');
export const fetchListings = () => api.get('/knives');
export const createListing = (data) => api.post('/knives', data);
export const updateListing = (id, data) => api.put(`/knives/${id}`, data);
export const deleteListing = (id) => api.delete(`/knives/${id}`);
export const fetchUsers = () => api.get('/users'); // Admin only
