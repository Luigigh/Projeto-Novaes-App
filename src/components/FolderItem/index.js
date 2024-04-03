// FolderItem.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon_Entypo from "react-native-vector-icons/Entypo";
import Icon_Options from "react-native-vector-icons/SimpleLineIcons";
import styles from "./Styles";

const FolderItem = ({ folder, onFolderPress, onDeleteFolder }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleDelete = () => {
    onDeleteFolder(folder.id_Directory); // Chamando a função onDeleteFolder passando o id da pasta
    setShowOptions(false);
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
          <Text style={styles.lastModification}>
            Última Modificação: {folder.lastModification}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.options} onPress={toggleOptions}>
        <Icon_Options name="options-vertical" size={30} color={"#fff"} />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.MenuContainer}>
          <TouchableOpacity style={styles.Deletar} onPress={handleDelete}>
            <Text style={{ color: "#fff" }}>Deletar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FolderItem;
