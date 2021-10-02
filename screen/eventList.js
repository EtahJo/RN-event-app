import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { globalStyles } from './global';
import { Entypo} from '@expo/vector-icons';



export default function Eventlist (){
     const[list,setlist]=useState([
         {date:'11 NOV',title:'Sunday Supper Club',time:'16:00-19:00',place:'144W Elm St,Chicago.IL,60610,USA', id:'1'},
         {date:'13 NOV',title:'Evenings in the Park',time:'06:30 - 08:30',place:'Estuary Park',id:'2'}
     ])

    return (
        <View>
            <FlatList
            data={list}
            renderItem={({item})=>(
                <View style={globalStyles.list}>
                <Text style={globalStyles.date}> {item.date}</Text>
                <Text style={globalStyles.title}> {item.title}</Text>
                <Text style={globalStyles.time}> {item.time}</Text>
                <Text style={globalStyles.place}> {item.place}</Text>
                <Text style={globalStyles.det}> + Event Details</Text>
                </View>

            )}
            />
          
        </View>

    )
}