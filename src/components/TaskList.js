import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';

import TaskCard from '../components/TaskCard';

class HomeScreen extends React.Component {
  state = {
    placeName: '',
    places: [],
  };

  static navigationOptions = {
    title: 'Task List',
  };

  componentDidMount() {
    this.props.list();
  }

  componentDidUpdate() {
    this.props.list();
  }

  handleDelete = id => {
    this.props.delete(id);
  };

  placesOutput = () => {
    return (
      <FlatList
        data={this.props.tasks}
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
