import api from '.';

export const getAttackResult = (turn, monsterName) => {
  return api.get(`/battle/${turn}/${monsterName}`).then((res) => res.data);
};

export const escape = () => {
  return api.get('/escape').then((res) => res.data);
};
