import {LIST_TASKS, ADD_TASK, DELETE_TASK} from './types';
import axios from 'axios';

export const tasks = () => {
  return dispatch => {
    axios
      .get('http://192.168.0.1:5000/api/v1/tasks')
      .then(res => {
        dispatch({type: LIST_TASKS, payload: res.data.data});
      })
      .catch(err => {
        dispatch({type: 'FETCH_TASKS_REJECTED', payload: err});
      });
  };
};

export const addTasks = task => {
  return dispatch => {
    axios
      .post('http://192.168.0.1:5000/api/v1/tasks', task)
      .then(res => {
        dispatch({type: ADD_TASK, payload: res.data.data});
      })
      .catch(err => {
        dispatch({type: 'FETCH_TASKS_REJECTED', payload: err});
      });
  };
};

export const deleteTask = id => {
  return dispatch => {
    axios
      .delete(`http://192.168.0.1:5000/api/v1/tasks/${id}`)
      .then(res => {
        dispatch({type: DELETE_TASK, payload: res.data.message});
      })
      .catch(err => {
        dispatch({type: 'DELETE_TASKS_REJECTED', payload: err});
      });
  };
};
