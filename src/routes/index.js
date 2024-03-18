import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../pages/Client/SplashScreen";
import LoginScreen from '../pages/Client/Login';
import Register from '../pages/Client/Register';
import ContractList from '../pages/Client/ContractList';
import InfoManager from "../pages/Client/InfoManager";
import TimeLine from '../pages/Client/TimeLine';


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
                name="TimeLine"
                component={TimeLine}
                options={{ headerShown: false}}
            />

        </Stack.Navigator>
    )
}