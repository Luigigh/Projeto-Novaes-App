import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
// import Icon_Contacts from "react-native-vector-icons/MaterialIcons";
import Icon_AddUser from "react-native-vector-icons/Ionicons";
import Icon_Home from "react-native-vector-icons/Entypo";
import Icon_Timeline from "react-native-vector-icons/MaterialCommunityIcons";
import Icon_InfoManager from "react-native-vector-icons/FontAwesome";
import Icon_List from "react-native-vector-icons/FontAwesome6";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { userLogged } from "../../service/UserService";

export default function Footer({ routeSelected }) {
  const [ifHomeSelected, setIfHomeSelected] = useState(false);
  const [ifProgressSelected, setIfProgressSelected] = useState(false);
  const [ifInfoManagerEmployeeSelected, setIfInfoManagerEmployeeSelected] = useState(false);
  const [ifClientListSelected, setIfClientListSelected] = useState(false);
  const navigator = useNavigation();
  const [ pages , setPages ] = useState([]);
  const admPages = [
    "ContractList", //Lista Diretorios
    "InfoManagerEmployee", //Tela de perfil
    "ClientList", // Listagem de contatos
    "Progress" // listar progresso
  ];
  const clientPages = [
    "DirectoryClient", //Lista Diretorios
    "InfoManager", //Tela de perfil
    "EmployeeList",
    "ProgressClient"
  ]


  useEffect(() => {
    console.log("usuario em footer"+JSON.stringify(userLogged[0]))
    if(userLogged[0].role = "ADMIN"){
      setPages(admPages);
    }else{
      setPages(clientPages);
    }
  }, [])

  useEffect(() => {
    console.log("Route relected: " + routeSelected);
    if (routeSelected === "ContractList") {
      setIfHomeSelected(true);
    }
    if (routeSelected === "ProgressClient") {
      setIfProgressSelected(true);
    }
    if (routeSelected === "InfoManagerEmployee") {
      setIfInfoManagerEmployeeSelected(true);
    }
    if (routeSelected === "ClientList") {
      setIfClientListSelected(true);
    }
  }, [routeSelected]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={ifClientListSelected ? styles.btnSelected : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate(pages[2]);
        }}
      >
        <Icon_List name="list" size={35} color={"#fff"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={ifHomeSelected ? styles.btnSelected : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate(pages[0]);
        }}
      >
        <Icon_Home name="home" size={35} color={"#fff"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={ifProgressSelected ? styles.btnSelected : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate(pages[3]);
        }}
      >
        <Icon_Timeline name="timeline-clock" size={35} color={"#fff"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          ifInfoManagerEmployeeSelected
            ? styles.btnSelected
            : styles.btnNotSelected
        }
        onPress={() => {
          navigator.navigate(pages[1]);
        }}
      >
        <Icon_InfoManager name="user" size={35} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}
