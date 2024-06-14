import React from "react";
import { StatusBar } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import { LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#324FA6" barStyle='light-content' bar />
      <Routes/>
   </NavigationContainer>
  );
}
