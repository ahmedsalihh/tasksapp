import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faList, faPlus} from '@fortawesome/free-solid-svg-icons';

import ListTasks from '../containers/ListTasks';
import AddTask from '../containers/AddTask';
import AddGroup from '../containers/AddGroup';
import HomeScreen from '../screens/Home';
import Loading from '../screens/Loading';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

const ListStack = createStackNavigator({
  List: ListTasks,
});

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faList} />,
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    Group: AddGroup,
  },
  {
    initialRouteName: 'Loading',
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faHome} />,
};

const CreateStack = createStackNavigator({
  Create: AddTask,
});

CreateStack.navigationOptions = {
  tabBarLabel: 'Create Task',
  tabBarIcon: ({focused}) => <FontAwesomeIcon icon={faPlus} />,
};

export default createBottomTabNavigator({
  HomeStack,
  ListStack,
  CreateStack,
});
