import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class AddGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
    };
  }
  static navigationOptions = {
    headerTitleAllowFontScaling: false,
    title: 'Create Group',
  };

  placeSubmitHandler = () => {
    if (this.state.groupName.trim() === '') {
      return;
    }
    try {
      const group = {
        groupName: this.state.groupName,
        groupType: this.state.groupType,
      };
      this.props.addGroup({ group });
      this.setState({ groupName: '', groupType: '' });
    } catch (error) {
      console.log('Unknown Exception');
    }
  };

  onGroupNameChange = value => {
    this.setState({
      groupName: value,
    });
  };
  onGroupTypeChange = value => {
    this.setState({ groupType: value });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.groupName}
          placeholder={'Group Name'}
          value={this.state.groupName}
          onChangeText={this.onGroupNameChange}
        />
        <TextInput
          style={styles.groupName}
          placeholder={'Group Type'}
          value={this.state.groupType}
          onChangeText={this.onGroupTypeChange}
        />
        <TouchableOpacity
          style={styles.addGroupButton}
          onPress={this.placeSubmitHandler}>
          <Text style={styles.addGroupButtonText}>
            Add Group
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: '#fff',
  },
  groupName: {
    paddingBottom: '10%',
    fontSize: 40,
  },
  addGroupButton: {
    backgroundColor: '#e93766',
    height: '10%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addGroupButtonText: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
  },
});
