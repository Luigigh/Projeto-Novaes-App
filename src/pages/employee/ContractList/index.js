// ContractList/index.js

import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import FolderItem from "../../../components/FolderItem";
import ContractService from "../../../service/ContractService";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ModalFolder from "../../../components/ModalFolder";
import Icon_Plus from "react-native-vector-icons/Entypo";
import Icon_Return from "react-native-vector-icons/Ionicons"
import styles from "./Styles";
import { useRoute } from "@react-navigation/native";

const ContractList = () => {
  const [folders, setFolders] = useState([]);
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [folderStack, setFolderStack] = useState([]);
  const route = useRoute();

  useEffect(() => {
    loadFileSystem();
  }, []);

  const loadFileSystem = async () => {
    try {
      const fileSystem = await ContractService.getFileSystem();
      if (fileSystem && fileSystem.length > 0) {
        setFolders(fileSystem);
      }
    } catch (error) {
      console.error("Erro ao carregar o sistema de arquivos:", error);
    }
  };

  const handleAddFolder = async (folderName) => {
    try {
      await ContractService.addFolder(folderName);
      setShowAddFolderModal(false);
      loadFileSystem();
    } catch (error) {
      console.error("Erro ao adicionar pasta:", error);
    }
  };

  const handleDeleteFolder = async (folderId) => {
    try {
      await ContractService.deleteFolder(folderId); // Correção: o parâmetro deveria ser o id da pasta, não o nome
      loadFileSystem();
    } catch (error) {
      console.error("Erro ao deletar pasta:", error);
    }
  };

  const handleViewFolder = (folder) => {
    setCurrentFolder(folder);
    setFolderStack([...folderStack, currentFolder]);
  };

  const handleGoBack = () => {
    if (folderStack.length > 0) {
      const previousFolder = folderStack.pop();
      setCurrentFolder(previousFolder);
      setFolderStack([...folderStack]);
    }
  };

  const renderItem = ({ item }) => (
    <FolderItem
      folder={item}
      onFolderPress={handleViewFolder}
      onDeleteFolder={handleDeleteFolder} // Adicionando a função onDeleteFolder
    />
  );

  const renderEmptyFolderMessage = () => {
    return (
      <View style={styles.emptyFolderContainer}>
        <Text style={styles.emptyFolderText}>Pasta Vazia</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        {currentFolder ? (
          <>
            <TouchableOpacity onPress={handleGoBack}>
               <Icon_Return name="return-up-back" size={50}/>
            </TouchableOpacity>
            {currentFolder.subDirectories.length > 0 ? (
              <FlatList
                style={styles.containerFlatList}
                data={currentFolder.subDirectories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id_Directory.toString()}
              />
            ) : (
              renderEmptyFolderMessage()
            )}
          </>
        ) : (
          <FlatList
            style={styles.containerFlatList}
            data={folders}
            renderItem={renderItem}
            keyExtractor={(item) => item.id_Directory.toString()}
          />
        )}

        {showAddFolderModal && (
          <ModalFolder
            style={styles.modals}
            visible={showAddFolderModal}
            onClose={() => setShowAddFolderModal(false)}
            onAddFolder={handleAddFolder}
          />
        )}

        <View style={styles.btnSpace}>
          <TouchableOpacity
            style={styles.btnAdd}
            title="Adicionar Pasta"
            onPress={() => setShowAddFolderModal(true)}
          >
            <Icon_Plus name="plus" size={55} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default ContractList;
