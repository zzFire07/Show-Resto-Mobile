import Carousel, { Pagination } from 'react-native-snap-carousel';
import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity,  } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { restaurantContext } from './../../context/ContextProvider';
import { useContext } from 'react';
  
const CarrousselImageRestaurant = ({}) => {

  const [context, dispatch] = useContext(restaurantContext);

  const dataToShow = context.restaurantes;

    const height = 225;
    const width = 225;
      
    const navigation = useNavigation();

    const styles = StyleSheet.create({
      slide: {
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          height: height,
          width: width,
      },
      image: {
          width: width,
          height: height,
          borderRadius: 10,
          margin: 0
      },
      container: {
          margin: 0,
          padding: 0
      },
    });

      const [data, setData] = useState([]);
      const [activeSlide, setActiveSlide] = useState(0);
      
      useEffect(() => {
        setData(dataToShow);
      }, []);


    const _renderItem = ({ item, index }) => {
        return (
          <TouchableOpacity onPress={()=>{
            navigation.navigate('RestaurantInfo', { selectedRestaurant: item })
          }} >
              <View style={styles.slide}>
                  <Image style={styles.image} source={{ uri: item.strImageURL }} />
              </View>
          </TouchableOpacity>
        );
    }



    return (
        <View style={styles.container}>
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={data}
              renderItem={_renderItem}
              sliderWidth={width}
              itemWidth={width}
              autoplay={true}
              autoplayDelay={2000}
              loop={true}
              containerCustomStyle={{ maxHeight: height}}
              onSnapToItem={(index) => setActiveSlide(index)}
          />
            <Pagination
              dotsLength={data.length}
              activeDotIndex={activeSlide}
              containerStyle={{ marginTop: -70 }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(5, 150, 255, 0.95)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        </View>
    );
}

export default CarrousselImageRestaurant;