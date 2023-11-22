import {Text, Image, StyleSheet, TouchableOpacity, View, ScrollView, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

const RestaurantInfo = ({ route }) => {

    // Se recibe la data del restaurante seleccionado.
    const item = route.params?.selectedRestaurant;

    // Se crea el estado con la data a mostrar en el dropdown.
    const [dataDropDown, setDataDropDown] = useState([]);

    // Estados para saber que data mostrar en el dropdown.
    const [dataSelectedShows, setDataSelectedShows] = useState(false);
    const [dataSelectedMenus, setDataSelectedMenus] = useState(true);

    useEffect(() => {

        setDataDropDown(item.menus ? item.menus : null);

    }, []);
    
    return (
        <View style={styles.normalizer} >
            <View style={styles.container} >

                <Image style={styles.image} source={{ uri: item.strImageURL }} />

                <Text>{item.strName}</Text>
                <Text>{item.strDescription}</Text>

                <View style={styles.direction}>

                    <Text>{item.strAddress}</Text>

                </View>


                {/* 
                Se crea solo si tiene un menus, osea, si es un restaurante. Es la caja con el selector de menus y shows.
                */}
                {(dataDropDown)
                &&
                <View style={styles.aligner}>
                    <View style={styles.dataSelector} >

                        <TouchableOpacity style={dataSelectedMenus ? styles.dataSelectorSelected : styles.dataSelectorNotSelected} onPress={() => {
                            setDataDropDown(item.menus);
                            setDataSelectedMenus(true);
                            setDataSelectedShows(false);
                        }}
                        >


                            <Text style={styles.textSelector} > MENUS </Text>


                        </TouchableOpacity>
                        <TouchableOpacity style={dataSelectedShows ? styles.dataSelectorSelected : styles.dataSelectorNotSelected} onPress={() => {
                            setDataDropDown(item.shows);
                            setDataSelectedShows(true);
                            setDataSelectedMenus(false);
                        }}
                        >

                            <Text style={styles.textSelector}> SHOWS </Text>


                        </TouchableOpacity>
                    </View>
                </View>}


                {/*
                Se crea un scrollview con la data del dropdown.
                */}
                <ScrollView>
                    {dataDropDown?.map((item) => {
                        return(

                            <TouchableOpacity style={styles.restaurantContainer} key={item.strName}>


                                <View style={styles.dropDownItem}>


                                    <Text style={{marginBottom: "5%", alignSelf: "center", fontSize: 28}}>{ item.strName }</Text>
                                    <Text style={{marginLeft: "5%"}} >{ item.strDescription }</Text>
                                    <Text style={{backgroundColor: "green", alignSelf: "center", fontSize: 20, marginTop: "2%", borderRadius: 2}}>{ item.strPrice }</Text>
                               
                               
                                </View>


                            </TouchableOpacity>

                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
};

export default RestaurantInfo;


const styles = StyleSheet.create({
    normalizer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 0
    },
    direction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },
    restaurantContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "2%",
        padding: 0
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 0
    },
    dropDownItem: {
        flexDirection: 'column',
        justifyContent: 'auto',
        alignItems: 'left',
        padding: 0,
        width: "90%",
        margin: "5%",
        backgroundColor: 'orange',
        borderRadius: 10,

    },
    dataSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        borderRadius: 10,
        width: "90%",
        margin: "5%"

    },
    dataSelectorSelected: {
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '50%',
        height: 30
    },
    dataSelectorNotSelected: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '50%',
        height: 30
    },
    aligner: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
    }
});