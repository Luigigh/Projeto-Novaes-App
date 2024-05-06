import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon_Folder from "react-native-vector-icons/FontAwesome6";
import Icon_Edit from "react-native-vector-icons/AntDesign";
import Icon_Delete from "react-native-vector-icons/Entypo";
import Icon_Options from "react-native-vector-icons/SimpleLineIcons";
import styles from "./Styles";
import colors from "../../color";

const FolderItem = ({
  folder,
  onFolderPress,
  onDeleteFolder,
  onEditFolder,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <View style={styles.container}>
      <Icon_Folder style={styles.icon_Folder} name="folder-closed" size={35} color={colors.branco} />
      
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.ButtonName}
          onPress={() => onFolderPress(folder)}
        >
          <Text style={styles.Text}>{folder.name}</Text>
        </TouchableOpacity>
      </View>

      {showOptions && (
        <View style={styles.optionsFolder}>
          <TouchableOpacity
            style={styles.ButtonEdit}
            onPress={() => {
              onEditFolder(folder);
              toggleOptions();
            }}
          >
            <Icon_Edit name="edit" size={25} color={colors.branco} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ButtonDelete}
            onPress={() => {
              onDeleteFolder(folder);
              toggleOptions();
            }}
          >
            <Icon_Delete name="trash" size={25} color={colors.branco} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.BtnOption}>
        <TouchableOpacity style={styles.ButtonOptions} onPress={toggleOptions}>
          <Icon_Options
            name="options-vertical"
            size={25}
            color={colors.branco}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FolderItem;
