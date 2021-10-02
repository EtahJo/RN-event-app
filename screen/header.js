import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './global';


export default function Header () {

    return(
      <View style={globalStyles.header}>
            <Text style={globalStyles.headerText}>EVENTS</Text>
    </View>
            

      
    )
}