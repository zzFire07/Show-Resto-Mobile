import React, { Component } from 'react';

import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContextProvider from './context/ContextProvider.jsx';

import HomeApp from './components/HomeApp/HomeApp.jsx';
import RestaurantResults from './components/RestaurantResults/RestaurantResults.jsx';
import RestaurantInfo from './components/RestaurantInfo/RestaurantInfo.jsx';

const StackWindow = createStackNavigator();

// Para que sea mas friendly la app, se ignoran los warnings, sino saltan carteles invasivos.
LogBox.ignoreAllLogs();

function App() {

return (

    // Se implementa el contexto de la app.
    <ContextProvider>
      <NavigationContainer>
        <StackWindow.Navigator screenOptions={{
    
    headerShown: true,
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 80

    },
  }}>

            {/* Se definen las pantallas de la app. */}
            <StackWindow.Screen name="HomeApp" component={HomeApp} />
            <StackWindow.Screen name="RestaurantResults" component={RestaurantResults} />
            <StackWindow.Screen name="RestaurantInfo" component={RestaurantInfo} />

        </StackWindow.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );

}

export default App;