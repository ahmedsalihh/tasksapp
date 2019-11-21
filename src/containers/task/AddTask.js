import { connect } from 'react-redux';

import TaskAdd from '../../components/task/TaskAdd';

import { addTaskToGroup } from '../../redux/actions/group';

const mapStateToProps = state => {
  return {
    tasks: state.groups.tasks,
    groupId: state.groups.selectedItemId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTaskToGroup: ({ task, groupId }) => {
      dispatch(addTaskToGroup({ task, groupId }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskAdd);
