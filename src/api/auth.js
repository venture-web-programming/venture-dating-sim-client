import api from '.';

export const signup = async (userInfo = {}) => {
  try {
    const res = await api.post('/signup', { data: userInfo });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
