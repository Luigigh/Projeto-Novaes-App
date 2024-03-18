import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';

const ModalProgress = ({ visible, onClose, onAdd, isEditing }) => {
  const [titulo, setTitulo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [dataHora, setDataHora] = React.useState('');

  const handleAddProgress = () => {
    // Chama a função onAdd passando os dados como parâmetros
    onAdd({ titulo, descricao, dataHora });
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
            value={titulo}
            onChangeText={setTitulo}
            maxLength={20}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />
          
          <TextInput
            style={styles.inputDescricao}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            maxLength={70}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />
          <TextInput
            style={styles.inputDataHora}
            placeholder="Data e Hora"
            value={dataHora}
            onChangeText={setDataHora}
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
