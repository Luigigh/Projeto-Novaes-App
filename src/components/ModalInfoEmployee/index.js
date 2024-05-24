import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";

const ModalInfoEmployee = ({ visible, onClose, onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastName, setLastName] = useState(initialData.lastname);
  const [login, setLogin] = useState(initialData.login);
  const [office, setOffice] = useState(initialData.office);
  const PlaceholderImage = require("../../img/IconProfile.png");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setName(initialData.name);
    setLastName(initialData.lastname);
    setLogin(initialData.login);
    setOffice(initialData.office);
  }, [initialData]);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleModal}>Informações do gestor</Text>
          <Image
            source={selectedImage ? { uri: selectedImage } : PlaceholderImage}
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
                value={lastName}
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
