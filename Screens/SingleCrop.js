import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Text, Button} from 'react-native-ui-kitten';
import ComCard from '../Reusables/ComCard';
import Cassava from '../Reusables/CassavaData';
import Yam from '../Reusables/YamData';
import SweetPotato from '../Reusables/PotatoesData';
import Rice from '../Reusables/RiceData';
import OilPalm from '../Reusables/PalmoilData';
import Okra from '../Reusables/Okra';
import Udara from '../Reusables/Udra';
import Colors from '../Reusables/Colors';

const crops = {
  Cassava,
  Yam,
  SweetPotato,
  Rice,
  OilPalm,
  Okra,
  Udara,
};

class SingleCrop extends Component {
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
    crop: 'Cassava',
  };

  componentWillMount() {
    const {navigation} = this.props;
    const route = String(navigation.getParam('name', 'NO-ID'));

    if (route === 'Oil Palm') {
      this.setState({
        name: navigation.getParam('name', 'NO-ID'),
        crop: crops['OilPalm'],
      });

      return;
    }

    if (route === 'Sweet Potato') {
      this.setState({
        name: navigation.getParam('name', 'NO-ID'),
        crop: crops['SweetPotato'],
      });

      return;
    }

    this.setState({
      name: navigation.getParam('name', 'NO-ID'),
      crop: crops[route],
    });
  }
  render() {
    const {name, crop} = this.state;
    const {navigation} = this.props;
    console.warn(navigation.getParam('userType', 'NO-ID'), 'helo');
    return (
      <ScrollView style={style.body}>
        <View style={style.cardContainer}>
          <Text category="h5">{name} Cultivation</Text>

          <View style={style.twobytwo}>
            <View>
              <View>
                <Text category="s6" style={style.headerText}>
                  Soil Type
                </Text>
                <Text category="label" style={{width: wp('50%')}}>
                  {crop.LandWater.SoilType}
                </Text>
              </View>

              <View style={{marginTop: 10}}>
                <Text category="s6" style={style.headerText}>
                  Temperature
                </Text>
                <Text category="label" style={{width: wp('50%')}}>
                  {crop.LandWater.Temperature || 'Nil'}
                </Text>
              </View>
            </View>
            <View>
              <Button
                style={style.button}
                onPress={() =>
                  this.props.navigation.navigate('ExpertGrad', {
                    userType: navigation.getParam('userType', 'NO-ID'),
                  })
                }>
                Expert advice
              </Button>
            </View>
          </View>
        </View>
        <View style={style.container}>
          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Shade tolerance
              </Text>
              <Text category="label">
                {crop.LandWater.Shadetolerance || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Drought resistance
              </Text>
              <Text category="label">
                {crop.LandWater.Droughtresistance || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Waterlogged tolerance
              </Text>
              <Text category="label">
                {crop.LandWater.Waterloggedtolerance || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                pH
              </Text>
              <Text category="label">{crop.LandWater.pH || 'Nil'}</Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Land clearing
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.LandWater.Landclearing || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Soil tillage
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.LandWater.Soiltillage || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Planting period
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.LandWater.Plantingperiod || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Planting material
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.LandWater.Plantingmaterial || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Varieties
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.LandWater.Varieties || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Growth duration
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.LandWater.Growthduration || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Irrigation
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.LandWater.Irrigation || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Plant selection
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Agronomicpractices.Plantselection || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Sowing method
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Agronomicpractices.Sowingmethod || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Fertilizer requirement
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Agronomicpractices.Fertilizerrequirement || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Yield potential
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Agronomicpractices.Yieldpotential || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Pests
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Controlmethods.Pestsinclude || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Symptoms
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Controlmethods.Symptoms || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Control
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Controlmethods.Control || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Diseases include
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Controlmethods.Diseasesinclude || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Symptoms
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Controlmethods.Symptoms || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Control
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Controlmethods.Controlx || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Theft
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Controlmethods.Theft || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Local harvesting
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Harvestingstorage.Localharvesting || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Harvesting machines
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Harvestingstorage.Harvestingmachinesincludes || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Transportation
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Harvestingstorage.Transportation || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Storage
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Harvestingstorage.Storage || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Reason for processing
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Processingstorage.Reasonforprocessing || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Products includes
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Processingstorage.Productsincludes || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Processing tools include
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Processingstorage.Processingtoolsinclude || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Processing machines
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Processingstorage.Processingmachines || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={style.twobytwo}>
            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Packaging
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Processingstorage.Packaging || 'Nil'}
              </Text>
            </View>

            <View style={{marginTop: 5}}>
              <Text category="s6" style={style.headerText}>
                Marketing
              </Text>
              <Text category="label" style={style.shortText}>
                {crop.Marketing || 'Nil'}
              </Text>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <Text category="s6" style={style.headerText}>
              Economic importance
            </Text>
            <Text category="label" style={{width: wp('90%')}}>
              {crop.Economicimportance || 'Nil'}
            </Text>
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
  cardContainer: {
    width: wp('100%'),
    height: 'auto',
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5,
  },
  container: {
    margin: 10,
  },
  twobytwo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.button,
    borderColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    color: Colors.button,
  },
  shortText: {
    width: wp('40%'),
  },
});

export default SingleCrop;
