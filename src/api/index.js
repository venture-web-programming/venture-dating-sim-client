import { SERVER_URL } from '../config';
import axios from 'axios';

const api = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('key')}`,
  },
  responseType: 'json',
});

export default api;
