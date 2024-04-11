import React from 'react';
import styles from "./Styles";
import { Modal, Image, TouchableOpacity, View } from 'react-native';
import IconClose from "react-native-vector-icons/AntDesign";

const ModalPhoto = ({ visible, imageURL, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <IconClose name="close" size={25} color={"white"} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {/* <Image source={{ uri: imageURL }} style={styles.image} /> */}
          {children ? children : <Image source={{ uri: imageURL }} style={styles.image} />}
        </View>
      </View>
    </Modal>
  );
};

export default ModalPhoto;
