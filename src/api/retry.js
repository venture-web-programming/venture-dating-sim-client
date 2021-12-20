import api from '.';

export const retry = async (userInfo = {}) => {
  try {
    const res = await api.post('/retry/:turn', { data: userInfo });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
