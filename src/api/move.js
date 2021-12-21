import api from '.';

export const move = (coordinate) => {
  const { x, y } = coordinate;
  return api.post(`/move?rowIndex=${x}&columnIndex=${y}`).then((res) => res.data);
};
