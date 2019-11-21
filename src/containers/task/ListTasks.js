import { connect } from 'react-redux';
import TaskList from '../../components/task/TaskList';

import {
  setChecked,
  listGroups,
} from '../../redux/actions/group';

const mapStateToProps = state => {
  return {
    groups: state.groups,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChecked: ({ task, groupId }) => {
      dispatch(setChecked({ task, groupId }));
    },
    listGroups: () => {
      dispatch(listGroups());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
