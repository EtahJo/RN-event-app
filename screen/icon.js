import React from 'react';
import { Entypo} from '@expo/vector-icons';
import {View} from 'react-native';
import { globalStyles } from './global';


export default function Icon (){
    return(
        <View style={globalStyles.icon}>
     <Entypo name='message' size={20} />
        </View>

    )
}

