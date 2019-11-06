import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  // CheckBox,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import {CheckBox} from 'react-native-elements';

const ListItem = props => {
  return (
    <View style={styles.container}>
      <CheckBox
        value={props.task.task_status}
        onValueChange={() =>
          props.setChecked({
            task: {...props.task, task_status: !props.task.task_status},
          })
        }
      />
      <Text>{props.task.name}</Text>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.textContainer}>
    //     <Text style={styles.taskName}>{props.task.name}</Text>
    //   </View>
    //   <View style={styles.imageContainer}>
    //     <TouchableOpacity activeOpacity={0.5} onPress={handleDelete}>
    //       <Image
    //         source={require('../../assets/images/android/outline_delete_white_24.png')}
    //         style={styles.imageIconStyle}
    //       />
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
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
    color: '#000',
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
