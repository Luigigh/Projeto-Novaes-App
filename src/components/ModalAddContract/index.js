import React, { useState } from "react";
import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ContratoService from "../../service/ContratoService";
import styles from "./Styles";

const ModalAddContract = ({
  visible,
  onClose,
  onAdd,
  isEditing,
  title,
  setTitle,
  email,
  setEmail,
  contract
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState(0);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    setTime(selectedDate);
    hideDatePicker();
  };

  const handleAddContract = async () => {
    console.log("data hora em hanlde for add-> " + time);
    try {
      const newContractData = {
        title: title,
        concluded: false,
        time: time,
        client: {
          login: email,
        },
      };

      
      const newContract = await ContratoService.addContract(newContractData);
      console.log("Novo contrato adicionado:", newContract);
      setTitle("");
      setEmail("");
      setTime("");
      onClose();
    } catch (error) {
      console.error("Erro ao adicionar contrato:", error);
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            {isEditing ? "Editar Contrato" : "Adicionar Contrato"}
          </Text>
          <TextInput
            style={styles.inputTitulo}
            placeholder="Nome do Contrato"
            value={title}
            onChangeText={(text) => setTitle(text)}
            maxLength={20}
            placeholderTextColor={"#6B6D71"}
            fontSize={15}
          />

          <TextInput
            style={styles.inputDescricao}
            placeholder="Email do colaborador"
            value={email}
            onChangeText={(text) => setEmail(text)}
            maxLength={120}
            placeholderTextColor={"#6B6D71"}
            fontSize={15}
          />

          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              style={styles.inputDataHora}
              placeholder="Ultimo dia do contrato"
              value={time !== null ? time.toString() : ""}
              editable={false}
              placeholderTextColor={"#6B6D71"}
              fontSize={15}
            />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={handleAddContract}
              testID={"save-button"}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCancel} onPress={onClose}>
              <Text style={{ color: "white", fontSize: 16.5 }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddContract;
