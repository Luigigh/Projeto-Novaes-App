import react from "react";
import { View , Image , TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import styles from "./Style";

export default function Header() {
    return(
        <View style={styles.container}>
            <Image source={require("../../img/LogoDesenhoBranca.png")} style={styles.image}/>
            <TouchableOpacity style={styles.btn_menu}>
                <Icon name='menu' size={50} color={'#fff'}></Icon>
            </TouchableOpacity>
        </View>
    )
}