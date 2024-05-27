import { View, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./Style";
import { useNavigation } from "@react-navigation/native";
import { serviceLogoutMethod } from "../../service/UserService";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <Image
        source={require("../../img/LogoDesenhoBranca.png")}
        style={styles.image}
      />
      <TouchableOpacity onPress={confirmLogout}>
                 <Icon name="logout" size={35} color="#fff"/>
            </TouchableOpacity>
    </View>
  );
}
