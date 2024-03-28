// ContractList.js

import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import FolderItem from '../../../components/FolderItem';
import ContractService from '../../../service/ContractService';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ModalFolder from '../../../components/ModalFolder'; // Importe o componente ModalFolder
import styles from './Styles';
import { useRoute } from '@react-navigation/native'


const ContractList = () => {
  const [folders, setFolders] = useState([]);
  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const [currentFolder, setCurrentFolder] = useState(null);
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

  const handleDeleteFolder = async (folderName) => {
    try {
      await ContractService.deleteFolder(folderName);
      setFolders(folders.filter(folder => folder.name !== folderName));
    } catch (error) {
      console.error('Erro ao deletar pasta:', error);
    }
  };

  const handleAddFolder = async (folderName) => {
    try {
      await ContractService.addFolder(folderName);
      setShowAddFolderModal(false); // Fechar o modal após adicionar a pasta
      loadFileSystem(); // Recarregar a lista de pastas
    } catch (error) {
      console.error('Erro ao adicionar pasta:', error);
    }
  };

  const handleViewFolder = async (folder) => {
    // Define a pasta atualmente exibida para a pasta clicada
    setCurrentFolder(folder);
  };

  return (
    <View style={styles.container}>
      <Header />

      {folders.map(folder => (
        <FolderItem key={folder.name} folder={folder} onDelete={handleDeleteFolder} onView={handleViewFolder}/>
      ))}

      <Button title="Adicionar Pasta" onPress={() => setShowAddFolderModal(true)} />

      
      {showAddFolderModal && (
        <ModalFolder
          visible={showAddFolderModal}
          onClose={() => setShowAddFolderModal(false)}
          onAddFolder={handleAddFolder}
        />
      )}

      <Footer routeSelected={route.name}/>
    </View>
  );
};

export default ContractList;
