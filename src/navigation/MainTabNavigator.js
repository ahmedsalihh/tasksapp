import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faList,
} from '@fortawesome/free-solid-svg-icons';

import ListTasks from '../containers/task/ListTasks';
import AddTask from '../containers/task/AddTask';
import AddGroup from '../containers/group/AddGroup';
import HomeScreen from '../screens/Home';
import Loading from '../screens/Loading';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

// const ListStack = createStackNavigator({
//   List: ListTasks,
// });

// ListStack.navigationOptions = {
//   tabBarLabel: 'List',
//   tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faList} color="#e93766" />,
// };

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Group: AddGroup,
    Task: AddTask,
    List: ListTasks,
  },
  {
    initialRouteName: 'Loading',
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <FontAwesomeIcon icon={faHome} color="#e93766" />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  // ListStack,
});
