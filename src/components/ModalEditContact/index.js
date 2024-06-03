import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";

const ModalEditContact = ({ visible, onClose, onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastName, setLastName] = useState(initialData.lastname);
  const [login, setLogin] = useState(initialData.login);
  const [office, setOffice] = useState(initialData.office);

  useEffect(() => {
    setName(initialData.name);
    setLastName(initialData.lastname);
    setLogin(initialData.login);
    setOffice(initialData.office);
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({ name, lastName, login, office });
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
              value={login}
              onChangeText={setLogin}
              style={styles.inputs}
            />
            <Text style={styles.inputOffice}>{office}</Text>
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
