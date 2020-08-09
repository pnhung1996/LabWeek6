/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import GeoLocation from '@react-native-community/geolocation';
import Permisson from 'react-native-permissions'

function App(){
  const [location,setLocation] = useState(null);

  async function getCurrentLocation(){
    try {
      const {status} = await Permisson.request(Permisson.PERMISSIONS.ACCESS_FINE_LOCATION);
      if(status != 'granted'){
        setText("You have not accept permission location");
        return;
      }
      const {location} = await GeoLocation.getCurrentPosition(position => {
        setLocation(position);
      });
    } catch (error) {
      
    }
  }
  useEffect(()=>{},[]);

  return (   
      <SafeAreaView style = {styles.container}>
        <Text>
         Hung
        </Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
    backgroundColor : 'red'
  }
});

export default App;
