import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../pages/Client/SplashScreen";
import LoginScreen from "../pages/LoginPage";
import ContractList from "../pages/Client/ContractList";
import InfoManager from "../pages/Client/InfoManager";
import Register from "../pages/employee/Register";
// import CallMenu from "../pages/Client/CallMenu";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );

  const DrawerNavigator = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      {/* Adicione outras telas do Drawer Navigator aqui, se necessário */}
    </Drawer.Navigator>
  );

  const RoutesDrawerNavegation = () => <DrawerNavigator />;
}
