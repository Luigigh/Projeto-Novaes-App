import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon_Entypo from "react-native-vector-icons/Entypo";
import Icon_Options from "react-native-vector-icons/SimpleLineIcons";
import styles from "./Styles";

const FolderItem = ({ folder, onFolderPress }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const editar = () => {
    // Implemente a lógica para editar a pasta aqui
    console.log("Editar pasta:", folder.name);
    setShowOptions();
  };

  const deletar = () => {
    // Implemente a lógica para deletar a pasta aqui
    console.log("Deletar pasta:", folder.name);
    setShowOptions();
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onFolderPress(folder)}
      >
        <View style={styles.iconFolder}>
          <Icon_Entypo name="folder" size={30} color={"#fff"} />
        </View>

          <View style={styles.content}>
            <Text style={styles.nameFolder}>{folder.name}</Text>
            <Text style={styles.lastModification}>Última Modificação: {folder.lastModification}</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.options} onPress={toggleOptions}>
        <Icon_Options name="options-vertical" size={30} color={"#fff"} />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.MenuContainer}>
          <TouchableOpacity style={styles.Editar} onPress={editar}>
            <Text style={{color: "#fff"}}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Deletar} onPress={deletar}>
            <Text style={{color: "#fff"}}>Deletar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FolderItem;
