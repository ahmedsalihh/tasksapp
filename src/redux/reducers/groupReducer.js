import {
  LIST_GROUPS,
  LIST_GROUPS_REJECTED,
  ADD_GROUP,
  ADD_GROUP_REJECTED,
  DELETE_GROUP,
  DELETE_GROUP_REJECTED,
} from '../actions/types';

export default (state = {groups: []}, action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newList = state.groups;
      newList.push(action.payload);
      return {...state, groups: newList};
    case DELETE_GROUP:
      return {...state, groups: state.filter((data, i) => i !== action.id)};
    case LIST_GROUPS:
      return {...state, fetched: true, groups: action.payload};
    default:
      return state;
  }
};
