import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View ,TouchableOpacity} from 'react-native';
import Eventlist from './screen/eventList';
import { globalStyles } from './screen/global';
import Header from './screen/header';
import Icon from './screen/icon';
import Navigator from './routes/homeStack'



export default function App() {
  return (
    <View style={globalStyles.container}>
   <Navigator/>


  </View>
  );
};