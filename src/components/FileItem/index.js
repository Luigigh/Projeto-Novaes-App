import React from "react";
import { View, Text, TouchableOpacity, Alert, Platform, Linking } from "react-native";
import Icon_File from "react-native-vector-icons/FontAwesome5";
import Icon_Trash from 'react-native-vector-icons/Fontisto';
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import styles from './Style';
import colors from "../../color";
import DirectoryService from "../../service/DirectoryService";

const url = process.env.EXPO_PUBLIC_API_URL;

export default function FileItem({ file, onFilePress }) {

  async function handleDownload() {
    try {
      const fileUri = `${url}/archive/${file.id}`;
      const response = await fetch(fileUri);
      if (!response.ok) {
        throw new Error("Erro ao baixar o arquivo");
      }

      const blob = await response.blob();
      const blobString = await blobToBase64(blob);
      const localUri = `${FileSystem.documentDirectory}${file.name}`;
      await FileSystem.writeAsStringAsync(localUri, blobString, { encoding: FileSystem.EncodingType.Base64 });

      if (Platform.OS === 'android') {
        await Sharing.shareAsync(localUri);
      } else if (Platform.OS === 'ios') {
        Linking.openURL(localUri);
      }
    } catch (error) {
      Alert.alert("Download", "Não foi possível realizar o download.");
      console.error(error);
    }
  }

  async function handleDeleteFile() {
    try {
      const response = await DirectoryService.deleteFile(file.id);
      if (response) {
        Alert.alert("Arquivo deletado com sucesso", "");
        console.log("teste: " + JSON.stringify(onFilePress));
        onFilePress();
      } else {
        Alert.alert("Erro", "Arquivo não foi deletado!");
      }
    } catch (error) {
      console.error("Erro ao deletar arquivo:", error);
      Alert.alert("Erro", "Não foi possível deletar o arquivo.");
    }
  }

  async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.readAsDataURL(blob);
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={handleDownload}>
        <Icon_File name="file-pdf" size={40} color={"#F40F02"} />
        <TouchableOpacity
          style={styles.ButtonName}
          onPress={() => onFilePress(file)}
        >
          <Text style={styles.Text} onPress={handleDownload}>{file.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteFile}>
          <Icon_Trash name="trash" size={35} color={colors.azul_claro} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
