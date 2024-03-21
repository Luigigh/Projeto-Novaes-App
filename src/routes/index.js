import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../pages/Client/SplashScreen";
import LoginScreen from "../pages/LoginPage";
import ContractList from "../pages/Client/ContractList";
import InfoManager from "../pages/Client/InfoManager";
import ProgressClient from "../pages/Client/ProgressClient";

const Stack = createNativeStackNavigator();

export default function Routes() {
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
        name="ProgressClient"
        component={ProgressClient}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
