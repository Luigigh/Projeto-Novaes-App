import react from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import styles from "./Style";
import { useRoute } from "@react-navigation/native";
import Btn_Menu from '../Btn_Menu';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../img/LogoDesenhoBranca.png")}
        style={styles.image}
      />

      <Btn_Menu />

    </View>
  );
}
