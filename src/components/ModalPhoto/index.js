import React from 'react';
import { Modal, Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const ModalPhoto = ({ visible, imageURL, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeIcon}>X</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageURL }} style={styles.image} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeIcon: {
    width: 20,
    height: 20,
    color: '#fff',
  },
  imageContainer: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default ModalPhoto;
