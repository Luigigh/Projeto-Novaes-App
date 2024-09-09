import React, { useState, useEffect } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DirectoryService from "../../service/DirectoryService";
import { MaskedTextInput } from "react-native-masked-text";
import styles from "./Styles";

const ModalEditClient = ({ visible, onClose, onSubmit, initialData }) => {
  const [name, setName] = useState(initialData.name);
  const [lastname, setLastname] = useState(initialData.lastname);
  const [login, setLogin] = useState(initialData.login);
  const [phoneNumber , setPhoneNumber ] = useState(initialData.phoneNumber);
  const [entrerprise_name, setEntrerprise_name] = useState(initialData.entrerprise_name);
  const [references_directory, setReferencesDirectory] = useState(initialData.references_directory);
  const [pickerItems, setPickerItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState(initialData.references_directory);

  const createPickerItems = (directoryNames) => {
    return directoryNames.map(directory => ({
      label: directory.nameDirectory,
      value: directory.idReferencesDirectory
    }));
  };

  useEffect(() => {
    const fetchDirectoryNames = async () => {
      const directoryNames = await DirectoryService.getDirectoryNames();
      if (directoryNames) {
        const items = createPickerItems(directoryNames);
        setPickerItems(items);
      }
    };

    fetchDirectoryNames();
  }, []);

  useEffect(() => {
    if (selectedValue !== null) {
      setReferencesDirectory(selectedValue);
    }
  }, [selectedValue]);

  useEffect(() => {
    setName(initialData.name);
    setLastname(initialData.lastname);
    setLogin(initialData.login);
    setPhoneNumber(initialData.phoneNumber);
    setEntrerprise_name(initialData.entrerprise_name);
    setReferencesDirectory(initialData.references_directory);
    setSelectedValue(initialData.references_directory);
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({ name, lastname, login,phoneNumber, entrerprise_name, references_directory });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.titleModal}>Editar Informações de Cliente</Text>
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
            <TextInput
              placeholder="Empresa"
              value={entrerprise_name}
              onChangeText={setEntrerprise_name}
              style={styles.inputs}
            />

            <View style={styles.inputs}>
              <RNPickerSelect
                onValueChange={(value) => setSelectedValue(value)}
                items={pickerItems}
                value={selectedValue}
                placeholder={{ label: 'Selecione um diretório', value: null }}
              />
            </View>

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

export default ModalEditClient;
