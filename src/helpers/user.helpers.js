import { STORAGE_USER, STORAGE_TOKEN } from '@constants/storage.constants';

export const getAuthToken = () => localStorage.getItem('STORAGE_TOKEN');
export const getUser = () => {
  let user = localStorage.getItem('STORAGE_USER');
  if (!user) {
    return null;
  }
  user = JSON.parse(user);
  if (!user) {
    return null;
  }
  return user;
};
export const getAccountPhoto = () => {
  let user = localStorage.getItem('STORAGE_USER');
  if (!user) {
    return null;
  }
  user = JSON.parse(user);
  if (!user || !user.avatar) {
    return null;
  }
  return user.avatar;
};
