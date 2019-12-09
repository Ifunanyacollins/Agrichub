import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Text, Select, Input, Button} from 'react-native-ui-kitten';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class expertGrad extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Expert Advice',
    headerStyle: {
      backgroundColor: '#6ed6fd',
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: 'white',
    },
  });
  render() {
    const {navigation} = this.props;
    console.warn(navigation.getParam('userType', 'NO-ID'), 'helo');
    return (
      <View>
        <Text>{navigation.getParam('userType', 'NO-ID')}</Text>
      </View>
    );
  }
}

export default expertGrad;
