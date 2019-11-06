import {
  LIST_GROUPS,
  LIST_GROUPS_REJECTED,
  ADD_GROUP,
  ADD_GROUP_REJECTED,
  DELETE_GROUP,
  DELETE_GROUP_REJECTED,
  SET_SELECTED_ITEM_ID,
  SELECTED_GROUP_TASKS,
  UPDATE_TASK,
  UPDATE_TASK_REJECTED,
} from '../actions/types';

export default (state = {groups: [], selectedItemId: ''}, action) => {
  switch (action.type) {
    case ADD_GROUP:
      const newList = state.groups;
      newList.push(action.payload);
      return {...state, groups: newList};
    case DELETE_GROUP:
      return {...state, groups: state.filter((data, i) => i !== action.id)};
    case LIST_GROUPS:
      return {...state, fetched: true, groups: action.payload};
    case SET_SELECTED_ITEM_ID:
      return {...state, fetched: true, selectedItemId: action.payload};
    case SELECTED_GROUP_TASKS:
      return {...state, fetched: true, groups: action.payload};
    case UPDATE_TASK:
      return {...state, fetched: true, ...action.payload};
    case UPDATE_TASK_REJECTED:
      return {...state, fetched: true, ...action.payload};
    default:
      return state;
  }
};
