import React from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import firebase from 'react-native-firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
  },
  signUpText: {color: '#e93766', fontSize: 40},
  errorMessage: {color: 'red'},
  login: {color: '#e93766', fontSize: 18},
});

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', errorMessage: null};
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.signUpText}>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Sign Up" color="#e93766" onPress={this.handleSignUp} />
        <View>
          <Text>
            {' '}
            Already have an account?{' '}
            <Text
              onPress={() => this.props.navigation.navigate('login')}
              style={styles.login}>
              {' '}
              Login{' '}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
