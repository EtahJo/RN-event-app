import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screen/home";
import Details from "../screen/details";

const screens = {
    Home:{
        screen:Home

    },
   Details:{
       screen: Details
   }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);