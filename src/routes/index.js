import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../pages/SplashScreen";
import LoginScreen from "../pages/LoginPage";
import DirectoryClient from "../pages/Client/ListDirectoryClient";
import ContractList from "../pages/employee/ListDirectoryEmployee";
import InfoManager from "../pages/Client/ProfileScreenClient";
import InfoManagerEmployer from "../pages/employee/ProfileScreenEmployee";
import ProgressClient from "../pages/Client/ProgressClient";
import Progress from "../pages/employee/Progress";
import Register from "../pages/employee/Register";
import ClientList from "../pages/employee/ListClient";
import EmployeeList from "../pages/Client/ListEmployeeClient";

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
          name="DirectoryClient"
          component={DirectoryClient}
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
          name="InfoManagerEmployer"
          component={InfoManagerEmployer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ClientList"
          component={ClientList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmployeeList"
          component={EmployeeList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProgressClient"
          component={ProgressClient}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    
  );
};

export default AppStack;
