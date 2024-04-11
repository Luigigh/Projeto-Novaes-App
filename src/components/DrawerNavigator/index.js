import { createDrawerNavigator } from "@react-navigation/drawer";
import SideMenu from "../SideMenu";
import InfoManager from "../../pages/Client/InfoManager";
import Register from "../../pages/employee/Register";
import ContractList from "../../pages/Client/ContractList";
import Progress from "../../pages/employee/Progress";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen name="InfoManager" component={InfoManager} />
      <Drawer.Screen name="ProgressClient" component={Register} />
      <Drawer.Screen name="ContractList" component={ContractList} />
      <Drawer.Screen name="Progress" component={Progress} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
