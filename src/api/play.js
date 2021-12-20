import api from '.';

export const getCorrespondingMap = async (coordinate) => {
  try {
    const res = await api.get('/map', { params: coordinate });
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};
