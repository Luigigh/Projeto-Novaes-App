import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FolderClient from "../../../components/FolderClient";
import FileItem from "../../../components/FileItem";
import ContractService from "../../../service/DirectoryService";
import { useRoute } from "@react-navigation/native";
import Icon_UploadFile from "react-native-vector-icons/Feather";
import Icon_Back from "react-native-vector-icons/Ionicons";
import Icon_EmptyFolder from "react-native-vector-icons/Ionicons";
import Icon_EmptyFile from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Styles";
import colors from "../../../color";
import { getDocumentAsync } from "expo-document-picker";



const DirectoryClient = () => {
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [folders, setFolders] = useState([]);
  const [navigationHistory, setNavigationHistory] = useState([]);
  const [files, setFiles] = useState([]);
  
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
      setFolders(response);
    } catch (error) {
      console.error("Erro ao buscar diretórios:", error);
    }
  };

  const fetchFiles = async (id_directory) => {
    try {
      let response;
      if (id_directory) {
        response = await ContractService.fetchFiles(id_directory);
      } else {
        response = await ContractService.fetchFiles();
      }
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

  const handleFilePress = (file) => {
    console.log("Arquivo selecionado:", file.name);
  };


  const handleNavigateBack = () => {
    const previousDirectory = navigationHistory.pop();
    setCurrentDirectory(previousDirectory);
    setNavigationHistory([...navigationHistory]);
  };

  const handleAddArchive = async () => {
    console.log("Função para subir arquivo chamada...")
    try {
      const file = await getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: false,
      });
      console.log(currentDirectory.id_Directory);
      if (!file.canceled) {
        const response = await ContractService.uploadFile(file,currentDirectory.id_Directory);
      } else {
        console.log("Seleção de arquivo cancelada");
      }

      handleNavigateBack();
    } catch (error) {
      console.error("Erro durante o envio do arquivo:", error);
      Alert.alert("Erro", "Não foi possível enviar o arquivo.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <FlatList
          style={styles.flatListContent}
          data={currentDirectory ? currentDirectory.subDirectories : folders}
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
              <FolderClient
                folder={item}
                onFolderPress={handleFolderPress}
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
          {navigationHistory.length > 0 && (
            <TouchableOpacity
              style={styles.btnBack}
              onPress={handleNavigateBack}
            >
              <Icon_Back name="arrow-back" size={40} color={"#000"} />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.btnPlus} onPress={handleAddArchive}>
            <Icon_UploadFile name="file-plus" size={40} color={"#F5665E"} />
          </TouchableOpacity>
        </View>
      </View>

      <Footer routeSelected={route.name} />
    </View>
  );
};

export default DirectoryClient;
