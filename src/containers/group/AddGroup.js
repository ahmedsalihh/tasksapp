import {connect} from 'react-redux';

import GroupAdd from '../../components/group/GroupAdd';

import {addGroup} from '../../redux/actions/group';

const mapStateToProps = state => {
  return {
    group: state.groups,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addGroup: ({group}) => {
      dispatch(addGroup({group}));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupAdd);
