import { ACCESS_TOKEN } from '../config';

export const checkHasAccessToken = () => {
  return !!localStorage.getItem('accessToken');
};
