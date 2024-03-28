import React, { useState } from 'react';
import { View, Modal, TextInput, Button } from 'react-native';

const ModalFolder = ({ visible, onClose, onAddFolder }) => {
  const [newFolderName, setNewFolderName] = useState('');

  const handleAddFolder = () => {
    onAddFolder(newFolderName);
    setNewFolderName('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
          <TextInput
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
            placeholder="Nome da Pasta"
            value={newFolderName}
            onChangeText={text => setNewFolderName(text)}
          />
          <Button title="Adicionar" onPress={handleAddFolder} />
          <Button title="Cancelar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalFolder;
