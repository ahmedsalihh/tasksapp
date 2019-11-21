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
  ADD_TASK,
  ADD_TASK_FAIL,
} from '../actions/types';

export default (
  state = { groups: [], selectedItemId: '' },
  action,
) => {
  switch (action.type) {
    case ADD_GROUP:
      const newList = state.groups;
      newList.push(action.payload);
      return { ...state, groups: newList };
    case DELETE_GROUP:
      return {
        ...state,
        groups: state.filter((data, i) => i !== action.id),
      };
    case LIST_GROUPS:
      return { ...state, groups: action.payload };
    case SET_SELECTED_ITEM_ID:
      return { ...state, selectedItemId: action.payload };
    case SELECTED_GROUP_TASKS:
      return { ...state, groups: action.payload };
    case UPDATE_TASK:
      const { groups, selectedItemId } = state;
      const newGroup = groups.map(group => {
        if (group._id === selectedItemId) {
          return action.payload;
        } else {
          return group;
        }
      });
      return { ...state, groups: newGroup };
    case UPDATE_TASK_REJECTED:
      return { ...state, ...action.payload };
    case ADD_TASK:
      const { groups, selectedItemId } = state;
      const newGroup = groups.map(group => {
        if (group._id === selectedItemId) {
          return action.payload;
        } else {
          return group;
        }
      });
      return { ...state, groups: newGroup };
    case ADD_TASK_FAIL:
      return {
        ...state,
        fetched: false,
        groups: action.payload,
      };
    default:
      return state;
  }
};
