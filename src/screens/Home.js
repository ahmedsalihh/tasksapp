import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { FAB } from 'react-native-paper';
import firebase from 'react-native-firebase';
import { save, cleanUser } from '../redux/actions/user';
import ListGroups from '../containers/group/ListGroups';

class Home extends React.Component {
  state = { currentUser: null };

  async componentDidMount() {
    const { currentUser: user } = firebase.auth();
    this.props.saveUser({ user });
  }

  handleLogout = () => {
    firebase.auth().signOut();
    this.props.cleanUser();
  };

  handleAddGroupClick = () => {
    this.props.navigation.navigate('Group');
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ListGroups />
        </SafeAreaView>
        <FAB
          style={styles.fab}
          small
          icon={'plus'}
          onPress={this.handleAddGroupClick}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUser: user => {
      dispatch(save(user));
    },
    cleanUser: () => {
      dispatch(cleanUser());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    height: 55,
    width: 55,
    backgroundColor: '#cf1748',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
