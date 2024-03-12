import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../pages/SplashScreen";
import LoginScreen from '../pages/Login';
import Register from '../pages/Register';
import ContractList from '../pages/ContractList';
import InfoManager from "../pages/InfoManager";
import TimeLine from '../pages/TimeLine';


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