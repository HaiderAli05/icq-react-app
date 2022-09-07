import axios from 'axios';
import { API_BASE_URL } from './config';



// Register a New User
export const register = async (data) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(`${API_BASE_URL}/api/users/signup`, data, config);
  return response;

}

// Login User
export const login = async (data) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(`${API_BASE_URL}/api/users/login`, data, config);
  return response;

}