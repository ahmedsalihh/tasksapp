import React from 'react';
import { View, SafeAreaView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const ListItem = props => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ margin: 16 }}>
          <BouncyCheckbox
            onPress={() =>
              props.setChecked({
                task: {
                  ...props.task,
                  task_status: !props.task.task_status,
                },
              })
            }
            borderColor={'#cf1748'}
            fillColor={'#cf1748'}
            isChecked={props.task.task_status}
            text={props.task.name}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ListItem;
