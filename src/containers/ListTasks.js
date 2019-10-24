import {connect} from 'react-redux';
import TaskList from '../components/TaskList';

import {tasks, deleteTask} from '../redux/actions/task';

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    list: () => {
      dispatch(tasks());
    },
    delete: id => {
      dispatch(deleteTask(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
