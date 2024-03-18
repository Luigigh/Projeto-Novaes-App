import React, { useState, useEffect } from "react";
import { View, Text , TouchableOpacity, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./Styles";
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import FolderItem from "../../components/FolderItem";
import FileItem from "../../components/FileItem";
import { ListItemsInDirectory } from "../../service/ContractService";
import Icon_beck from 'react-native-vector-icons/AntDesign';
import Icon_folder from 'react-native-vector-icons/Entypo'

export default function ContractList() {
  const [listArchive, setListArchive] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();

  async function atualizarListaDiretorios(nomeDirectory){
    setIsLoading(true);
    try {
      const list = await ListItemsInDirectory(nomeDirectory); 
      setListArchive(list);
    } catch (error) {
      console.error("Erro ao buscar lista de arquivos:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        atualizarListaDiretorios("root")
      } catch (error) {
        console.error("Erro ao buscar lista de arquivos:", error);
      }
    }
    fetchData();
  }, []);

  const renderListItems = () => {
    if (listArchive.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Icon_folder name="folder" size={90} color="#ccc" />
          <Text style={styles.emptyText}>Este diretório está vazio.</Text>
        </View>
      );
    } else {
      return listArchive.map((item, index) => {
        const key = `item_${index}`;
        const lastModification = item.lastModification;
        const isFile = item.type === "archive";
    
        if (isFile) {
          const fileName = item.name.split('.').shift();
          const extensionFile = item.name.split('.').pop();
          return <FileItem key={key} fileName={fileName} lastModification={lastModification} extensionFile={extensionFile} />;
        } else {
          return (
            <TouchableOpacity key={key} onPress={() => atualizarListaDiretorios(item.name)}>
              <FolderItem nameFolder={item.name} lastModification={lastModification} />
            </TouchableOpacity>
          );
        }
      });
    }
  };
  
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <View style={styles.caminhoContainer}>
          <Text style={styles.title}>Arquivos Disponíveis</Text>
          <TouchableOpacity style={styles.iconContainer} onPress={() => {atualizarListaDiretorios('root')}}>
            <Icon_beck name="back" size={30} color={"#000"}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        {isLoading ? ( 
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View style={styles.list}>
            {renderListItems()}
          </View>
        )}
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
}