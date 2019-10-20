import React from 'react';
import {ScrollView, FlatList, View} from 'react-native';

import ListItem from '../components/ListItem';

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
          <ListItem task={task.item} handleDelete={this.handleDelete} />
        )}
      />
    );
  };

  render() {
    return (
      <ScrollView>
        <View>{this.placesOutput()}</View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
