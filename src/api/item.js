import axios from 'axios';
import { SERVER_URL } from '../config';

export const getItem = (itemId) => {
  const cookie = localStorage.getItem('accessToken');

  return axios({
    method: 'get',
    baseURL: SERVER_URL,
    url: `/item/${itemId}`,
    headers: {
      Authorization: `Bearer ${cookie}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
};
