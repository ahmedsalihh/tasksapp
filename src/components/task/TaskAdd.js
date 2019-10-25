import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class AddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
  }
  static navigationOptions = {
    headerTitleAllowFontScaling: false,
    title: 'Create Task',
  };

  placeSubmitHandler = () => {
    if (this.state.taskName.trim() === '') {
      return;
    }
    try {
      this.props.add({name: this.state.taskName});
      this.setState({taskName: ''});
    } catch (error) {
      console.log('Unknown Exception');
    }
  };

  onInputChange = value => {
    this.setState({
      taskName: value,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.taskName}
          placeholder="Task"
          value={this.state.taskName}
          onChangeText={this.onInputChange}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.placeSubmitHandler}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: '#fff',
  },
  taskName: {
    paddingBottom: '10%',
    fontSize: 40,
  },
  addButton: {
    backgroundColor: '#e93766',
    height: '10%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
  },
});
