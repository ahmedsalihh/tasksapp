import {connect} from 'react-redux';
import GroupList from '../components/GroupList';

import {listGroups} from '../redux/actions/group';

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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupList);
