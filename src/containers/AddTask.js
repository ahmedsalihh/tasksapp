import {connect} from 'react-redux';

import TaskAdd from '../components/TaskAdd';

import {addTasks} from '../redux/actions/task';

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: task => {
      dispatch(addTasks(task));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskAdd);
