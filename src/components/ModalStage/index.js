import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './Styles';

const ModalConfirmacao = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Deseja Concluir a Etapa?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btnAdd} onPress={onConfirm}>
              <Text style={{ color: 'white', fontSize: 18 }}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
              <Text style={{ color: 'white', fontSize: 16.5 }}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmacao;
