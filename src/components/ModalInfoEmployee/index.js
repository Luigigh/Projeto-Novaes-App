import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import { getProfilePhotoUser } from '../../service/UserService';

const ModalInfoEmployee = ({ visible, onClose, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastname, setLastName] = useState(initialData.lastname);
  const [login, setLogin] = useState(initialData.login);
  const [office, setOffice] = useState(initialData.office);
  const PlaceholderImage = require("../../img/IconProfile.png");
  const [selectedImage, setSelectedImage] = useState(null);
  const [profilePhotoExist, setProfilePhotoExist] = useState(false);

  useEffect(() => {
    setName(initialData.name);
    setLastName(initialData.lastname);
    setLogin(initialData.login);
    setOffice(initialData.office);

    const fetchProfilePhoto = async () => {
      try {
        const base64Image = await getProfilePhotoUser(initialData.id);
        if (base64Image) {
          setSelectedImage(`data:image/png;base64,${base64Image}`);
          setProfilePhotoExist(true);
        } else {
          setSelectedImage(null);
          setProfilePhotoExist(false);
        }
      } catch (error) {
        console.error("Erro ao buscar a imagem do perfil:", error);
        setSelectedImage(null);
        setProfilePhotoExist(false);
      }
    };

    if (initialData.id) {
      fetchProfilePhoto();
    }
  }, [initialData]);

  const handleSubmit = async (data) => {
    console.log("Dados a serem enviados:", data);
    try {
      const response = await updateEmployee(user.id, data);
      console('Estou aqui')
      if (response) {
        setUser({ ...user, ...data });
        console.log("Dados atualizados com sucesso!");
      } else {
        console.error("Erro ao atualizar os dados");
      }
    } catch (error) {
      console.error("Erro ao enviar dados atualizados:", error);
    } finally {
      closeModal();
    }
  };  

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleModal}>Informações do gestor</Text>
          <Image
            source={profilePhotoExist ? { uri: selectedImage } : PlaceholderImage}
            style={styles.imagem_perfil}
          />
          <View style={styles.containerInputs}>
            <View style={styles.contInput}>
              <Text style={styles.placeInputs}>Nome</Text>
              <TextInput
                placeholder="Nome"
                value={name}
                editable={false}
                style={styles.inputs}
              />
            </View>

            <View style={styles.contInput}>
              <Text style={styles.placeInputs}>Sobrenome</Text>
              <TextInput
                placeholder="Sobrenome"
                value={lastname}
                editable={false}
                style={styles.inputs}
              />
            </View>

            <View style={styles.contInput}>
              <Text style={styles.placeInputs}>Email</Text>
              <TextInput
                placeholder="Email"
                value={login}
                editable={false}
                style={styles.inputs}
              />
            </View>

            <View style={styles.contInput}>
              <Text style={styles.placeInputs}>Cargo</Text>
              <TextInput
                placeholder="Empresa"
                value={office}
                editable={false}
                style={styles.inputs}
              />
            </View>
          </View>

          <TouchableOpacity onPress={onClose} style={styles.btnOk}>
            <Text style={styles.txtButton}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalInfoEmployee;
