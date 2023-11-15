import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView } from 'react-native';

import { restaurantContext } from './../../context/ContextProvider';
import { useContext } from 'react';

const RestaurantResults = ({ route }) => {

    const [context, dispatch] = useContext(restaurantContext);

    const RESTAURANTS = context.restaurantes;

    const navigation = useNavigation();

    const filteredRestaurants = route.params?.filteredRestaurants;


    return(
        
        <ScrollView>
           {filteredRestaurants.map((item) => {
               return(
                   <TouchableOpacity style={styles.restaurantContainer} key={item.strName} onPress={()=>{
                        if(item.shows === undefined){
                            let aux = RESTAURANTS.filter((resto) => resto.shows.includes(item))[0];
                            navigation.navigate('RestaurantInfo', { selectedRestaurant: aux });
                        }
                        else{
                            navigation.navigate('RestaurantInfo', { selectedRestaurant: item });
                        }
                    }}>
                            <Image style={styles.restaurantImage} source={{ uri: item.strImageURL }} />
                            <View style={styles.restaurantDescription}>
                                <Text>{item.strDescription}</Text>
                                <Text style={{fontSize: 20, fontVariant: "bold"}}>{item.strName}</Text>
                            </View>
                     </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
};

export default RestaurantResults;

const styles = StyleSheet.create({
    restaurantContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: "5%",
        width: "90%",
        height: 120,
        padding: 0,
        borderRadius: 25,
        backgroundColor: 'grey'
    },
    restaurantImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 0,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    restaurantDescription: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "1%",
        width: "70%",
        padding: 0
    }
});