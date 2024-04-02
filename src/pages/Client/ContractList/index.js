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
    const fileSystem = await ContractService.getFileSystem();
    if (fileSystem && fileSystem.length > 0) {
      setFolders(fileSystem[0].content);
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

  const handleDeleteFolder = async (folderName) => {
    try {
      await ContractService.deletarItem(folderName);
      loadFileSystem();
    } catch (error) {
      console.error("Erro ao deletar pasta:", error);
    }
  };

  const handleViewFolder = async (folder) => {
    setFolderStack([...folderStack, currentFolder]);
    setCurrentFolder(folder);
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
            {currentFolder.content.length > 0 ? (
              <FlatList
                style={styles.containerFlatList}
                data={currentFolder.content}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
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
            keyExtractor={(item) => item.name}
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
