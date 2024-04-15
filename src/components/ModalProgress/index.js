// src/components/ModalProgress/index.js

import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';

const ModalProgress = ({ visible, onClose, onAdd, isEditing, tittle, setTittle, description, setDescription, dateHour, setDateHour }) => {
  console.log("titulo:", tittle); 
  console.log("description:", description); 
  console.log("dataHora:", dateHour); 

  const handleAddProgress = () => {
    console.log("Dados a serem enviados:", { tittle, description, dateHour });
    // Chama a função onAdd passando os dados como parâmetros
    onAdd({ tittle, description, dateHour });
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>

          <Text style={styles.title}>{isEditing ? 'Editar Etapa' : 'Adicionar Etapa'}</Text>
          <TextInput
            style={styles.inputTitulo}
            placeholder="Título"
            value={tittle}
            onChangeText={text => setTittle(text)}
            maxLength={20}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />
          
          <TextInput
            style={styles.inputDescricao}
            placeholder="Descrição"
            value={description}
            onChangeText={text => setDescription(text)}
            maxLength={70}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />
          <TextInput
            style={styles.inputDataHora}
            placeholder="Data e Hora"
            value={dateHour}
            onChangeText={text => setDateHour(text)}
            maxLength={20}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={handleAddProgress}
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

export default ModalProgress;
