import React, { useState } from "react";
import { View, Text, Modal, TextInput, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from "react-native-picker-select";
import ContratoService from "../../service/ContratoService";
import styles from "./Styles";
import {UserService} from '../../service/UserService';

const ModalAddContract = ({
  visible,
  onClose,
  onAdd,
  onSave,
  isEditing,
  title,
  setTitle,
  email,
  setEmail,
  contract,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState(null);
  const [status, setStatus] = useState(
    contract?.concluded ? "Concluído" : "Em andamento"
  );

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

  const handleAction = async () => {
    try {
      const contractData = {
        title: title,
        concluded: status === "Concluído",
        time: time,
        client: {
          login: email,
        },
      };

      if (isEditing) {
        await ContratoService.editContractById(contract.id, contractData);
      } else {
        await ContratoService.addContract(contractData);
      }

      onSave();
      setTitle("");
      setEmail("");
      setTime("Duração do Contrato");
      setStatus("");
    } catch (error) {
      console.error("Erro ao salvar contrato:", error);
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

          <View style={styles.inputStatus}>
            <RNPickerSelect
              onValueChange={(value) => setStatus(value)}
              items={[
                { label: "Em andamento", value: "Em andamento" },
                { label: "Concluído", value: "Concluído" },
              ]}
              value={status}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={handleAction}
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
