import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon_Folder from "react-native-vector-icons/FontAwesome6";
import Icon_Edit from "react-native-vector-icons/AntDesign";
import Icon_Delete from "react-native-vector-icons/Entypo";
import styles from "./Styles";
import colors from "../../color";

const FolderItem = ({ folder, onFolderPress, onDeleteFolder, onEditFolder}) => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon_Folder name="folder-closed" size={35} color={"grey"} />

        <TouchableOpacity
          style={styles.ButtonName}
          onPress={() => onFolderPress(folder)}
        >
          <Text style={styles.Text}>{folder.name}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsFolder}>
        <TouchableOpacity
          style={styles.ButtonEdit}
          onPress={() => onEditFolder(folder)}
        >
          <Icon_Edit name="edit" size={25} color={colors.branco} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonDelete}
          onPress={() => onDeleteFolder(folder)}
        >
          <Icon_Delete name="trash" size={25} color={colors.branco} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default FolderItem;
