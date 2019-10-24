import React from 'react';
import {FlatList, View} from 'react-native';
import GroupCard from './GroupCard';
import {withNavigation} from 'react-navigation';

class GroupList extends React.Component {
  static navigationOptions = {
    title: 'Group List',
  };

  componentDidMount() {
    this.props.listGroups();
  }

  componentDidUpdate() {
    this.props.listGroups();
  }

  handleSelectedItem = ({selectedItemId}) => {
    this.props.setSelectedItemId({selectedItemId});
    this.props.navigation.navigate('List');
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.groups.groups}
          keyExtractor={(item, index) => index.toString()}
          renderItem={group => (
            <GroupCard
              handleSelectedItem={this.handleSelectedItem}
              group={group.item}
            />
          )}
        />
      </View>
    );
  }
}

export default withNavigation(GroupList);
