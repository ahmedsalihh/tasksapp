import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#b7b7b7',
  },
  img: { width: 50, height: 50, borderRadius: 50 },
  textView: { marginLeft: 15 },
  cardTitle: { fontSize: 23, fontWeight: 'bold' },
  cardDesc: { fontSize: 13 },
});

const img = require('../../assets/images/robot-dev.png');

const GroupCard = props => {
  const groupSelectHandler = ({ selectedItemId }) => {
    props.handleSelectedItem({ selectedItemId });
  };
  return (
    <TouchableHighlight
      onPress={() =>
        groupSelectHandler({
          selectedItemId: props.group._id,
        })
      }>
      <View style={styles.container}>
        <Image source={img} style={styles.img} />
        <View style={styles.textView}>
          <Text style={styles.cardTitle}>
            {props.group.name}
          </Text>
          <Text style={styles.cardDesc}>
            {props.group.type}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default GroupCard;
