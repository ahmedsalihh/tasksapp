import {combineReducers} from 'redux';
import placeReducer from './placeReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  places: placeReducer,
  tasks: taskReducer,
});

export default rootReducer;
