import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon_Back from "react-native-vector-icons/Ionicons";
import Icon_Question from "react-native-vector-icons/AntDesign";
import Icon_NoContract from "react-native-vector-icons/AntDesign";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ProgressServiceClient from "../../../service/ProgressServiceClient";
import Contract from "../../../components/Contract";
import RenderStage from "../../../components/RenderStageClient"
import styles from "./Styles";
import colors from "../../../color";

const ProgressClient = () => {
  progressList;
  const [progressList, setProgressList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contracts, setContracts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateHour, setDateHour] = useState("");
  const [selectedStageId, setSelectedStageId] = useState(null);
  const [currentContract, setCurrentContract] = useState(null);
  const [navigationStack, setNavigationStack] = useState([]);
  const [currentContractId, setCurrentContractId] = useState(null);

  const route = useRoute();

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async (client_id) => {
    if(client_id>0){
      try {
        const contracts = await ProgressServiceClient.getAllContratos(client_id);
        console.log("Contratos do cliente: ", contracts.client_id);
        setContracts(contracts);
      } catch (error) {
        console.error("Erro ao buscar contrato handle:", error);
      }
    }
    
  };

  const handleContractPress = async (selectedContract) => {
    try {
      setCurrentContract(selectedContract);
      setCurrentContractId(selectedContract.id);
      const stages = await ProgressServiceClient.getStagesByContractId(
        selectedContract.id
      );
      setProgressList(stages);
      setNavigationStack([selectedContract]);
    } catch (error) {
      console.error("Erro ao carregar etapas do contrato:", error);
    }
  };

  const handleNavigateBack = async () => {
    try {
      if (navigationStack.length > 1) {
        const previousContract = navigationStack[navigationStack.length - 2];
        const stages = await ContratoService.getStagesByContractId(
          previousContract.id
        );
        setProgressList(stages);
        setNavigationStack(navigationStack.slice(0, -1));
        setCurrentContract(previousContract);
      } else {
        setCurrentContract(null);
        setProgressList([]);
        setNavigationStack([]);
      }
    } catch (error) {
      console.error("Erro ao navegar de volta:", error);
    }
  };


  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contratos}>
        {!currentContract && (
          <FlatList
            data={contracts}
            ListEmptyComponent={() => (
              <View style={styles.emptyMessageContainer}>
                <Text style={styles.emptyMessage}>Não há contratos.</Text>
                <Icon_NoContract name="frowno" size={80} color={colors.cinzaClaro}/>
              </View>
            )}
            renderItem={({ item }) => (
              <Contract
                contract={item}
                onPress={() => handleContractPress(item)}
              />
            )}
            keyExtractor={(item) => (item.id ? item.id.toString() : "")}
          />
        )}

        {currentContract && (
          <FlatList
            data={progressList}
            ListEmptyComponent={() => (
              <View style={styles.emptyMessageContainer}>
                <Text style={styles.emptyMessage}>
                  Não há etapas para este contrato.
                </Text>
                <Icon_Question
                  name="question"
                  size={120}
                  color={colors.cinzaClaro}
                />
              </View>
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleStagePress(item)}
              ></TouchableOpacity>
            )}
            keyExtractor={(item) => (item.id ? item.id.toString() : "")}
          />
        )}
      </View>

      <RenderStage
        progressList={progressList}
      />

      <View style={styles.btnVoltar}>
      {currentContract && (
          <TouchableOpacity style={styles.btnBack} onPress={handleNavigateBack}>
            <Icon_Back name="arrow-back" size={40} color={"#000"} />
          </TouchableOpacity>
        )}
      </View>

      <Footer routeSelected={route.name} />
    </View>
    
  );
};

export default ProgressClient;
