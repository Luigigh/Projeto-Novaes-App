import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon_Plus from 'react-native-vector-icons/Entypo';
import Icon_Clock from 'react-native-vector-icons/Feather';
import styles from './Styles';
import colors from '../../color';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TimeLine(){
  const [mostrarBotaoAdicional, setMostrarBotaoAdicional] = useState(false);
  const [mostrarModalAdicional, setmostrarModalAdicional] = useState(false);

  const adicionarEtapa = () => {
    setMostrarBotaoAdicional(true);
  };

  const adicionarBotaoAdicional = () => {
    if (mostrarBotaoAdicional) {
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Botão Adicional Pressionado')}
        >
        <Icon_Clock name='clock' size={65} color={colors.branco}/>
        </TouchableOpacity>
      );
    }
    return null;
  };



  



  return (
    <View style={styles.container}>
      <Header></Header>
      <TouchableOpacity
        style={styles.button}
        onPress={adicionarEtapa}
      >
        <Icon_Plus name='plus' size={75} color={colors.branco}/>
      </TouchableOpacity>

      {adicionarBotaoAdicional()}
      <Footer></Footer>
    </View>
  );
};


