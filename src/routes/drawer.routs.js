import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from "./tab.routs";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="home"
            // name="feed"
            component={TabRoutes}
            options={{
                drawerIcon: ({ color, size }) => <Feather name="home" color={"yellow"} size={11}/>,
                drawerLabel: 'Início'
            }}
            />
        </Drawer.Navigator>
    )
}