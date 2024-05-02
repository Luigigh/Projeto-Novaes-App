import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
// import Icon_Contacts from "react-native-vector-icons/MaterialIcons";
import Icon_AddUser from "react-native-vector-icons/Ionicons";
import Icon_Home from "react-native-vector-icons/Entypo";
import Icon_Timeline from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

export default function Footer({ routeSelected }) {
  const [ifHomeSelected, setIfHomeSelected] = useState(false);
  const [ifRegisterSelected, setIfRegisterSelected] = useState(false);
  const [ifProgressSelected, setIfProgressSelected] =
    useState(false);

  const navigator = useNavigation();

  useEffect(() => {
    console.log("Route relected: " + routeSelected);
    if (routeSelected === "ContractList") {
      setIfHomeSelected(true);
    }
    if (routeSelected === "Register") {
      setIfRegisterSelected(true);
    }
    if (routeSelected === "Progress") {
      setIfProgressSelected(true);
    }
  }, [routeSelected]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={ifRegisterSelected ? styles.btnSelected : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate("Register");
        }}
      >
        <Icon_AddUser name="person-add" size={35} color={"#fff"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={ifHomeSelected ? styles.btnSelected : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate("ContractList");
        }}
      >
        <Icon_Home name="home" size={35} color={"#fff"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={ifProgressSelected ? styles.btnSelected : styles.btnNotSelected}
        onPress={() => {
          navigator.navigate("Progress");
        }}
      >
        <Icon_Timeline name="timeline-clock" size={35} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}
