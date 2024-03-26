import React from "react";
import { createAppContainer, createDrawerNavigator } from '@react-navigation/drawer';
import {Dimensions} from 'react-native';

import Feather from "react-native-vector-icons/Entypo";

import { InfoManager } from "./src/pages";

const DrawerNavigator = createDrawerNavigator({
  InfoManager: {
    screen: InfoManager,
    navigationOptions: {
      drawerLabel: 'InfoManager',
      drawerIcon: ({ tintColor }) => (
        <Feather name="info" size={24} color={tintColor} />
      ),
    },
  },
     contentComponent: props => <SideMenu {...props}/>,

     drawerWidth: Dimensions.get("window").width * 0.85,
     hideStatusBar: true,

     contentOptions: {
         activeBackgroundColor: "yellow",
         activeTintColor: "black",
         itemsContainerStyle: {
             marginTop: 16,
             marginHorizontal: 8
         },
         itemStyle: {
             borderRadius: 4
         }
     }
});

export default createAppContainer(DrawerNavigator);