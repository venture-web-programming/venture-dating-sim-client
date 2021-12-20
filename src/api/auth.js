import api from '.';

export const signup = async (userInfo = {}) => {
  try {
    const res = await api.post('/signup', userInfo);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const login = async (userInfo = {}) => {
  try {
    const res = await api.post('/login', userInfo);
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
