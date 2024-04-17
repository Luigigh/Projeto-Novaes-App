import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";

const ModalEditContact = ({ visible, onClose, onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastName, setLastName] = useState(initialData.lastName);
  const [email, setEmail] = useState(initialData.email);

  const handleSubmit = () => {
    onSubmit({ name, lastName, email });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleModal}>Editar Informações de Contato</Text>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              style={styles.inputs}
            />
            <TextInput
              placeholder="Sobrenome"
              value={lastName}
              onChangeText={setLastName}
              style={styles.inputs}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.inputs}
            />
            <View style={styles.buttons}>
              <TouchableOpacity onPress={handleSubmit} style={styles.btnEnviar}>
                <Text style={styles.txtButton}>Enviar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.btnCancelar}>
                <Text style={styles.txtButton}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalEditContact;
