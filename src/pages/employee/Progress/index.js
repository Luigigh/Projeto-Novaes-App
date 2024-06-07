import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
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
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import colors from "../../../color";

const Progress = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalAddProgressVisible, setIsModalAddProgressVisible]=useState(false);
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
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const { id_contract } = route.params;

  useFocusEffect(useCallback(() => {
    (async() => {
      fetchStages();
      console.log("id sendo recebido: " + id_contract);
    })();
    }, []));

  const fetchStages = async () => {
    setLoading(true);
    const stages = await ContratoService.getStagesByContractId(id_contract);
    setLoading(false);
    setProgressList(stages);
  };

  const handleNavigateBack = async () => {
    navigation.navigate("ListContractEmployee");
  };

  const handleAddProgress = async () => {
    try {
      let updatedProgressList;
      if (editingIndex !== null) {
        console.log("Editing id do contrato: ", id_contract);
        await ContratoService.editStage(progressList[editingIndex].id, {
          title,
          description,
          dateHour: new Date(dateHour).toISOString(),
          contract: { id: id_contract },
        });
        updatedProgressList = [...progressList];
        updatedProgressList[editingIndex] = {
          ...updatedProgressList[editingIndex],
          title,
          description,
          dateHour,
        };
        setEditingIndex(null);
      } else {
        console.log(
          "id do contrato: ",
          id_contract,
          "titulo: ",
          title,
          "Description: ",
          description,
          "dateHour",
          dateHour
        );
        const newDateHour = new Date(dateHour).toISOString();
        const newStage = await ContratoService.addStage({
          title,
          description,
          dateHour: newDateHour,
          status: false,
          contract: { id: id_contract },
        });
        console.log("Nova etapa adicionada:", newStage);
        updatedProgressList = [...progressList, newStage];
      }
      const updatedStages = await ContratoService.getStagesByContractId(
        id_contract
      );
      setProgressList(updatedStages);
      setIsModalVisible(false);
      setTitle("");
      setDescription("");
      setDateHour("");
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
      console.log("Etapa alterada com sucesso!");
      fetchStages();
    } catch (error) {
      console.error("Erro ao alterar status da etapa:", error);
    }
    setConfirmModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />

      <LoadingScreen visible={loading} />
      <View>
        {loading ? (
          <View style={styles.loadingContainer}></View>
        ) : (
          <View>
            {progressList && (
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

      <ModalAddContract
        visible={isModalAddProgressVisible}
        onClose={() => setIsModalAddProgressVisible(false)}
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
        setProgressList={setProgressList}
        onDeleteProgress={handleDeleteProgress}
        onEditProgress={handleEditProgress}
        onFinishStage={handleFinishStage}
        newItemTitle={title}
        newItemDescription={description}
        newItemDateHour={dateHour}
      />

      <View style={styles.addButton}>
        <TouchableOpacity
          onPress={() => handleNavigateBack()}
          style={styles.btnBack}
        >
          <Icon_Back name={"arrow-back"} size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnAdd}
          title="Adicionar"
          onPress={() => setIsModalVisible(true)}
          testID={"add-Button"}
        >
          <Icon_Plus name="plus" size={60} color={colors.branco} />
        </TouchableOpacity>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default Progress;
