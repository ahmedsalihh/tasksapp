import {connect} from 'react-redux';
import GroupList from '../components/GroupList';

import {listGroups, setSelectedItemId} from '../redux/actions/group';

const mapStateToProps = state => {
  return {
    groups: state.groups,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    listGroups: () => {
      dispatch(listGroups());
    },
    setSelectedItemId: ({selectedItemId}) => {
      dispatch(setSelectedItemId({selectedItemId}));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupList);
