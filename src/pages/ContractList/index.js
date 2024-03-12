import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import styles from "./Styles";
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import FolderItem from "../../components/FolderItem";
import FileItem from "../../components/FileItem";
import { ListItemsInDirectory } from "../../service/ContractService";

export default function ContractList() {
  const [caminho, setCaminho] = useState('Caminho:');
  const [listArchive, setListArchive] = useState([]);
  const route = useRoute();

  useEffect(() => {
    async function fetchData() {
      try {
        const list = await ListItemsInDirectory("Produtos_Entregues"); 
        setListArchive(list);
      } catch (error) {
        console.error("Erro ao buscar lista de arquivos:", error);
      }
    }
    fetchData();
  }, []);

  const renderListItems = () => {
    return listArchive.map((item, index) => {
      const key = `item_${index}`;
      const lastModification = item.lastModification; // Altere para pegar a data de modificação do item
      const isFile = item.type === "archive"; // Verifica se é um arquivo

      if (isFile) {
        const fileName = item.name.split('.').shift(); // Extrai o nome do arquivo sem a extensão
        const extensionFile = item.name.split('.').pop(); // Extrai a extensão do arquivo
        return <FileItem key={key} fileName={fileName} lastModification={lastModification} extensionFile={extensionFile} />;
      } else {
        return <FolderItem key={key} nameFolder={item.name} lastModification={lastModification} />;
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text>Arquivos Disponíveis</Text>
        <View style={styles.list}>
          {renderListItems()}
        </View>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
}
