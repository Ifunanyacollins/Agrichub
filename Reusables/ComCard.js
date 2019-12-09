import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {Text} from 'react-native-ui-kitten';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class ComCard extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={style.cardContainer}
        onPress={() =>
          this.props.navigation.navigate(this.props.route, {
            name: this.props.name,
            userType: this.props.userType,
          })
        }>
        <Image style={style.image} source={this.props.image} />
        <View style={style.TextContainer}>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  cardContainer: {
    width: wp('45%'),
    height: hp('30%'),
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: wp('45%'),
    height: hp('15%'),
  },
  TextContainer: {
    height: hp('15%'),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ComCard;
