import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from 'react-native-ui-kitten';
import 'react-native-gesture-handler';
import Register from './Screens/Register';
import Community from './Screens/Community';
import SingleCom from './Screens/SingleCom';
import SingleCrop from './Screens/SingleCrop';
import expertGrad from './Screens/expertGrad';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{backgroundColor: 'black'}}
          onPress={() => this.props.navigation.navigate('Here')}>
          <Text style={{color: 'red'}}>Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Community: {
    screen: Community,
  },
  SingleCom: {
    screen: SingleCom,
  },
  SingleCrop: {
    screen: SingleCrop,
  },
  ExpertGrad: {
    screen: expertGrad,
  },
});

const AuthAppNavigator = createStackNavigator({
  Register: {
    screen: Register,
  },
});

const DrawerAppNavigator = createDrawerNavigator({
  Community: AppNavigator,
});

const Switch = createSwitchNavigator({
  AuthAppNavigator,
  DrawerAppNavigator,
});

const MainAppNavigator = createAppContainer(Switch);

export default class AllNav extends React.Component {
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <MainAppNavigator />
      </ApplicationProvider>
    );
  }
}
