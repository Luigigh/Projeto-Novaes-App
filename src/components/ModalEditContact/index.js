import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaskedTextInput } from "react-native-masked-text";
import styles from "./Styles";

const ModalEditContact = ({ visible, onClose, onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastname, setLastname] = useState(initialData.lastname);
  const [login, setLogin] = useState(initialData.login);
  const [phoneNumber , setPhoneNumber] = useState(null);
  const [office, setOffice] = useState(initialData.office);

  useEffect(() => {
    setName(initialData.name);
    setLastname(initialData.lastname);
    setLogin(initialData.login);
    setPhoneNumber(initialData.phoneNumber);
    setOffice(initialData.office);
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({ name, lastname, login,phoneNumber, office });
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
              value={lastname}
              onChangeText={setLastname}
              style={styles.inputs}
            />
            <TextInput
              placeholder="Email"
              value={login}
              onChangeText={setLogin}
              style={styles.inputs}
            />
            <MaskedTextInput
              style={styles.inputs}
              type={'custom'}
              options={{
                mask: '(99) 99999-9999'
              }}
              placeholder="Telefone"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholderTextColor={"#6B6D71"}
              fontSize={15}
              keyboardType="phone-pad"
              maxLength={15}
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
