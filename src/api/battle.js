import axios from 'axios';
import { SERVER_URL } from '../config';

export const getAttackResult = (turn, monsterName, monsterHp) => {
  const cookie = localStorage.getItem('accessToken');

  return axios({
    method: 'get',
    baseURL: SERVER_URL,
    url: `/battle/${turn}/${monsterName}${monsterHp ? `/${monsterHp}` : ''}`,
    headers: {
      Authorization: `Bearer ${cookie}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
};

export const escape = () => {
  const cookie = localStorage.getItem('accessToken');

  return axios({
    method: 'get',
    baseURL: SERVER_URL,
    url: `/escape`,
    headers: {
      Authorization: `Bearer ${cookie}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.data);
};
