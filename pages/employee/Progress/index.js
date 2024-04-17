import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import Icon_Plus from "react-native-vector-icons/Entypo";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ModalProgress from "../../../components/ModalProgress";
import ModalConfirmacao from "../../../components/ModalStage";
import ProgressService from "../../../service/ProgressService";
import ModalRenderStage from "../../../components/ModalRenderStage";
import styles from "./Styles";
import { useRoute } from "@react-navigation/native";

const Progress = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [progressList, setProgressList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateHour, setDateHour] = useState("");
  const [selectedStageId, setSelectedStageId] = useState(null);
  const route = useRoute();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const progress = await ProgressService.getAllStages();
      console.log("Dados das etapas:", progress);
      setProgressList(progress);
    } catch (error) {
      console.error("Erro ao buscar progressos:", error);
    }
  };

  const handleAddProgress = async () => {
    if (!title || !description || !dateHour) {
      console.error("Todos os campos devem ser preenchidos.");
      return;
    }

    try {
      if (editingIndex !== null) {
        await ProgressService.editStage(progressList[editingIndex].id, {
          title,
          description,
          dateHour,
        });
        setIsModalVisible(false);
        setEditingIndex(null);
        setTitle("");
        setDescription("");
        setDateHour("");
      } else {
        await ProgressService.addStage({ title, description, dateHour });
        setIsModalVisible(false);
      }
      fetchData();
    } catch (error) {
      console.error("Erro ao adicionar ou editar etapa:", error);
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
    await ProgressService.deleteStage(progressList[index].id);
    fetchData();
  };

  const handleFinishStage = async (stageId) => {
    setSelectedStageId(stageId);

    setConfirmModalVisible(true);
  };

  const handleConfirm = async (confirmed, title, description, dateHour) => {
    if ((confirmed, title, description, dateHour)) {
      try {
        await ProgressService.updateStageStatus(selectedStageId, true, {
          title,
          description,
          dateHour,
        });
        console.log("Etapa concluída com sucesso!");

        fetchData();
      } catch (error) {
        console.error("Erro ao concluir a etapa:", error);
      }
    }

    setConfirmModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />
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
