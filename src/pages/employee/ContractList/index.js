// ContractList.js

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FolderItem from "../../../components/FolderItem";
import ModalFolder from "../../../components/ModalFolder";
import ContractService from "../../../service/ContractService";
import { useRoute } from "@react-navigation/native";
import Icon_Plus from 'react-native-vector-icons/Entypo';
import styles from "./Styles";

const ContractList = () => {
  const [folders, setFolders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const route = useRoute();

  useEffect(() => {
    fetchDirectories();
  }, []);

  const fetchDirectories = async () => {
    const directories = await ContractService.fetchDirectories();
    setFolders(directories);
  };

  const handleFolderPress = (folder) => {
    console.log("Pasta selecionada:", folder.name);
  };

  const handleAddFolder = async () => {
    setModalVisible(true); 
  };

  const handleConfirmAddFolder = async () => {
    await ContractService.addFolder(newFolderName); 
    setModalVisible(false); 
    fetchDirectories(); 
  };

  return (
    <View style={styles.container}>
      <Header />
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
        <Icon_Plus name="plus" size={50} color={'#fff'}/>
      </TouchableOpacity>
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
