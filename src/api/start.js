import api from '.';

export const startGame = async () => {
  return api.get('/start').then((res) => res.data);
};

export const restartGame = async () => {
  return api.get('/start').then((res) => res.data);
};
