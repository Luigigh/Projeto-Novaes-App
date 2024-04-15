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
  const [clockButtonIndex, setClockButtonIndex] = useState(null);
  const [title, setTitle] = useState(""); // Corrigido para "title"
  const [description, setDescription] = useState("");
  const [dateHour, setDateHour] = useState("");
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
      console.error('Erro ao buscar progressos:', error);
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
        }); // Corrigido para "title"
        setIsModalVisible(false);
        setEditingIndex(null);
      } else {
        await ProgressService.addStage({ title, description, dateHour }); // Corrigido para "title"
        setIsModalVisible(false);
      }
      fetchData();
    } catch (error) {
      console.error("Erro ao adicionar ou editar etapa:", error);
    }
  };

  const handleClockButtonClick = (index) => {
    setClockButtonIndex(index);
    setConfirmModalVisible(true);
  };

  const handleConfirm = async (confirmed) => {
    if (confirmed) {
      await ProgressService.deleteStage(progressList[clockButtonIndex].id);
      fetchData();
    }
    setConfirmModalVisible(false);
  };

  const handleDeleteProgress = async (index) => {
    await ProgressService.deleteStage(progressList[index].id);
    fetchData();
  };

  return (
    <View style={styles.container}>
      <Header />
      <ModalProgress
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAdd={handleAddProgress}
        isEditing={editingIndex !== null}
        tittle={title} // Corrigido para "title"
        setTittle={setTitle} // Corrigido para "setTitle"
        description={description}
        setDescription={setDescription}
        dateHour={dateHour}
        setDateHour={setDateHour}
      />

      <ModalConfirmacao
        visible={confirmModalVisible}
        onConfirm={() => handleConfirm(true)}
        onCancel={() => handleConfirm(false)}
      />

      <ModalRenderStage
        progressList={progressList}
        onDeleteProgress={handleDeleteProgress}
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
