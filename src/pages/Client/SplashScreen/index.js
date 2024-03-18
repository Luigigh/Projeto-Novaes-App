import React, { useEffect } from 'react';
import { View , Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';

export default function SplashScreen() {

const navigation = useNavigation();
useEffect(() => {
  setTimeout(() => {
    navigation.navigate('Login'); 
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





