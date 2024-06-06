import React, { useCallback} from 'react';
import { View , Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { verifyUserAuth } from '../../service/UserService';
import { userLogged } from '../../service/UserService';

export default function SplashScreen() {

const navigation = useNavigation();

useFocusEffect(
  useCallback(() => {
    (async () => {
      setTimeout(async () => {
        let ifUserAuth = await verifyUserAuth();
        console.log("se usuario esta logado:"+ifUserAuth);
        if(ifUserAuth){
          console.log("role do usuario logado: " + userLogged[0].role);
          
          if(userLogged[0].role == "ADMIN"){
            navigation.navigate('ContractList');
            
          }else{
            navigation.navigate('DirectoryClient');
          }
        }else{
          console.log("Usuario nao logado");
          navigation.navigate('Login'); 
        }
      }, 2000); 
    })();
  }, [])
);

return (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require("../../img/LogoGrupoNovaesGrande.png")}/>
  </View>
);
};





