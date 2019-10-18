import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    paddingLeft: '2%',
    paddingRight: '2%',
    backgroundColor: '#fff',
  },
  groupButton: {
    backgroundColor: '#e93766',
    alignItems: 'flex-start',
    paddingLeft: '3%',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  groupName: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
  groupDesc: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
});

const GroupCard = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.groupButton}
        // onPress={this.placeSubmitHandler}
      >
        <Text style={styles.groupName}>{props.group.groupName}</Text>
        <Text style={styles.groupDesc}>{props.group.groupDesc}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupCard;
