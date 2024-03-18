import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { listarEtapas } from '../../../service/ProgressServiceClient'; // Importando as etapas do arquivo separado
import styles from './Styles';

const ProgressClient = () => {
    // Importando as etapas do arquivo separado
    const etapas = listarEtapas();

    return (
        <View style={styles.container}>
            <ScrollView>
                {etapas.map((etapa, index) => (
                    <View key={index} style={styles.etapaContainer}>
                        <Text style={styles.etapaTitulo}>Etapa {index + 1}</Text>
                        <Text style={styles.etapaDescricao}>{etapa.descricao}</Text>
                        <Text style={styles.etapaDataHora}>{etapa.dataHora.toLocaleString()}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ProgressClient;
