import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'react-native-firebase';

export default class Home extends React.Component {
  state = {currentUser: null};

  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
  }
  handleLogout = () => {
    firebase.auth().signOut();
    this.setState({currentUser: null});
  };

  render() {
    const {currentUser} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>
          {' '}
          Hi
          <Text style={styles.emailText}>
            {currentUser && currentUser.email}!
          </Text>
        </Text>
        <Button title="Logout" color="#e93766" onPress={this.handleLogout}>
          Logout
        </Button>
      </View>
    );
  }
}
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
