import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import ListTasks from '../containers/ListTasks';
import AddTask from '../containers/AddTask';

const ListStack = createStackNavigator({
  List: ListTasks,
});

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const CreateStack = createStackNavigator({
  Create: AddTask,
});

CreateStack.navigationOptions = {
  tabBarLabel: 'Create Task',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  ListStack,
  CreateStack,
});
