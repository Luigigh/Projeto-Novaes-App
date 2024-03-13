import React, { useState, useEffect } from "react";
import { View, Text , TouchableOpacity, ActivityIndicator } from "react-native";
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
  const [isLoading, setIsLoading] = useState(false);
  const route = useRoute();

  async function atualizarListaDiretorios(nomeDirectory){
    setIsLoading(true); // Define isLoading como true quando a atualização da lista começa
    try {
      const list = await ListItemsInDirectory(nomeDirectory); 
      setListArchive(list);
      setCaminho(caminho+'/'+nomeDirectory)
    } catch (error) {
      console.error("Erro ao buscar lista de arquivos:", error);
    } finally {
      setIsLoading(false); // Define isLoading como false quando a atualização da lista termina
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
    return listArchive.map((item, index) => {
      const key = `item_${index}`;
      const lastModification = item.lastModification; // Altere para pegar a data de modificação do item
      const isFile = item.type === "archive"; // Verifica se é um arquivo
  
      if (isFile) {
        const fileName = item.name.split('.').shift(); // Extrai o nome do arquivo sem a extensão
        const extensionFile = item.name.split('.').pop(); // Extrai a extensão do arquivo
        return <FileItem key={key} fileName={fileName} lastModification={lastModification} extensionFile={extensionFile} />;
      } else {
        return (
          <TouchableOpacity key={key} onPress={() => atualizarListaDiretorios(item.name)}>
            <FolderItem nameFolder={item.name} lastModification={lastModification} />
          </TouchableOpacity>
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text>Arquivos Disponíveis</Text>
        <Text>{caminho}</Text>
        {isLoading ? ( // Se isLoading for verdadeiro, exibe a tela de carregamento
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          // Se isLoading for falso, exibe a lista de itens
          <View style={styles.list}>
            {renderListItems()}
          </View>
        )}
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
}
