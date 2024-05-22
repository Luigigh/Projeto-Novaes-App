import { View, Image, TouchableOpacity } from "react-native";
import styles from "./Style";
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
