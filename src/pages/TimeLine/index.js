import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  FlatList,
  ScrollView,
  Animated,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./Styles";
import Icon_Plus from "react-native-vector-icons/Entypo";
import Icon_Clock from "react-native-vector-icons/Feather";
import Icon_Edit from "react-native-vector-icons/FontAwesome";
import Icon_Trash from "react-native-vector-icons/Entypo";
import Icon_Date from "react-native-vector-icons/Fontisto";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function TimeLineScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [etapas, setEtapas] = useState([]);
  const [etapaSelecionada, setEtapaSelecionada] = useState(null);
  const [indiceEtapaEditando, setIndiceEtapaEditando] = useState(null);
  const [corIconeClock, setCorIconeClock] = useState("#FFF");
  const route = useRoute();

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

  const editarEtapa = () => {
    if (etapaSelecionada !== null) {
      // Define o índice da etapa que está sendo editada
      setIndiceEtapaEditando(etapaSelecionada);

      // Preenche os campos do modal com os detalhes da etapa selecionada
      setTitulo(etapas[etapaSelecionada].titulo);
      setDescricao(etapas[etapaSelecionada].descricao);
      setDataHora(etapas[etapaSelecionada].dataHora);

      // Abre o modal
      setModalVisible(true);
    }
  };

  const excluirEtapa = () => {
    if (etapaSelecionada !== null) {
      // Remove a etapa selecionada da lista
      const etapasAtualizadas = etapas.filter(
        (etapa, index) => index !== etapaSelecionada
      );
      setEtapas(etapasAtualizadas);
      // Limpa a seleção de etapa
      setEtapaSelecionada(null);
    }
  };

  return (

    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.ScrollView}>


        {/* Botão "Adicionar Etapa" */}
        {/* Lista de Etapas */}
        <FlatList
          data={etapas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.mainEtapa}>
              <TouchableOpacity style={styles.btnEtapa} onPress={() => {
                setEtapaSelecionada(index);
                setMostrarModalConfirmacao(true);
              }}>
                <Icon_Clock
                  name="clock"
                  size={60}
                  color={"#FFF"}
                ></Icon_Clock>
              </TouchableOpacity>
              <View style={styles.boxEtapa}>
                <View style={styles.dados}>
                  <View style={styles.ViewTitulo}>
                    <Text style={{ fontWeight: 'bold' }}>{`${item.titulo}`}</Text>
                  </View>
                  <Text style={{ textAlign: 'center' }}>
                    -----------------------------------------------------
                  </Text>
                  <View style={styles.ViewDescricao}>
                    <Text style={{ marginBottom: 10, textAlign: 'center' }}>{` ${item.descricao}`}</Text>
                  </View>

                  <Text><Icon_Date name="date" color={"#007B8F"} size={15}></Icon_Date>{` ${item.dataHora}`}</Text>
                </View>

                <View style={styles.buttons}>
                  <TouchableOpacity
                    id="editar"
                    style={styles.btnEdit}
                    onPress={() => {
                      setEtapaSelecionada(index);
                      editarEtapa();
                    }}
                  >
                    <Icon_Edit
                      name="pencil"
                      size={25}
                      color={"#FFF"}
                    ></Icon_Edit>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btnDelete}
                    onPress={() => {
                      // Ao clicar no botão de excluir, define a etapa a ser excluída
                      setEtapaSelecionada(index);
                      // Chama a função para excluir a etapa
                      excluirEtapa();
                    }}
                  >
                    <Icon_Trash
                      name="trash"
                      size={25}
                      color={"#FFF"}
                    ></Icon_Trash>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />

        {/* Modal para adicionar/editar Etapa */}
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



        <TouchableOpacity
          id="adicionar"
          style={styles.btnAdd}
          onPress={() => {
            setEtapaSelecionada(null);
            setModalVisible(true);
          }}
        >
          <Icon_Plus name="plus" size={55} color={"#FFF"}></Icon_Plus>
        </TouchableOpacity>

      </ScrollView>
      <Footer routeSelected={route.name}/>
    </View>

  );
}
