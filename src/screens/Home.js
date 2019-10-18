import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import {save, cleanUser} from '../redux/actions/user';
import GroupList from '../components/GroupList';

class Home extends React.Component {
  state = {currentUser: null};

  async componentDidMount() {
    const {currentUser: user} = firebase.auth();
    this.props.saveUser({user});
  }

  handleLogout = () => {
    firebase.auth().signOut();
    this.props.cleanUser();
  };

  handleAddGroupClick = () => {
    this.props.navigation.navigate('Group');
  };

  render() {
    const {user} = this.props;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.textContainer}>
          {' '}
          Hi
          <Text style={styles.emailText}>{user && user.email}!</Text>
        </Text>
        <Button title="Logout" color="#e93766" onPress={this.handleLogout}>
          Logout
        </Button> */}
        <GroupList />
        <TouchableOpacity
          style={styles.addGroupButton}
          onPress={this.handleAddGroupClick}>
          <Text style={styles.addGroupButtonText}>+</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 20,
  },
  emailText: {
    color: '#e93766',
    fontSize: 20,
  },
  addGroupButton: {
    borderRadius: 400,
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#e93766',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addGroupButtonText: {color: 'white', fontSize: 50},
});
