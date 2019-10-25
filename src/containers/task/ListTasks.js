import {connect} from 'react-redux';
import TaskList from '../../components/task/TaskList';

import {deleteTask} from '../../redux/actions/task';

const mapStateToProps = state => {
  return {
    groups: state.groups,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: id => {
      dispatch(deleteTask(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
