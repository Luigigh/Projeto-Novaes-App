import React from "react";
import styles from "./Styles"
import {View, Text, TouchableOpacity, Image} from 'react-native'
// import {DrawerNavigatorItems} from '@react-navigation/drawer'
import InfoManager from '../../pages/Client/InfoManager';
import ContractList from '../../pages/Client/ContractList';
import ProgressClient from '../../pages/Client/ProgressClient';

const SideMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../img/IconProfile.png')} // Coloque a imagem do usuário aqui
            style={styles.userImage}
          />
          <Text style={styles.username}>Nome do Usuário</Text> {/* Substitua pelo nome do usuário */}
        </View>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('InfoManager')}>
        <Text>Info Manager</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ContractList')}>
        <Text>Lista de Contratos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ProgressClient')}>
        <Text>Progresso do Cliente</Text>
      </TouchableOpacity>
      </View>
  
    )
}

export default SideMenu;