import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import AutoComplete from 'react-native-autocomplete-input';

import { useNavigation } from '@react-navigation/native';

const InputShow = ({dataProvider}) => {

    const navigation = useNavigation();

    const [query, setQuery] = useState('');
    const [shows, setShows] = useState([]);

    
    const [dataShows, setDataShows] = useState([]);
    const [dataResto, setDataResto] = useState([]);

    const [dataSelectedShow, setDataSelectedShow] = useState(true);
    const [dataSelectedResto, setDataSelectedResto] = useState(false);
    
    const data = React.useMemo(
        () => filterData(query),
        [query, dataSelectedResto]
        );
        
        function filterData(query){
            return shows.filter(show => show?.strName.toLowerCase().startsWith(query?.toLowerCase()))
        }
        
        useEffect(() => {

            let aux = dataProvider.map((resto) => resto.shows.map((show) => {return show}));

            setDataShows(aux.flat());
            setShows(aux.flat());
    
            aux = dataProvider.map((resto) => {return resto});

            setDataResto(aux.flat());

        }, []);


    return(
        <View style={styles.autocompleteContainer}>

            <View style={styles.aligner}>
                <View style={styles.dataSelector} >
                    <TouchableOpacity style={dataSelectedShow ? styles.dataSelectorSelected : styles.dataSelectorNotSelected} onPress={() => {
                        setShows(dataShows)
                        setDataSelectedResto(false);
                        setDataSelectedShow(true);
                    }}
                    >

                        <Text style={styles.textSelector} > SHOW </Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={dataSelectedResto ? styles.dataSelectorSelected : styles.dataSelectorNotSelected} onPress={() => {
                        setShows(dataResto)
                        setDataSelectedShow(false);
                        setDataSelectedResto(true);
                    }}
                    >

                        <Text style={styles.textSelector}> RESTO </Text>

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <AutoComplete
                    autoCorrect={false}
                    data={data}
                    value={query}
                    onChangeText={setQuery}
                    hideResults={query.length == 0}
                    placeholder={dataSelectedShow ? "Search any show" : "Search any resto"}
                    listContainerStyle={styles.resultContainerView}
                    renderResultList={() => (

                        <FlatList style={styles.resultView}
                        data={data}
                            renderItem={({ item }) => (

                                <TouchableOpacity style={styles.resultItem} onPress={() => {
                                    if(dataSelectedShow){
                                        let aux = dataProvider.filter((resto) => resto.shows.includes(item))[0];
                                        navigation.navigate('RestaurantInfo', { selectedRestaurant: aux });
                                    }
                                    else{
                                        navigation.navigate('RestaurantInfo', { selectedRestaurant: item });
                                    }
                                }}>

                                    <Text style={styles.resultText}>{item.strName}</Text>
                                    
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.strName}
                        />
                    )}
                />
            </View>

            <View style={styles.aligner}>
                    <View style={styles.buttonView}>
                        <Button color={'black'} title="Go" onPress={()=>{
                            if(data.length == 1){
                                if(data[0].menus){
                                    navigation.navigate('RestaurantInfo', { selectedRestaurant: data[0] });
                                }
                                else{
                                    let aux = dataResto.filter((resto) => resto.shows.includes(data[0]))[0];
                                    navigation.navigate('RestaurantInfo', { selectedRestaurant: aux });
                                }}
                            else if(data.length > 1){
                                navigation.navigate('RestaurantResults', { filteredRestaurants: data })
                            }
                        }} />
                    </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    resultView: {
        overflow: 'scroll',
        maxHeight: 120,

    },
    resultContainerView: {
        maxWidth: '100%',
        backgroundColor: 'orange',
        zIndex: 9999
    },
    container: {
        marginRight: "1%",
        marginLeft: "1%",
        width: '50%',
        height: 50,

    },
    autocompleteContainer:{
        flexDirection: 'row',
        margin: 0,
        padding: 0,
        zIndex: 9999,
        width: '100%'

      },
    aligner: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },
    buttonView: {
        backgroundColor: 'red',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        marginBottom: 7
    },
    dataSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        width: 120,
        marginBottom: 7,

    },
    dataSelectorSelected: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '50%',
        height: 30
    },
    dataSelectorNotSelected: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '50%',
        height: 30
    },
    textSelector: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold'
    },
    resultItem: {
        backgroundColor: '#ffcc99',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '95%',
        height: 40,
        borderRadius: 6,
        borderColor: "#ffcc99",
        borderWidth: 1.5,
        marginTop: "2%",
        marginBottom: "2%",
        marginLeft: "2.5%",
        marginRight: "2.5%",
    },
    resultText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        width: '90%'
    }
  });

export default InputShow;