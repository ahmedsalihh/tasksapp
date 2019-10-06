import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'react-native-firebase';
import {save, cleanUser} from '../redux/actions/user';

class Home extends React.Component {
  state = {currentUser: null};

  async componentDidMount() {
    const {currentUser: user} = firebase.auth();
    this.props.saveUser({user});
    // this.setState({currentUser});
  }
  handleLogout = () => {
    firebase.auth().signOut();
    this.props.cleanUser();
    // this.setState({currentUser: null});
  };

  render() {
    const {user} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>
          {' '}
          Hi
          <Text style={styles.emailText}>{user && user.email}!</Text>
        </Text>
        <Button title="Logout" color="#e93766" onPress={this.handleLogout}>
          Logout
        </Button>
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
});
