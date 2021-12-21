import { SERVER_URL } from '../config';
import axios from 'axios';

const api = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

export const signup = async (userInfo = {}) => {
  try {
    const res = await api.post('/signup', userInfo);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const login = async (userInfo = {}) => {
  try {
    const res = await api.post('/login', userInfo);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
