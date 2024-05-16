import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, Platform } from "react-native";
import Icon_Download from "react-native-vector-icons/MaterialIcons";
import Icon_File from "react-native-vector-icons/FontAwesome5";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import styles from './Style';
import colors from "../../color";

const url = process.env.EXPO_PUBLIC_API_URL;

export default function FileItem({ file, onFilePress }) {

  async function handleDownload() {
    try {
      const fileUri = FileSystem.documentDirectory + file.name + '.pdf';
      const downloadResumable = FileSystem.createDownloadResumable(
        `${url}/archive/${file.id}`,
        fileUri,
        {},
        (downloadProgress) => {
          console.log(`Progresso de download: ${downloadProgress.totalBytesWritten} de ${downloadProgress.totalBytesExpectedToWrite}`);
        }
      );
      const downloadResponse = await downloadResumable.downloadAsync();

      if (downloadResponse?.uri) {
        await handleOpenFile(downloadResponse.uri);
      }
    } catch (error) {
      Alert.alert("Download", "Não foi possível realizar o download.");
      console.error(error);
    }
  }

  async function handleOpenFile(uri) {
    try {
      if (Platform.OS === 'android' && Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      } else if (Platform.OS === 'ios' && Sharing.shareAsync) {
        await Sharing.shareAsync(uri);
      } else {
        Alert.alert("Abrir arquivo", "Não é possível abrir o arquivo diretamente neste dispositivo.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o arquivo.");
      console.error(error);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon_File name="file-pdf" size={40} color={"#F40F02"} />

        <TouchableOpacity
          style={styles.ButtonName}
          onPress={() => onFilePress(file)}
        >
          <Text style={styles.Text}>{file.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDownload}>
        <Icon_Download name="file-download" size={35} color={colors.azul_claro} />
      </TouchableOpacity>
      </View>
      
    </View>
  );
}
