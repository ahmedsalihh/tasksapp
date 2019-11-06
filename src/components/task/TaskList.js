import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import TaskCard from './TaskCard';

class TaskList extends React.Component {
  static navigationOptions = {
    title: 'Task List',
  };

  setChecked = ({task}) => {
    this.props.setChecked({task, groupId: this.props.groups.selectedItemId});
  };

  render() {
    const {groups, selectedItemId} = this.props.groups;
    const group = groups.find(item => item._id === selectedItemId);
    const {taskList} = group;
    return (
      <SafeAreaView>
        <FlatList
          data={taskList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={task => (
            <TaskCard task={task.item} setChecked={this.setChecked} />
          )}
        />
      </SafeAreaView>
    );
  }
}

export default TaskList;
