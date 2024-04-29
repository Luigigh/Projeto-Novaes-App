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
import colors from "../../../color";

const ContractList = () => {
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [folders, setFolders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [file, setFile] = useState([]);

  const route = useRoute();

  useEffect(() => {
    fetchDirectories();
    fetchFiles();
  }, []);

  const fetchDirectories = async (parentDirectoryId = null) => {
    try {
      const response = await ContractService.fetchDirectories(
        parentDirectoryId
      );
      setFolders(response);
    } catch (error) {
      console.error("Erro ao buscar diretórios:", error);
    }
  };

  const fetchFiles = async () => {
    const files = await ContractService.fetchFiles();
    setFile(files);
  };

  const handleFolderPress = async (folder) => {
    try {
      setCurrentDirectory(folder);
      await fetchDirectories(folder.id_Directory);
    } catch (error) {
      console.error("Erro ao navegar para a pasta:", error);
    }
  };

  const handleFilePress = (file) => {
    console.log("Arquivo selecionado:", file.name);
  };

  const handleAddFolder = () => {
    setModalVisible(true);
  };

  const handleConfirmAddFolder = async () => {
    try {
      if (currentDirectory) {
        await ContractService.addFolder(newFolderName, currentDirectory.id_Directory);
      } else {
        await ContractService.addFolder(newFolderName, 1);
      }
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
      <View style={styles.body}>
        <FlatList
          style={styles.flatListContent}
          data={currentDirectory ? currentDirectory.subDirectories : folders}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleFolderPress(item)}>
              <FolderItem folder={item} onFolderPress={handleFolderPress} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id_Directory.toString()}
        />
        <TouchableOpacity style={styles.btnPlus} onPress={handleAddFolder}>
          <Icon_Plus name="plus" size={55} color={"#fff"} />
        </TouchableOpacity>
      </View>

      <ModalFolder
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        newFolderName={newFolderName}
        onNewFolderNameChange={setNewFolderName}
        onConfirm={handleConfirmAddFolder}
      />
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default ContractList;