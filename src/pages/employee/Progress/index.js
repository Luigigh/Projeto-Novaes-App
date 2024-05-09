import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import Icon_Plus from "react-native-vector-icons/Entypo";
import Icon_Back from "react-native-vector-icons/Ionicons";
import Icon_Question from "react-native-vector-icons/AntDesign";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ModalProgress from "../../../components/ModalProgress";
import ModalConfirmacao from "../../../components/ModalStage";
import ProgressService from "../../../service/ProgressService";
import Contract from "../../../components/Contract";
import ContratoService from "../../../service/ContratoService";
import ModalRenderStage from "../../../components/ModalRenderStage";
import styles from "./Styles";
import { useRoute } from "@react-navigation/native";
import colors from "../../../color";

const Progress = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [progressList, setProgressList] = useState([]);
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

  const fetchContracts = async () => {
    try {
      const contractsData = await ContratoService.getAllContratos();
      setContracts(contractsData);
    } catch (error) {
      console.error("Erro ao buscar contratos:", error);
    }
  };

  const handleContractPress = async (selectedContract) => {
    setCurrentContract(selectedContract);
    setCurrentContractId(selectedContract.id);
    setNavigationStack([...navigationStack, selectedContract]);
    const stages = await ContratoService.getStagesByContractId(
      selectedContract.id
    );
    setProgressList(stages);
  };

  const handleNavigateBack = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      const previousContract = newStack[newStack.length - 1];
      setCurrentContract(previousContract);
      const stages = ContratoService.getStagesByContractId(previousContract.id);
      setProgressList(stages);
      setNavigationStack(newStack);
    } else {
      setCurrentContract(null);
      setProgressList([]);
    }
  };

  const handleAddProgress = async () => {
    if (!title || !description || !dateHour || !currentContract) {
      console.error("Todos os campos devem ser preenchidos e um contrato deve ser selecionado.");
      return;
    }
  
    try {
      if (editingIndex !== null) {
        console.log("Editing id do contrato: ", currentContract.id);
        await ContratoService.editStage(progressList[editingIndex].id, {
          title,
          description,
          dateHour,
          contract: { id: currentContract.id}
        });
        setIsModalVisible(false);
        setEditingIndex(null);
        setTitle("");
        setDescription("");
        setDateHour("");
      } else {
        console.log("id do contrato: ", currentContract.id);
        await ContratoService.addStage({
          title,
          description,
          dateHour,
          status: false,
          contract: { id: currentContract.id}
        });
        setIsModalVisible(false);
      }
      fetchContracts();
    } catch (error) {
      console.error("Erro ao adicionar ou editar etapa handle:", error);
    }
  };
  

  const handleEditProgress = async (index) => {
    const item = progressList[index];
    setTitle(item.title);
    setDescription(item.description);
    setDateHour(item.dateHour);
    setEditingIndex(index);
    setIsModalVisible(true);
  };

  const handleDeleteProgress = async (index) => {
    try {
      await ContratoService.deleteStage(progressList[index].id);
      const updatedProgressList = progressList.filter((_, i) => i !== index);
      setProgressList(updatedProgressList);
    } catch (error) {
      console.error("Erro ao deletar a etapa:", error);
    }
  };

  const handleFinishStage = async (stageId) => {
    setSelectedStageId(stageId);
    setConfirmModalVisible(true);
  };
  

  const handleConfirm = async (confirmed, title, description, dateHour) => {
    if ((confirmed, title, description, dateHour)) {
      try {
        await ContratoService.updateStageStatus(selectedStageId, true, {
          title,
          description,
          dateHour,
          confirmed
        });
        console.log("Etapa concluída com sucesso!", title, description, dateHour, confirmed);

        fetchContracts();
      } catch (error) {
        console.error("Erro ao concluir a etapa:", error);
      }
    }
    setConfirmModalVisible(false);
  };


  return (
    <View style={styles.container}>
      <Header />

      <View>
        {!currentContract && (
          <FlatList
            data={contracts}
            ListEmptyComponent={() => (
              <View style={styles.emptyMessageContainer}>
                <Text style={styles.emptyMessage}>Não há contratos.</Text>
              </View>
            )}
            renderItem={({ item }) => (
              <Contract
                contract={item}
                onPress={() => handleContractPress(item)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}

        {currentContract && (
          <FlatList
            data={progressList}
            ListEmptyComponent={() => (
              <View style={styles.emptyMessageContainer}>
                <Text style={styles.emptyMessage}>
                  Não há estágios para este contrato.
                </Text>
                <Icon_Question name="question" size={80} color={colors.cinzaClaro}/>
              </View>
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleStagePress(item)}
              ></TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>

      <ModalProgress
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAdd={handleAddProgress}
        isEditing={editingIndex !== null}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        dateHour={dateHour}
        setDateHour={setDateHour}
        currentContractId={currentContractId}
      />

      <ModalConfirmacao
        visible={confirmModalVisible}
        onConfirm={() => handleConfirm(true, title, description, dateHour)}
        onCancel={() => setConfirmModalVisible(false)}
        title={title}
        description={description}
        dateHour={dateHour}
      />

      <ModalRenderStage
        progressList={progressList}
        onDeleteProgress={handleDeleteProgress}
        onEditProgress={handleEditProgress}
        onFinishStage={handleFinishStage}
        newItemTitle={title}
        newItemDescription={description}
        newItemDateHour={dateHour}
      />

      <View style={styles.addButton}>
        {currentContract && (
          <TouchableOpacity style={styles.btnBack} onPress={handleNavigateBack}>
            <Icon_Back name="arrow-back" size={40} color={"#000"} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.btnAdd}
          title="Adicionar"
          onPress={() => setIsModalVisible(true)}
        >
          <Icon_Plus name="plus" size={55} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default Progress;
