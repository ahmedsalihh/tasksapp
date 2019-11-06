import {connect} from 'react-redux';
import TaskList from '../../components/task/TaskList';

import {setChecked} from '../../redux/actions/group';

const mapStateToProps = state => {
  return {
    groups: state.groups,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChecked: ({task, groupId}) => {
      dispatch(setChecked({task, groupId}));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
