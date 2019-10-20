import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
  const handleDelete = () => {
    props.handleDelete(props.task._id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.taskName}>{props.task.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={handleDelete}>
          <Image
            source={require('../assets/images/android/outline_delete_white_24.png')}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e93766',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    margin: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  taskName: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: '5%',
  },
  imageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
});

export default ListItem;
