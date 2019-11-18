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
      taskDesc: '',
    };
  }
  static navigationOptions = {
    headerTitleAllowFontScaling: false,
    title: 'Create Task',
  };

  taskSubmitHandler = () => {
    const { taskName, taskDesc } = this.state;
    if (taskName.trim() === '') {
      return;
    }
    const task = { name: taskName, desc: taskDesc };
    this.props.addTaskToGroup({ task, groupId: this.props.groupId });
    this.setState({ taskName: '', taskDesc: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.taskName}
          placeholder={'Task Name'}
          value={this.state.taskName}
          onChangeText={val => this.setState({ taskName: val })}
        />
        <TextInput
          style={styles.taskName}
          placeholder={'Task Description'}
          value={this.state.taskDesc}
          onChangeText={val => this.setState({ taskDesc: val })}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.taskSubmitHandler}>
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
