import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../pages/Client/SplashScreen";
import LoginScreen from "../pages/LoginPage";
import ContractList from "../pages/Client/ContractList";
import InfoManager from "../pages/Client/InfoManager";
import Register from "../pages/employee/Register";

const Drawer = createDrawerNavigator();

export default function MenuRoute() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Meu Perfil" component={InfoManager} />
      <Drawer.Screen name="Contratos" component={ContractList} />
      <Drawer.Screen name="Registro" component={Register} />
    </Drawer.Navigator>
  );
}
