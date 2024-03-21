import React from 'react';
import styles from "./Styles";
import { Modal, Image, TouchableOpacity, View, Text } from 'react-native';
import IconClose from "react-native-vector-icons/AntDesign";
import IconCamera from "react-native-vector-icons/Entypo";
import IconGallery from "react-native-vector-icons/Foundation";
import IconRemove from "react-native-vector-icons/Ionicons";

const ModalGalleryCamera = ({ visible, onClose, onCameraPress, onGalleryPress }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <IconClose name="close" size={25} color={"black"} />
                    </TouchableOpacity>
                    <Text style={styles.textEscolha}>Escolha a ação que deseja:</Text>
                    <TouchableOpacity onPress={onCameraPress} style={styles.btn_modal}>
                        <IconCamera name="camera" size={30} color={"black"} />
                        <Text style={styles.textOpen}>Abrir Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onGalleryPress} style={styles.btn_modal}>
                        <IconGallery name="photo" size={30} color={"black"} />
                        <Text style={styles.textOpen}>Abrir Galeria</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        
    );
};

export default ModalGalleryCamera;