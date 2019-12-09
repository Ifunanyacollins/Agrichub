import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-ui-kitten';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Reusables/Colors';
import ComCard from '../Reusables/ComCard';
import Plantain from '../img/plantain.jpg';
import Rice from '../img/rice.jpg';
import Poat from '../img/poat.jpg';
import Cassava from '../img/cassava.jpg';
import Yam from '../img/yam.jpg';

class Community extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerStyle: {
      backgroundColor: '#6ed6fd',
      elevation: 0,
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerLeft: () => (
      <Icon
        name="bars"
        style={{fontSize: 20, marginLeft: wp('3%')}}
        onPress={() => navigation.openDrawer()}
        color="white"
      />
    ),
  });
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={style.body}>
        <View style={{marginTop: 0.2}}>
          <View style={{marginBottom: 30}}>
            <Image
              style={style.image}
              source={{
                uri:
                  'https://res.cloudinary.com/dus4sijdt/image/upload/b_rgb:6ed6fd,o_55/v1575409418/farming_f6nqnf.jpg',
              }}
            />
          </View>

          <View style={style.container}>
            <Text category="h6">Select your preferred Community</Text>

            <View style={style.twobytwo}>
              <ComCard
                image={Plantain}
                name="Mpu"
                navigation={this.props.navigation}
                route="SingleCom"
                userType={navigation.getParam('userType', 'NO-ID')}
              />
              <ComCard
                image={Rice}
                name="Ndeabor"
                navigation={this.props.navigation}
                route="SingleCom"
                userType={navigation.getParam('userType', 'NO-ID')}
              />
              <ComCard
                image={Poat}
                name="Nenwe"
                navigation={this.props.navigation}
                route="SingleCom"
                userType={navigation.getParam('userType', 'NO-ID')}
              />
              <ComCard
                image={Cassava}
                name="Oduma"
                navigation={this.props.navigation}
                route="SingleCom"
                userType={navigation.getParam('userType', 'NO-ID')}
              />
              <ComCard
                image={Yam}
                name="Okpanku"
                navigation={this.props.navigation}
                route="SingleCom"
                userType={navigation.getParam('userType', 'NO-ID')}
              />
            </View>
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
  image: {
    width: wp('100%'),
    height: hp('25%'),
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

export default Community;
