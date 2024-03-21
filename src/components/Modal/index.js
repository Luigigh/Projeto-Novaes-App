import React, { useState }from "react";
import { View, Modal, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";


export default function ModalStage() {
    const [etapaSelecionada, setEtapaSelecionada] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [mostrarBotaoVoltar, setMostrarBotaoVoltar] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataHora, setDataHora] = useState("");
    const [etapas, setEtapas] = useState([]);


    const adicionarEtapa = () => {
        if (indiceEtapaEditando !== null) {
          // Atualiza a etapa existente
          const etapasAtualizadas = [...etapas];
          etapasAtualizadas[indiceEtapaEditando] = { titulo, descricao, dataHora };
          setEtapas(etapasAtualizadas);
        } else {
          // Adiciona a nova etapa ao estado
          setEtapas([...etapas, { titulo, descricao, dataHora }]);
        }
      
        // Limpa os estados
        setIndiceEtapaEditando(null);
        setEtapaSelecionada(null);
        setModalVisible(false);
      };

return(
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
                maxLength={80}
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

            <View style={styles.ModalButtons}>
              <TouchableOpacity
                style={styles.btnSalvar}
                title="Adicionar"
                onPress={adicionarEtapa}
              >
                <Text style={styles.txt}>
                  {etapaSelecionada !== null ? "Salvar" : "Adicionar"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnVoltar}
                onPress={() => {
                  setEtapaSelecionada(null);
                  setMostrarBotaoVoltar(false);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.txt}>Voltar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>
        </View>


    )
}