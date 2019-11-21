import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

import TaskCard from './TaskCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addGroupButton: {
    backgroundColor: '#cf1748',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 55,
  },
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
          group =>
            group._id === this.props.groups.selectedItemId,
        ).taskList,
      ) ===
      JSON.stringify(
        this.props.groups.groups.find(
          group =>
            group._id === this.props.groups.selectedItemId,
        ).taskList,
      )
    ) {
      this.props.listGroups();
    }
  }

  setChecked = ({ task }) => {
    this.props.setChecked({
      task,
      groupId: this.props.groups.selectedItemId,
    });
  };

  handleAddTaskClick = () => {
    this.props.navigation.navigate('Task');
  };

  render() {
    const { groups, selectedItemId } = this.props.groups;
    const group = groups.find(
      item => item._id === selectedItemId,
    );
    const { taskList } = group;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <FlatList
            data={taskList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={task => (
              <TaskCard
                task={task.item}
                setChecked={this.setChecked}
              />
            )}
          />
        </SafeAreaView>
        <Provider>
          <Portal>
            <FAB.Group
              fabStyle={styles.addGroupButton}
              open={this.state.open}
              icon={'plus'}
              actions={[
                {
                  icon: 'plus',
                  style: { backgroundColor: '#cf1748' },
                  label: 'Add Task',
                  onPress: this.handleAddTaskClick,
                },
                {
                  icon: 'account',
                  style: { backgroundColor: '#cf1748' },
                  label: 'Add User',
                  onPress: () =>
                    console.log('Pressed star'),
                },
              ]}
              onStateChange={({ open }) =>
                this.setState({ open })
              }
              onPress={() => {
                if (this.state.open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
        </Provider>
      </View>
    );
  }
}

export default TaskList;
