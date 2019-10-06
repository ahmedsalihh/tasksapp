import {SAVE_USER, CLEAN_USER} from '../actions/types';

const defaultState = {
  user: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {...state, ...action.payload};
    case CLEAN_USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
