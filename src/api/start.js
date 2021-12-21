import axios from 'axios';
import { SERVER_URL } from '../config';

export const startGame = async () => {
  const cookie = localStorage.getItem('accessToken');

  return axios({
    method: 'get',
    baseURL: SERVER_URL,
    url: `/start`,
    headers: {
      Authorization: `Bearer ${cookie}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
};

export const retrySetting = async (turn) => {
  const cookie = localStorage.getItem('accessToken');
  return axios({
    method: 'get',
    baseURL: SERVER_URL,
    url: `/retry/${turn}`,
    headers: {
      Authorization: `Bearer ${cookie}`,
      withCredentials: true,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
};

export const restartGame = async () => {
  return axios({
    method: 'get',
    url: `/restart`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
};
