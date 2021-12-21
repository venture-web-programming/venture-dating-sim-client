import axios from 'axios';
import { SERVER_URL } from '../config';

export const move = (coordinate) => {
  const { x, y } = coordinate;
  const cookie = localStorage.getItem('accessToken');

  return axios({
    method: 'post',
    baseURL: SERVER_URL,
    url: `/move?rowIndex=${x}&columnIndex=${y}`,
    headers: {
      Authorization: `Bearer ${cookie}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
};
