import { ACCESS_TOKEN } from '../config';

export const checkHasAccessToken = () => {
  console.log(!!localStorage.getItem(ACCESS_TOKEN));
  return !!localStorage.getItem(ACCESS_TOKEN);
};
