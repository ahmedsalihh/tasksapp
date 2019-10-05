import {connect} from 'react-redux';
import HomeScreen from '../screens/HomeScreen';

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
)(HomeScreen);
