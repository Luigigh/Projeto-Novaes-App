import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList, Share, Platform } from "react-native";
import Icon_Entypo from "react-native-vector-icons/Entypo";
import Icon_File from "react-native-vector-icons/Feather";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import styles from './Style';

const API_URL = 'http://192.168.15.31:8080/archive';
const PDF_NAME = "doc.pdf";

export default function FileItem({ file, onFilePress }) {

  async function handleDownload() {
    try {
      const fileUri = FileSystem.cacheDirectory + file.name;
      const downloadResumable = FileSystem.createDownloadResumable(
        `${API_URL}/${file.id}`,
        fileUri
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
      await Sharing.shareAsync(uri);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir o arquivo.");
      console.error(error);
    }
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon_File name="file" size={35} color={"grey"} />

        <TouchableOpacity
          style={styles.ButtonName}
          onPress={() => onFilePress(file)}
        >
          <Text style={styles.Text}>{file.name}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleDownload}>
        <Icon_Entypo name="download" size={30} color={"#000"} />
      </TouchableOpacity>
    </View>
  );
}

