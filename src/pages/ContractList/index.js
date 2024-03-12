import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import { useNavigation , useRoute} from "@react-navigation/native";
import styles from "./Styles";
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import FolderItem from "../../components/FolderItem";

const TrasformListInListRoot = () => {
  return [
    'Arquivos_Administrativos',
    'Produtos_Entregues'
  ];
}


export default function ContractList() {
  const [caminho , setCaminho] = useState('Caminho:');
  const [listArchive, setListArchive] = useState(() => TrasformListInListRoot());
  const route = useRoute();

  
  

  return (
    <View style={styles.container}>
      <Header/>
        <View>
          {/* <Text>Arquivos Disponiveis</Text>
          <Text>{caminho}</Text> */}
          <View>
            <FolderItem nameFolder={'Contrato'} lastModification={'09/03/2024'}></FolderItem>
          </View>
        </View>
      <Footer routeSelected={route.name}/>
    </View>
  );
}
