import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../components/Feed';
import New from '../components/New';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen 
        name='feed'
        component={Feed}
      />
      <Tab.Screen 
        name='new'
        component={New}
      />
    </Tab.Navigator>
  );
}
