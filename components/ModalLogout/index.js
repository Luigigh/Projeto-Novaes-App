import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";

const ModalLogout = ({ visible, onClose, onLogout }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Tem certeza que deseja sair?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={onLogout}>
              <Text style={styles.modalButtonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalButtonNo]}
              onPress={onClose}
            >
              <Text style={styles.modalButtonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLogout;
