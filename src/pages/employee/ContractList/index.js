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
import Icon_Back from "react-native-vector-icons/Ionicons";
import styles from "./Styles";
import colors from "../../../color";

const ContractList = () => {
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [folders, setFolders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [navigationHistory, setNavigationHistory] = useState([]);
  const [files, setFiles] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editFolderId, setEditFolderId] = useState(null);

  const route = useRoute();

  useEffect(() => {
    fetchDirectories();
  }, []);

  useEffect(() => {
    if (currentDirectory) {
      fetchFiles();
    }
  }, [currentDirectory]);

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

  const fetchFiles = async (parentDirectoryId = null) => {
    try {
      const response = await ContractService.fetchFiles(parentDirectoryId);
      setFiles(response);
    } catch (error) {
      console.error("Erro ao buscar arquivos:", error);
    }
  };

  const handleFolderPress = async (folder) => {
    try {
      setNavigationHistory([...navigationHistory, currentDirectory]);
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
    setIsEditMode(false);
    setModalVisible(true);
  };

  const handleConfirmAddFolder = async () => {
    try {
      if (currentDirectory) {
        await ContractService.addFolder(
          newFolderName,
          currentDirectory.id_Directory
        );
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

  const handleNavigateBack = () => {
    const previousDirectory = navigationHistory.pop();
    setCurrentDirectory(previousDirectory);
    setNavigationHistory([...navigationHistory]);
  };

  const handleDeleteFolder = async (folder) => {
    try {
      await ContractService.deleteFolder(folder.id_Directory);
      fetchDirectories();
      console.log("Pasta excluída:", folder.name);
    } catch (error) {
      console.error("Erro ao excluir pasta:", error);
    }
  };

  const handleConfirmEditFolder = async () => {
    try {
      if (currentDirectory) {
        await ContractService.updateFolder(
          editFolderId,
          newFolderName,
          currentDirectory.id_Directory
        );
      } else {
        await ContractService.updateFolder(editFolderId, newFolderName, 1);
      }
      setModalVisible(false);
      fetchDirectories();
      console.log("Pasta editada:", newFolderName);
    } catch (error) {
      console.error("Erro ao editar pasta ContractList:", error);
    }
  };

  const handleEditFolder = async (folder) => {
    setEditFolderId(folder.id_Directory);
    setNewFolderName(folder.name);
    setIsEditMode(true);
    setModalVisible(true);
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
              <FolderItem
                folder={item}
                onFolderPress={handleFolderPress}
                onDeleteFolder={handleDeleteFolder}
                onEditFolder={handleEditFolder}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id_Directory.toString()}
        />

        {currentDirectory && currentDirectory.id_Directory && (
          <FlatList
            style={styles.flatListContent}
            data={files}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleFilePress(item)}>
                <FileItem file={item} onFilePress={handleFilePress} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}

        <View style={styles.Options}>
          <TouchableOpacity style={styles.btnPlus} onPress={handleAddFolder}>
            <Icon_Plus name="plus" size={55} color={"#fff"} />
          </TouchableOpacity>
          {navigationHistory.length > 0 && (
            <TouchableOpacity
              style={styles.btnBack}
              onPress={handleNavigateBack}
            >
              <Icon_Back name="arrow-back" size={40} color={"#000"} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ModalFolder
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setIsEditMode(false);
          setEditFolderId(null);
          setNewFolderName("");
        }}
        newFolderName={newFolderName}
        onNewFolderNameChange={setNewFolderName}
        onConfirm={
          isEditMode ? handleConfirmEditFolder : handleConfirmAddFolder
        }
        isEditMode={isEditMode}
      />
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default ContractList;
