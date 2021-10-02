import React from 'react';
import {  View ,TouchableOpacity} from 'react-native';
import Eventlist from './eventList';
import { globalStyles } from './global';
import Header from './header';
import Icon from './icon';



export default function Home() {
  return (
    <View style={globalStyles.container}>
    <Header/>
  <Eventlist/>
  <Icon/>

  </View>
  );
};