import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
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
  loginText: { color: '#e93766', fontSize: 40 },
  errorMessage: { color: 'red' },
  signUpText: { color: '#e93766', fontSize: 18 },
  loginButton: {
    backgroundColor: '#e93766',
    height: '8%',
    justifyContent: 'center',
    borderRadius: 10,
    width: '20%',
  },
  loginButtonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null };
  handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.email,
        this.state.password,
      )
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error =>
        this.setState({ errorMessage: error.message }),
      );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        {this.state.errorMessage && (
          <Text style={styles.errorMessage}>
            {this.state.errorMessage}
          </Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password =>
            this.setState({ password })
          }
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={this.handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View>
          <Text>
            {' '}
            Don't have an account?{' '}
            <Text
              onPress={() =>
                this.props.navigation.navigate('SignUp')
              }
              style={styles.signUpText}>
              {' '}
              Sign Up{' '}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
