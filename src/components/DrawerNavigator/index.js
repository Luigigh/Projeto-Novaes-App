import { createDrawerNavigator } from "@react-navigation/drawer";
import SideMenu from "../SideMenu";
import InfoManagerEmployee from "../../pages/employee/InfoManagerEmployer";
import Register from "../../pages/employee/Register";
import ContractList from "../../pages/Client/ContractList";
import Progress from "../../pages/employee/Progress";
import ProgressClient from "../../pages/Client/ProgressClient";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen name="InfoManagerEmployee" component={InfoManagerEmployee} />
      <Drawer.Screen name="ProgressClient" component={ProgressClient} />
      <Drawer.Screen name="ContractList" component={ContractList} />
      <Drawer.Screen name="Progress" component={Progress} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
