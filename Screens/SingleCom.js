import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text} from 'react-native-ui-kitten';
import ComCard from '../Reusables/ComCard';

class SingleCom extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('name', 'Commuinty'),
    headerStyle: {
      backgroundColor: '#6ed6fd',
      elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: 'white',
    },
  });

  state = {
    name: '',
    crops: [
      {name: 'Cassava', photo: require('../img/cassavavector.jpg')},
      {name: 'Yam', photo: require('../img/yamvector.jpg')},
      {name: 'Sweet Potato', photo: require('../img/potato.jpg')},
      {name: 'Rice', photo: require('../img/ricevector.jpg')},
      {name: 'Oil Palm', photo: require('../img/palm.jpg')},
      {name: 'Okra', photo: require('../img/okra.jpg')},
      {name: 'Udara', photo: require('../img/udara.jpg')},
    ],
  };

  componentWillMount() {
    const {navigation} = this.props;
    this.setState({
      name: navigation.getParam('name', 'NO-ID'),
    });
  }
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={style.body}>
        <View style={style.container}>
          <View style={style.twobytwo}>
            {this.state.crops.map(crop => (
              <ComCard
                key={crop.name}
                name={crop.name}
                image={crop.photo}
                navigation={this.props.navigation}
                route="SingleCrop"
                userType={navigation.getParam('userType', 'NO-ID')}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ddecf09e',
  },

  container: {
    margin: 10,
  },
  twobytwo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

export default SingleCom;
