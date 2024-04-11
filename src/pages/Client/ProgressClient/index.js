import React from 'react';
import { View, Text, ScrollView, Button, TouchableHighlight } from 'react-native';
import {useRoute} from '@react-navigation/native'
import { listarEtapas } from '../../../service/ProgressServiceClient'; 
import Icon_Date from 'react-native-vector-icons/Fontisto';
import Icon_Clock from 'react-native-vector-icons/Feather';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styles from './Styles';

const ProgressClient = () => {
    // Importando as etapas do arquivo separado
    const etapas = listarEtapas();
    const route = useRoute();
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView style={styles.scrollviewContainer}>
                {etapas.map((etapa, index) => (
                    <View key={index} style={styles.etapaContainer}>
                        <TouchableHighlight style={styles.btnClock}>
                            <Icon_Clock name="clock" size={60} color="#FFF" />
                        </TouchableHighlight>

                        <View style={styles.content}>
                            <Text style={styles.etapaTitulo}>{etapa.titulo}</Text>
                            <Text style={styles.etapaDescricao}>{etapa.descricao}</Text>
                            <Text style={styles.etapaDataHora}>
                            <Icon_Date name="date" size={20} color="#007B8F"/>
                            {etapa.dataHora.toLocaleString()}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Footer routeSelected={route.name}/>
        </View>
    );
};

export default ProgressClient;
