import { View, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";
import { serviceLogoutMethod } from "../../service/UserService";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { pathUser } from "../../service/UserService";

export default function Header() {
  const navigation = useNavigation();

  async function exit(){
    const response = await serviceLogoutMethod();
    if(response){
        navigation.navigate('Login');
    }
}

  function confirmLogout() {
    Alert.alert(
        'Sair',
        'Ao sair a sessão será finalizada.',
        [
            {
                text: 'Cancelar',
                style: 'cancel',
            },
            {
                text: 'Confirmar',
                onPress:  () => exit(),
            },
        ],
        { cancelable: false }
    );
}

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(pathUser[0])}>
        <Image
          source={require("../../img/logoStar.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={confirmLogout}>
                 <Icon name="logout" size={35} color="#083C52"/>
            </TouchableOpacity>
    </View>
  );
}
