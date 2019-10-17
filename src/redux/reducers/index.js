import {combineReducers} from 'redux';
import userReducer from './userReducer';
import taskReducer from './taskReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  groups: groupReducer,
  user: userReducer,
});

export default rootReducer;
