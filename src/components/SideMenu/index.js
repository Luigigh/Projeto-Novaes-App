import React from "react";
import styles from "./Styles"
import {View, Text, ScrollView, ImageBackground, Image} from 'react-native'
import {DrawerNavigatorItems} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'

export default SideMenu = async => {
    <ScrollView>
        <ImageBackground
        source={require("../../img/LogoGrupoNovaesGrande.png")}
        style={styles.imagemBackground}>

            <Image source={require("../../img/IconProfile.png")}style={styles.imagemPerfil}/>
            <Text style={styles.textPessoa}>Pessoa 01</Text>

            <View style={styles.TESTE}>
                <Text>HTE</Text>
                <Ionicons name="md-people" size={16} color={'red'}/>
            </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>
}