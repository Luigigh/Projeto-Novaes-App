import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
// import Icon_Contacts from "react-native-vector-icons/MaterialIcons";
import Icon_AddUser from "react-native-vector-icons/Ionicons";
import Icon_Home from "react-native-vector-icons/Ionicons";
import Icon_Timeline from "react-native-vector-icons/MaterialCommunityIcons";
import Icon_InfoManager from "react-native-vector-icons/FontAwesome";
import Icon_List from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { userLogged , pathUser} from "../../service/UserService";
import colors from "../../color";

export default function Footer({ routeSelected }) {
  const [ifHomeSelected, setIfHomeSelected] = useState(false);
  const [ifProgressSelected, setIfProgressSelected] = useState(false);
  const [ifInfoManagerEmployeeSelected, setIfInfoManagerEmployeeSelected] = useState(false);
  const [ifClientListSelected, setIfClientListSelected] = useState(false);
  const navigator = useNavigation();
  const [profileScreen , setProfileScreen] = useState("");
  

  useEffect(() => {
    console.log("Route selected: " + routeSelected);

    setIfHomeSelected(routeSelected === "ContractList" || routeSelected === "DirectoryClient");
    setIfProgressSelected(routeSelected === "ProgressClient" || routeSelected === "ListContractEmployee" || routeSelected === "Progress");
    setIfInfoManagerEmployeeSelected(routeSelected === "InfoManagerEmployer" || routeSelected === "InfoManager");
    setIfClientListSelected(routeSelected === "ClientList" || routeSelected === "EmployeeList" || routeSelected === "ClientListEnginer" || routeSelected === "Register");
    setProfileScreen(userLogged[1]);

    console.log("Array setado para os caminhos: " + pathUser);
  }, [routeSelected]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={ifClientListSelected ? styles.btnSelectedList : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate(pathUser[2]);
        }}
      >
        <Icon_List name="users" size={30} color={colors.secondary} style={ifClientListSelected ? styles.colorIcon : styles.colorIconnot}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={ifHomeSelected ? styles.btnSelectedDirectory : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate(pathUser[0]);
        }}
      >
        <Icon_Home name="folder-open-sharp" size={35} color={colors.folder1} style={ifHomeSelected ? styles.colorIcon : styles.colorNot}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={ifProgressSelected ? styles.btnSelectedContract : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate(pathUser[3]);
        }}
      >
        <Icon_Timeline name="timeline-clock" size={35} color={colors.azul_claro1} style={ifProgressSelected ? styles.colorIcon : styles.colorNot}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          ifInfoManagerEmployeeSelected
            ? styles.btnSelectedProfile
            : styles.btnNotSelected
        }
        onPress={() => {
          console.log("depois de pressionado: "+pathUser[1]);
          navigator.navigate(pathUser[1]);
        }}
      >
        <Icon_InfoManager name="user" size={35} color={colors.verde} style={ifInfoManagerEmployeeSelected ? styles.colorIcon : styles.colorNot}/>
      </TouchableOpacity>
    </View>
  );
}
