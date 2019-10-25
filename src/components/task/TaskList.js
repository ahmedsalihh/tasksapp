import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import TaskCard from './TaskCard';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Task List',
  };

  handleDelete = id => {
    this.props.delete(id);
  };

  placesOutput = () => {
    const {groups, selectedItemId} = this.props.groups;
    const group = groups.find(item => item._id === selectedItemId);
    const {taskList} = group;
    return (
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={task => (
          <TaskCard task={task.item} handleDelete={this.handleDelete} />
        )}
      />
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View>{this.placesOutput()}</View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
