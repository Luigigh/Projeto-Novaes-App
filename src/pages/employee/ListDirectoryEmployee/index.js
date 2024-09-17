import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, Text, Alert } from "react-native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FolderItem from "../../../components/FolderItem";
import FileItem from "../../../components/FileItem";
import ModalFolder from "../../../components/ModalFolder";
import ContractService from "../../../service/DirectoryService";
import LoadingScreen from "../../../components/Loading";
import { useRoute } from "@react-navigation/native";
import Icon_UploadFolder from "react-native-vector-icons/Feather";
import Icon_UploadFile from "react-native-vector-icons/Feather";
import Icon_Back from "react-native-vector-icons/Ionicons";
import Icon_EmptyFolder from "react-native-vector-icons/Ionicons";
import Icon_EmptyFile from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Styles";
import colors from "../../../color";
import { documentDirectory } from "expo-file-system";
import { getDocumentAsync } from "expo-document-picker";

const ContractList = () => {
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [folders, setFolders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [navigationHistory, setNavigationHistory] = useState([]);
  const [files, setFiles] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editFolderId, setEditFolderId] = useState(null);
  const [loading, setLoading] = useState(true);

  const route = useRoute();

  useEffect(() => {
    fetchDirectories();
  }, []);

  useEffect(() => {
    if (currentDirectory) {
      fetchFiles(currentDirectory.id_Directory);
    }
  }, [currentDirectory]);

  const fetchDirectories = async (parentDirectoryId = null) => {
    try {
      const response = await ContractService.fetchDirectories(
        parentDirectoryId
      );
      setLoading(false);
      setFolders(response);
    } catch (error) {
      console.error("Erro ao buscar diretórios:", error);
    } finally {
    }
  };

  const fetchFiles = async (id_directory) => {
    setLoading(true);
    try {
      let response;
      if (id_directory) {
        response = await ContractService.fetchFiles(id_directory);
      } else {
        response = await ContractService.fetchFiles();
      }
      setLoading(false);
      setFiles(response);
    } catch (error) {
      console.error("Erro ao buscar arquivos front:", error);
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

  const handleFilePress = () => {
    handleNavigateBack();
  };

  const handleAddFolder = () => {
    setIsEditMode(false);
    setModalVisible(true);
  };

  const handleConfirmAddFolder = async () => {
    try {
      if (currentDirectory) {
        if (newFolderName == "") {
          Alert.alert(
            "Erro ao adicionar!",
            `O nome da pasta não deve ser vazio.`,
            [
              {
                text: "Fechar",
                style: "cancel",
              },
            ]
          );
        } else {
          await ContractService.addFolder(
            newFolderName,
            currentDirectory.id_Directory
          );
        }
      } else {
        if (newFolderName == "") {
          Alert.alert(
            "Erro ao adicionar!",
            `O nome da pasta não deve ser vazio.`,
            [
              {
                text: "Fechar",
                style: "cancel",
              },
            ]
          );
        } else {
          await ContractService.addFolder(newFolderName, 1);
        }
      }
      setModalVisible(false);
      console.log("Pasta adicionada:", newFolderName);
      fetchDirectories();
      setCurrentDirectory(null);
    } catch (error) {
      console.error("Erro ao adicionar pasta, requisição:", error);
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
      console.log("Pasta excluída:", folder.name);
      fetchDirectories();
      setCurrentDirectory(null);
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
      console.log("Pasta editada:", newFolderName);
      fetchDirectories();
      setCurrentDirectory(null);
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

  const handleAddArchive = async () => {
    if (!currentDirectory == "") {
      try {
        const file = await getDocumentAsync({
          type: "*/*",
          copyToCacheDirectory: false,
        });
        console.log(currentDirectory.id_Directory);
        if (!file.canceled) {
          const response = ContractService.uploadFile(
            file,
            currentDirectory.id_Directory
          );
        } else {
          console.log("Seleção de arquivo cancelada");
        }

        handleNavigateBack();
      } catch (error) {
        console.error("Erro durante o envio do arquivo:", error);
        Alert.alert(
          "Erro",
          "Não foi possível enviar o arquivo. Tente novamente mais tarde"
        );
      }
    } else {
      Alert.alert(
        "Voce não pode adicionar um arquivo aqui",
        "Entre em uma pasta já existente primeiro ou crie uma nova."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <LoadingScreen visible={loading} />

      <View style={styles.bodyy}>
        {loading ? (
          <View style={styles.loadingContainer}></View>
        ) : (
          <View style={styles.body}>
            <FlatList
              style={styles.flatListContent}
              data={
                currentDirectory ? currentDirectory.subDirectories : folders
              }
              ListEmptyComponent={() => (
                <View style={styles.emptyMessageContainer}>
                  <Text style={styles.Text}>Não contém pastas.</Text>
                  <Icon_EmptyFolder
                    style={styles.icon_emptyfolder}
                    name="folder-open-outline"
                    size={80}
                    color={colors.cinzaClaro}
                  />
                </View>
              )}
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
                style={styles.flatListContentFile}
                data={files}
                ListEmptyComponent={() => (
                  <View style={styles.emptyMessageContainer}>
                    <Text style={styles.Text}>Não contém arquivos.</Text>
                    <Icon_EmptyFile
                      style={styles.icon_emptyfolder}
                      name="file-question-outline"
                      size={80}
                      color={colors.cinzaClaro}
                    />
                  </View>
                )}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleFilePress(item)}>
                    <FileItem file={item} onFilePress={handleFilePress} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            )}

            <View style={styles.Options}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={handleAddFolder}
              >
                <Icon_UploadFolder
                  name="folder-plus"
                  size={40}
                  color={"#F8D775"}
                />
              </TouchableOpacity>
              {navigationHistory.length > 0 && (
                <TouchableOpacity
                  style={styles.btnBack}
                  onPress={handleNavigateBack}
                >
                  <Icon_Back name="arrow-back" size={40} color={"#000"} />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={handleAddArchive}
              >
                <Icon_UploadFile name="file-plus" size={40} color={"#F5665E"} />
              </TouchableOpacity>
            </View>
          </View>
        )}
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
