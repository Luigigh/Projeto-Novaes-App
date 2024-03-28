import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../pages/Client/SplashScreen";
import LoginScreen from "../pages/LoginPage";
import ContractList from "../pages/Client/ContractList";
import InfoManager from "../pages/Client/InfoManager";
import Register from "../pages/employee/Register";
import SideMenu from "../components/SideMenu";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContractList"
        component={ContractList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfoManager"
        component={InfoManager}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
    <Drawer.Screen name="Meu perfil" component={AppStack} options={{ headerShown: false }}/>
  </Drawer.Navigator>
);

const Routes = () => <DrawerNavigator />;

export default Routes;
