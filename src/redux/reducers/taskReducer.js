import {LIST_TASKS, ADD_TASK, DELETE_TASK} from '../actions/types';

export default (state = {fetched: false, tasks: []}, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newList = state.tasks;
      newList.push(action.payload);
      return {...state, tasks: newList};
    case DELETE_TASK:
      return {...state, tasks: state.filter((data, i) => i !== action.id)};
    case LIST_TASKS:
      return {...state, fetched: true, tasks: action.payload};
    default:
      return state;
  }
};
