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
import Colors from '../Reusables/Colors';

class Register extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

  state = {
    value: '',
    selectedOption: '',
    userType: '',
    name: '',
  };
  data = [
    {text: '50,000 - 300,000', value: 1},
    {text: '300,000 - 1,000,000', value: 2},
  ];
  onSelect = selectedOption => {
    console.warn(selectedOption);
    this.setState({
      value: selectedOption.value,
      selectedOption,
      userType:
        selectedOption.value > 1
          ? 'Retiree/investor'
          : 'Fresh graduates/farmer',
    });
  };

  onSubmit = () => {
    if (this.state.value == '') {
      alert("Capital can't be empty");
      return;
    }
    Alert.alert(
      'User Type',
      `Based on your capital, you are classified as ${this.state.userType}.`,
      [
        {
          text: 'Cancel',

          style: 'cancel',
        },
        {
          text: 'Proceed',
          onPress: () =>
            this.props.navigation.navigate('Community', {
              userType: this.state.userType,
            }),
        },
      ],
      {cancelable: false},
    );
  };
  render() {
    return (
      <View style={style.section}>
        <View style={style.container}>
          <Text category="h6">Welcome to AgricHub</Text>

          <View style={style.select}>
            <Select
              data={this.data}
              label="Select Your Capital"
              labelStyle={{marginLeft: 3}}
              placeholder="Select Your Capital"
              status="info"
              selectedOption={this.state.selectedOption}
              onSelect={this.onSelect}
            />
          </View>

          {/* <View style={style.select}>
            <Input
              size="small"
              placeholder="Full Name"
              value={this.state.name}
              label="Full Name"
              labelStyle={{marginBottom: 10}}
              style={{height: 50}}
              onChangeText={text => this.setState({name: text})}
            />
          </View> */}

          <View style={style.select}>
            <Button style={style.button} size="medium" onPress={this.onSubmit}>
              Continue
            </Button>
          </View>
        </View>
        <View style={style.imageFrame}>
          <Image style={style.image} source={require('../img/farm2.jpg')} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  section: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#6ed6fd',
  },
  imageFrame: {
    width: wp('100%'),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  image: {
    height: hp('40%'),
    width: wp('100%'),
  },
  container: {
    padding: 15,
    paddingTop: hp('15%'),
  },
  select: {
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.button,
    borderColor: 'white',
  },
});

export default Register;
