import React from "react";
import { View, Modal, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";


export default function Modal() {
    reutrn(
        <View>
            <Modal
                style={styles.Modal}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setEtapaSelecionada(null);
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.titulo}>
                        {etapaSelecionada !== null
                            ? "Editar Etapa"
                            : "Adicionar Nova Etapa"}
                    </Text>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.inputTitulo}
                            value={titulo}
                            onChangeText={(text) => setTitulo(text)}
                            placeholder="Título"
                            placeholderTextColor="grey"
                            maxLength={40}
                        />
                        <TextInput
                            style={styles.inputDescricao}
                            value={descricao}
                            onChangeText={(text) => setDescricao(text)}
                            placeholder="Descrição"
                            placeholderTextColor="grey"
                            maxLength={71}
                        />
                        <TextInput
                            style={styles.inputDataHora}
                            value={dataHora}
                            onChangeText={(text) => setDataHora(text)}
                            placeholder="DataHora"
                            placeholderTextColor="grey"
                            maxLength={24}
                        >

                        </TextInput>
                    </View>

                    <TouchableOpacity
                        style={styles.btnSalvar}
                        title="Adicionar"
                        onPress={adicionarEtapa}
                    >
                        <Text style={styles.txt}>
                            {etapaSelecionada !== null ? "Salvar" : "Adicionar"}
                        </Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>


    )
}