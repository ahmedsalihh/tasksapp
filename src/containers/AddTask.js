import {connect} from 'react-redux';

import AddScreen from '../screens/AddScreen';

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
)(AddScreen);
