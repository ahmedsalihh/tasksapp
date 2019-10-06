import {combineReducers} from 'redux';
import userReducer from './userReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  user: userReducer,
});

export default rootReducer;
