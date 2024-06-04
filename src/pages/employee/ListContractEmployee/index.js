import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList, ScrollView } from "react-native";
import Icon_Plus from "react-native-vector-icons/Entypo";
import Icon_Back from "react-native-vector-icons/Ionicons";
import Icon_Question from "react-native-vector-icons/AntDesign";
import Icon_NoContract from "react-native-vector-icons/AntDesign";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ModalProgress from "../../../components/ModalProgress";
import ModalConfirmacao from "../../../components/ModalStage";
import Contract from "../../../components/Contract";
import ContratoService from "../../../service/ContratoService";
import ModalRenderStage from "../../../components/ModalRenderStage";
import ModalAddContract from "../../../components/ModalAddContract";
import LoadingScreen from "../../../components/Loading";
import styles from "./Styles";
import colors from "../../../color";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { id } from "date-fns/locale";


const ListContractEmployee = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAddProgressVisible, setIsModalAddProgressVisible] = useState(false);
  const [progressList, setProgressList] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [selectedStageId, setSelectedStageId] = useState(null);
  const [currentContract, setCurrentContract] = useState(null);
  const [navigationStack, setNavigationStack] = useState([]);
  const [currentContractId, setCurrentContractId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();

  useFocusEffect(useCallback(() => {
    (async() => {   
      await fetchContracts();  
    })();
    }, []));

  const fetchContracts = async () => {
    try {
      
      const contractsData = await ContratoService.getAllContratos();
      console.log("teste")
      console.log(JSON.stringify(contractsData))
      setContracts(contractsData);
      console.log("contratos:"+JSON.stringify(contracts))
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar contratos:", error);
    }
  };

  const handleContractPress = async (selectedContract) => {
    try {
      navigation.navigate('Progress', { id_contract: selectedContract.id });
    } catch (error) {
      console.error("Erro ao carregar etapas do contrato:", error);
    }
  };

  function verifyIfEmpty() {
    if(title.trim() == "" || email.trim() == "" ||time.trim() == ""){
      console.log("Todos os campos devem ser Preenchidos...")
    }
  }

  const handleAddContract = async () => {
    verifyIfEmpty();
    console.log("data hora em hanlde for add-> "+time);
    try {
      const newContractData = {
        title: title,
        concluded: false, 
        time: time,
        client: {
          login: email
        }
      };
  
      const newContract = await ContratoService.addContract(newContractData);
      console.log("Novo contrato adicionado:", newContract);
  
      setTitle("");
      setEmail("");
      setTime("");
      setIsModalAddProgressVisible(false);
  
      fetchContracts();
    } catch (error) {
      console.error("Erro ao adicionar contrato:", error);
    }
  };
  

  const handleEditProgress = async (index) => {
    const item = progressList[index];
    setTitle(item.nomeContracto);
    setEmail(item.email);
    setTime(item.time);
    setEditingIndex(index);
    setIsModalVisible(true);
  };

  const handleFinishStage = async (stageId) => {
    setSelectedStageId(stageId);
    setConfirmModalVisible(true);
  };

  const handleConfirm = async () => {
    try {
      await ContratoService.updateStageStatus(selectedStageId);
      const updatedProgressList = progressList.map((stage) => {
        if (stage.id === selectedStageId) {
          return { ...stage, status: true };
        } else {
          return stage;
        }
      });
      setProgressList(updatedProgressList);
      console.log("Etapa concluída com sucesso!");
      fetchContracts();
    } catch (error) {
      console.error("Erro ao concluir a etapa:", error);
    }
    setConfirmModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />

      <LoadingScreen visible={loading} />
        
      {loading ? (
          <View style={styles.loadingContainer}></View>
        ) : (
          <View
            style={styles.listContainer}
          >
            {!currentContract && (
              <FlatList
                data={contracts}
                ListEmptyComponent={() => (
                  <View style={styles.emptyMessageContainer}>
                    <Text style={styles.emptyMessage}>Não há contratos.</Text>
                    <Icon_NoContract
                      name="frowno"
                      size={80}
                      color={colors.cinzaClaro}
                    />
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
          </View>
        )}
        

      <ModalAddContract
        visible={isModalAddProgressVisible}
        onAdd={handleAddContract}
        onClose={() => setIsModalAddProgressVisible(false)}
        title={title}
        setTitle={setTitle}
        email={email}
        setEmail={setEmail}
        time={time}
        setTime={setTime}
        
      />

      <View style={styles.addButton}>
        <TouchableOpacity
          style={styles.btnAdd}
          nomeContracto="Adicionar"
          onPress={() => setIsModalAddProgressVisible(true)}
          testID={"add-Button"}
        >
          <Icon_Plus name="plus" size={60} color={colors.contract} />
        </TouchableOpacity>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default ListContractEmployee;
