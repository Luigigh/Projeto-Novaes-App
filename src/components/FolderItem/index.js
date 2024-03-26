import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon_Entypo from "react-native-vector-icons/Entypo";
import Icon_Awesome from "react-native-vector-icons/FontAwesome";
import Icon_Edit from "react-native-vector-icons/FontAwesome";
import Icon_Trash from "react-native-vector-icons/Entypo";
import styles from "./Styles";
import colors from "../../color";
import * as ContractService from "../../service/ContractService"; // Importe o módulo ContractService

export default function FolderItem({ nameFolder, lastModification, parentDirectory, onEdit, onDelete }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleEdit = async () => {
    // Chama a função de edição do ContractService
    try {
      // Aqui você deve implementar a lógica para abrir um modal ou tela de edição do diretório
      // Isso pode envolver navegação para outra tela ou a abertura de um modal com campos para edição
      // Uma vez editado, você pode chamar a função AddDirectory do ContractService para salvar as alterações
      // Exemplo:
      // const editedDirectoryName = 'Novo nome'; // Supondo que você tenha o novo nome do diretório
      // await ContractService.AddDirectory(editedDirectoryName, parentDirectory);
      // Em seguida, atualize a interface para refletir as alterações, se necessário
      onEdit(); // Chama a função de callback passada para atualizar a interface
    } catch (error) {
      console.error("Erro ao editar diretório:", error);
    }
  };

  const handleDelete = async () => {
    // Chama a função de exclusão do ContractService
    try {
      await ContractService.RemoveDirectory(nameFolder, parentDirectory);
      onDelete(); // Chama a função de callback passada para atualizar a interface
    } catch (error) {
      console.error("Erro ao deletar diretório:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Icon_Awesome name="paste" size={30} color={"#FFF"} />
      <View style={styles.right}>
        <View style={styles.InformationPaste}>
          <View style={styles.content}>
            <Text style={styles.nameFolder}>{nameFolder}</Text>
            <Text style={styles.lastModification}>
              Última Modificação: {lastModification}
            </Text>
          </View>
          <TouchableOpacity onPress={toggleOptions} style={styles.btnOptions}>
            <Icon_Entypo name="dots-three-vertical" size={30} color={"#FFF"} />
          </TouchableOpacity>
        </View>
        {showOptions && (
          <View style={styles.optionContainer}>
            <TouchableOpacity onPress={handleEdit} style={styles.option}>
              <Icon_Edit name="edit" size={20} color={"#000"} />
              <Text style={styles.optionText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} style={styles.option}>
              <Icon_Trash name="trash" size={20} color={"#000"} />
              <Text style={styles.optionText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}