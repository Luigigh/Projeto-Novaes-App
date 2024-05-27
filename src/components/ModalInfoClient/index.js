import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import styles from "./Styles";

const ModalInfoClient = ({ visible, onClose, onSubmit, onDelete, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastName, setLastName] = useState(initialData.lastname);
  const [login, setLogin] = useState(initialData.login);
  const [enterpriseName, setEnterpriseName] = useState(initialData.entrerprise_name);
  const PlaceholderImage = require("../../img/IconProfile.png");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setName(initialData.name);
    setLastName(initialData.lastname);
    setLogin(initialData.login);
    setEnterpriseName(initialData.entrerprise_name);
  }, [initialData]);

  const handleDelete = () => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir este cliente?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => onDelete(initialData.id),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleModal}>Informações do cliente</Text>
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
              <Text style={styles.placeInputs}>Empresa</Text>
              <TextInput
                placeholder="Empresa"
                value={enterpriseName}
                editable={false}
                style={styles.inputs}
              />
            </View>
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity onPress={handleDelete} style={styles.btnExcluir}>
              <Text style={styles.txtButton}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.btnOk}>
              <Text style={styles.txtButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalInfoClient;
