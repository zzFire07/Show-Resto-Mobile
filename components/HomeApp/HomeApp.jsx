import { StyleSheet, Text, View, Button, Keyboard, SafeAreaView } from 'react-native';
import { AppRegistry } from 'react-native';

import InputShow from './../InputShow/InputShow';
import CarrousselImageRestaurant from './../CarrousselImageRestaurant/CarrousselImageRestaurant';
import CarrousselImageShow from './../CarrousselImageShow/CarrousselImageShow';

import { restaurantContext } from './../../context/ContextProvider';
import { useContext } from 'react';

export default function HomeApp() {

  // Se usa el hook useContext para obtener el estado global de la aplicacion.
  const [context, dispatch] = useContext(restaurantContext);

  // Se obtiene la data de los restaurantes traido del context.
  const RESTAURANTS = context.restaurantes;

  // Se crea un array con todos los shows de todos los restaurantes.
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

        <View>
          <CarrousselImageShow/>
        </View>
        
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

