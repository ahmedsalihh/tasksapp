import {SAVE_USER, CLEAN_USER} from './types';

export const save = user => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};

export const cleanUser = () => {
  return {
    type: CLEAN_USER,
    payload: null,
  };
};
