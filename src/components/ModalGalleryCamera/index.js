import React from 'react';
import styles from "./Styles";
import { Modal, Image, TouchableOpacity, View } from 'react-native';
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
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <IconClose name="close" size={25} color={"white"} />
                </TouchableOpacity>

                <View style={styles.boxContainer}>
                    <Text> style={styles.textEscolha}Escolha a ação que deseja</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={onCameraPress} style={styles.btn_modal}>
                            <IconCamera name="camera" size={33} color={"#FFF"} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onGalleryPress} style={styles.btn_modal}>
                            <IconGallery name="photo" size={33} color={"white"} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onClose} style={styles.btn_modal}>
                            <IconRemove name="trash-bin" size={33} color={"white"} />
                        </TouchableOpacity>

                        {children ? children : <Image source={{ uri: imageURL }} style={styles.image} />}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalGalleryCamera;
