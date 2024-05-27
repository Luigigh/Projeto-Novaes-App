import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../pages/Client/SplashScreen";
import LoginScreen from "../pages/LoginPage";
import DirectoryClient from "../pages/Client/DirctoryClient";
import ContractList from "../pages/employee/ContractList";
import InfoManager from "../pages/Client/InfoManager";
import InfoManagerEmployer from "../pages/employee/InfoManagerEmployer";
import Contacts from "../pages/Client/Contacts";
import ProgressClient from "../pages/Client/ProgressClient";
import Progress from "../pages/employee/Progress";
import Register from "../pages/employee/Register";
import UsersList from "../pages/employee/UsersList";
import ClientList from "../pages/employee/ClientList";
import EmployeeList from "../pages/Client/EmployeeList";
import { useUser, UserProvider } from "../context/index.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default AppStack;
