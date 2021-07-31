import axios from 'axios';
import authHeader from './authHeader';
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

const getGameData = () => {
  return axios.get(API_BASE_URL + 'game', { headers: authHeader() });
};

export default {
  getGameData
};
