import React from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import GroupCard from './GroupCard';

const groups = [
  {groupName: 'group1', groupDesc: 'desc'},
  {groupName: 'group2', groupDesc: 'desc'},
];

class GroupList extends React.Component {
  componentDidMount() {
    this.props.listGroups();
  }

  //   componentDidUpdate() {
  //     this.props.listGroups();
  //   }
  render() {
    return (
      <ScrollView>
        <View>
          <FlatList
            data={this.props.groups.groups}
            keyExtractor={(item, index) => index.toString()}
            renderItem={group => <GroupCard group={group.item} />}
          />
        </View>
      </ScrollView>
    );
  }
}

export default GroupList;
