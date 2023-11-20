import React, { Component } from 'react';

import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContextProvider from './context/ContextProvider.jsx';

import HomeApp from './components/HomeApp/HomeApp.jsx';
import RestaurantResults from './components/RestaurantResults/RestaurantResults.jsx';
import RestaurantInfo from './components/RestaurantInfo/RestaurantInfo.jsx';

const StackWindow = createStackNavigator();

LogBox.ignoreAllLogs();

function App() {

return (
    <ContextProvider>
      <NavigationContainer>
        <StackWindow.Navigator screenOptions={{
    
    headerShown: true,
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 80

    },
  }}>

            <StackWindow.Screen name="HomeApp" component={HomeApp} />
            <StackWindow.Screen name="RestaurantResults" component={RestaurantResults} />
            <StackWindow.Screen name="RestaurantInfo" component={RestaurantInfo} />

        </StackWindow.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );

}

export default App;