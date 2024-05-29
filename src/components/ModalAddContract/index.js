
import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from "./Styles";

const ModalAddContract = ({ visible, onClose, onAdd, isEditing, nomeContrato, setNomeContrato, email, setEmail, dateHour, setDateHour, currentContractId }) => { 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    setDateHour(selectedDate);
    hideDatePicker();
  };

  const handleAddProgress = () => {
    console.log("Dados a serem enviados add:", { nomeContrato, email, dateHour, contract_id: currentContractId });
    onAdd({ nomeContrato, description, dateHour, contract_id: currentContractId });
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{isEditing ? 'Editar Contrato' : 'Adicionar Contrato'}</Text>
          <TextInput
            style={styles.inputTitulo}
            placeholder="Nome do Contrato"
            value={nomeContrato}
            onChangeText={text => setNomeContrato(text)}
            maxLength={20}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />
          
          <TextInput
            style={styles.inputDescricao}
            placeholder="Email do colaborador"
            value={email}
            onChangeText={text => setEmail(text)}
            maxLength={120}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />

          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              style={styles.inputDataHora}
              placeholder="Ultimo dia do contrato"
              value={dateHour}
              editable={false}
              placeholderTextColor={'#6B6D71'}
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
              onPress={handleAddProgress}
              testID={"save-button"}
            >
              <Text style={{color: 'white', fontSize: 18}}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCancel}
              onPress={onClose}
            >
              <Text style={{color: 'white', fontSize: 16.5}}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddContract;