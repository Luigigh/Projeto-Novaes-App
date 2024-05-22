import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon_Folder from "react-native-vector-icons/Ionicons";
import Icon_Options from "react-native-vector-icons/SimpleLineIcons";
import styles from "./Styles";
import colors from "../../color";

const FolderClient = ({
  folder,
  onFolderPress,
}) => {

  return (
    <View style={styles.container}>
      <Icon_Folder style={styles.icon_Folder} name="folder-open-sharp" size={40} color={colors.folder} />
      
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.ButtonName}
          onPress={() => onFolderPress(folder)}
        >
          <Text style={styles.Text}>{folder.name}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.BtnOption}>
          <Icon_Options
            name="options-vertical"
            size={30}
            color={colors.branco}
          />
      </View>
    </View>
  );
};

export default FolderClient;
