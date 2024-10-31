import { useEffect } from 'react';
import { setAuthToken } from '../api';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token');
    setAuthToken(null);
    window.location.href = '/login';
  }, []);

  return null;
};

export default Logout;
