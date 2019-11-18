import {
  LIST_GROUPS,
  LIST_GROUPS_REJECTED,
  ADD_GROUP,
  ADD_GROUP_REJECTED,
  DELETE_GROUP,
  DELETE_GROUP_REJECTED,
  SET_SELECTED_ITEM_ID,
  UPDATE_TASK,
  UPDATE_TASK_REJECTED,
  ADD_TASK,
  ADD_TASK_FAIL,
} from './types';
import axios from 'axios';

export const listGroups = () => {
  return dispatch => {
    axios
      .get('http://192.168.0.10:5000/api/v1/groups')
      .then(res => {
        dispatch({ type: LIST_GROUPS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: LIST_GROUPS_REJECTED, payload: err });
      });
  };
};

export const addGroup = ({ group }) => {
  return dispatch => {
    axios
      .post('http://192.168.0.10:5000/api/v1/groups', group)
      .then(res => {
        dispatch({ type: ADD_GROUP, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: ADD_GROUP_REJECTED, payload: err });
      });
  };
};

export const deleteGroup = id => {
  return dispatch => {
    axios
      .delete(`http://192.168.0.10:5000/api/v1/groups/${id}`)
      .then(res => {
        dispatch({ type: DELETE_GROUP, payload: res.data.message });
      })
      .catch(err => {
        dispatch({ type: DELETE_GROUP_REJECTED, payload: err });
      });
  };
};

export const setChecked = ({ task, groupId }) => {
  return dispatch => {
    axios
      .put(`http://192.168.0.10:5000/api/v1/updateTask/${groupId}`, { task })
      .then(res => {
        dispatch({ type: UPDATE_TASK, payload: res.data.result });
      })
      .catch(err => {
        dispatch({ type: UPDATE_TASK_REJECTED, payload: err });
      });
  };
};

export const addTaskToGroup = ({ task, groupId }) => {
  return dispatch => {
    axios
      .put(`http://192.168.0.10:5000/api/v1/addTask/${groupId}`, { task })
      .then(res => {
        dispatch({ type: ADD_TASK, payload: { group: res.data.result } });
      })
      .catch(err => {
        dispatch({ type: ADD_TASK_FAIL, payload: err });
      });
  };
};

export const setSelectedItemId = ({ selectedItemId }) => {
  return dispatch => {
    dispatch({ type: SET_SELECTED_ITEM_ID, payload: selectedItemId });
  };
};
