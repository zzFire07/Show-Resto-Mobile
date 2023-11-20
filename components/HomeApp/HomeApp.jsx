import { StyleSheet, Text, View, Button, Keyboard, SafeAreaView } from 'react-native';
import { AppRegistry } from 'react-native';

import InputShow from './../InputShow/InputShow';
import CarrousselImageRestaurant from './../CarrousselImageRestaurant/CarrousselImageRestaurant';
import CarrousselImageShow from './../CarrousselImageShow/CarrousselImageShow';

import { restaurantContext } from './../../context/ContextProvider';
import { useContext } from 'react';

export default function HomeApp() {

  console.log(useContext(restaurantContext));

  const [context, dispatch] = useContext(restaurantContext);

  const RESTAURANTS = context.restaurantes;

  const SHOWS = RESTAURANTS.map((resto) => resto.shows.map((show) => {return show})).flat();

  return (
    <View style={styles.normalizer}>
      <View style={styles.container}>
        <View style={{marginTop: '5%', marginBottom: '8%'}}>
          <CarrousselImageRestaurant/>
        </View>
        <View style={{zIndex: 9999, marginBottom: '12%'}}>
          <InputShow dataProvider={RESTAURANTS}/>
        </View>
          <CarrousselImageShow/>
      </View>
    </View>
  );
}

AppRegistry.registerComponent('main', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: 'cyan',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  normalizer: {
    backgroundColor: '#ffcc99',
    margin: 0,
    height: '100%',
  }
});

