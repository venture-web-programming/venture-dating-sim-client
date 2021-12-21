import api from '.';

export const getItem = (itemId) => {
  return api.get(`/item/${itemId}`).then((res) => res.data);
};
