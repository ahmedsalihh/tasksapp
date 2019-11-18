import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

import TaskCard from './TaskCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addGroupButton: {
    borderRadius: 400,
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 5,
    right: 8,
    backgroundColor: '#cf1748',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addGroupButtonText: { color: 'white', fontSize: 50 },
});

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  static navigationOptions = {
    title: 'Task List',
  };

  componentDidUpdate(prevProps) {
    if (
      !JSON.stringify(
        prevProps.groups.groups.find(
          group => group._id === this.props.groups.selectedItemId,
        ).taskList,
      ) ===
      JSON.stringify(
        this.props.groups.groups.find(
          group => group._id === this.props.groups.selectedItemId,
        ).taskList,
      )
    ) {
      this.props.listGroups();
    }
  }

  setChecked = ({ task }) => {
    this.props.setChecked({ task, groupId: this.props.groups.selectedItemId });
  };

  handleAddTaskClick = () => {
    this.props.navigation.navigate('Task');
  };

  render() {
    const { groups, selectedItemId } = this.props.groups;
    const group = groups.find(item => item._id === selectedItemId);
    const { taskList } = group;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            data={taskList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={task => (
              <TaskCard task={task.item} setChecked={this.setChecked} />
            )}
          />
        </SafeAreaView>
        <Provider>
          <Portal>
            <FAB.Group
              open={this.state.open}
              icon={this.state.open ? 'today' : 'add'}
              actions={[
                {
                  icon: 'add',
                  label: 'Add Task',
                  onPress: () => this.handleAddTaskClick,
                },
                {
                  icon: 'plus',
                  label: 'Star',
                  onPress: () => console.log('Pressed star'),
                },
              ]}
              onStateChange={({ open }) => this.setState({ open })}
              onPress={() => {
                if (this.state.open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
        </Provider>
        {/* <TouchableOpacity
          style={styles.addGroupButton}
          onPress={this.handleAddTaskClick}>
          <Text style={styles.addGroupButtonText}>+</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default TaskList;
