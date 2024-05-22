import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import * as ImagePicker from "expo-image-picker";
import { saveProfilePhoto } from "../../service/InfoManagerService";

const ChangeProfilePhoto = ({ visible, onClose, userId }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleSubmit = async () => {
    try {
      if (selectedImage) {
        await saveProfilePhoto(selectedImage);
        onClose();
      } else {
        console.log("Selecione uma imagem.");
      }
    } catch (error) {
      console.error("Erro ao salvar a foto de perfil:", error);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleModal}>Trocar Foto de Perfil</Text>
          <TouchableOpacity onPress={pickImage} style={styles.btnSelectImage}>
            <Text style={styles.textBtnSelectImage}>Selecionar Imagem</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage }}
              style={styles.previewImage}
            />
          )}
          <TouchableOpacity onPress={handleSubmit} style={styles.btnSave}>
            <Text style={styles.textBtnSave}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.btnClose}>
            <Text style={styles.textBtnClose}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChangeProfilePhoto;
