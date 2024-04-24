import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FolderItem from "../../../components/FolderItem";
import FileItem from "../../../components/FileItem";
import ModalFolder from "../../../components/ModalFolder";
import ContractService from "../../../service/ContractService";
import { useRoute } from "@react-navigation/native";
import Icon_Plus from "react-native-vector-icons/Entypo";
import styles from "./Styles";

const ContractList = () => {
  const [folders, setFolders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [file, setFile] = useState([]);
  const route = useRoute();

  useEffect(() => {
    fetchDirectories();
    fetchFiles();
  }, []);

  const fetchDirectories = async () => {
    const directories = await ContractService.fetchDirectories();
    setFolders(directories);
  };

  const fetchFiles = async () => {
    const files = await ContractService.fetchFiles();
    setFile(files);
  };

  const handleFolderPress = (folder) => {
    console.log("Pasta selecionada:", folder.name);
  };

  const handleFilePress = (file) => {
    console.log("Arquivo selecionado:", file.name);
  };

  const handleAddFolder = () => {
    setModalVisible(true);
  };

  const handleConfirmAddFolder = async () => {
    try {
      await ContractService.addFolder(newFolderName);
      setModalVisible(false);
      fetchDirectories();
      console.log("Pasta adicionada:", newFolderName);
    } catch (error) {
      console.error("Erro ao adicionar pasta:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.ViewFlatList}>
        <FlatList
          data={folders}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleFolderPress(item)}>
              <FolderItem folder={item} onFolderPress={handleFolderPress} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?.id?.toString()}
        />

        <TouchableOpacity style={styles.btnPlus} onPress={handleAddFolder}>
          <Icon_Plus name="plus" size={55} color={"#fff"} />
        </TouchableOpacity>
        <ModalFolder
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          newFolderName={newFolderName}
          onNewFolderNameChange={setNewFolderName}
          onConfirm={handleConfirmAddFolder}
        />
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default ContractList;
