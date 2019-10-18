import React from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import GroupCard from './GroupCard';

const groups = [
  {groupName: 'group1', groupDesc: 'desc'},
  {groupName: 'group2', groupDesc: 'desc'},
];

const GroupList = () => {
  return (
    <ScrollView>
      <View>
        <FlatList
          data={groups}
          keyExtractor={(item, index) => index.toString()}
          renderItem={group => <GroupCard group={group.item} />}
        />
      </View>
    </ScrollView>
  );
};

export default GroupList;
