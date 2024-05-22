import React, { useEffect } from 'react';
import { View , Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import { verifyUserAuth } from "../../../service/UserService";

export default function SplashScreen() {

const navigation = useNavigation();
useEffect(() => {
  setTimeout(async () => {
    console.log("teste")
    let ifUserAuth = await verifyUserAuth();
    console.log("se usuario esta logado:"+ifUserAuth);
    if(ifUserAuth){
      console.log("usuario logado")
      navigation.navigate('ContractList'); 
    }else{
      console.log("Usuario nao logado");
      navigation.navigate('Login'); 
    }
  }, 2000); 
}, []);

return (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require("../../../img/LogoGrupoNovaesGrande.png")}/>
  </View>
);
};





