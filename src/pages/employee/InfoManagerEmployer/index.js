import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import IconCamera from "react-native-vector-icons/Entypo";
import IconPencil from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Styles";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ModalPhoto from "../../../components/ModalPhoto";
import ModalEditContact from "../../../components/ModalEditContact";
import * as ImagePicker from "expo-image-picker";
import colors from "../../../color";
import { LinearGradient } from "expo-linear-gradient";
import { useUser } from "../../../context/index.js";
import { saveProfilePhoto } from "../../../service/InfoManagerService";
import { getProfilePhotoUser, getUserLogged, addNewPofilePhotoUser } from "../../../service/UserService"; 

function InfoManagerEmployee({ navigation }) {
    const route = useRoute();
    const PlaceholderImage = require("../../../../src/img/IconProfile.png");
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
    const [idUserLogged , setIdUserLogged] = useState(0);
    const { user } = useUser();

    useState((() => {
      console.log("Usuario Logado:"+JSON.stringify(getUserLogged()));
      const response = getProfilePhotoUser(idUserLogged);
      if(!response == ''){
        setSelectedImage(response);
      }
    }),[])

    const openModal = () => {
        setModalVisibleEdit(true);
    };

    const closeModal = () => {
        setModalVisibleEdit(false);
    };

    const handleSubmit = (data) => {
        console.log("Dados atualizados:", data);
        closeModal();
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            setSelectedImage(imageUri);
            setModalVisible(true);

            if (user && user.id) {
                try {
                    await addNewPofilePhotoUser(idUserLogged, imageUri);
                    console.log("Foto salva com sucesso!");
                } catch (error) {
                    console.error("Erro ao salvar a foto:", error);
                }
            } else {
                console.error("Erro: user não está definido ou não possui um ID");
            }
        } else {
            console.log("Erro ao selecionar a Imagem");
        }
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.main}>
                <LinearGradient
                    style={styles.container_foto_user}
                    colors={[colors.primary, '#007B8F']}
                >
                    <View style={styles.fotoperfil}>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image
                                source={selectedImage ? { uri: selectedImage } : PlaceholderImage}
                                style={styles.imagem_perfil} />
                        </TouchableOpacity>
                        <View style={styles.imagem_camera}>
                            <TouchableOpacity onPress={pickImage}>
                                <IconCamera name="camera" size={33} color={'#FFF'} />
                            </TouchableOpacity>
                        </View>
                        <ModalPhoto
                            visible={modalVisible}
                            imageURL={selectedImage}
                            onClose={() => setModalVisible(false)} />
                    </View>
                </LinearGradient>

                <View style={styles.container_info_user}>
                    <Text style={styles.titleInfoContact}>Minhas informações</Text>
                    <ScrollView>
                        <View style={styles.campo_input}>
                            <Text style={styles.text_input}>Nome</Text>
                            <View style={styles.view_input}>
                                <Text style={styles.input_contato} placeholderTextColor="#ABABAB">
                                    {'user.name'}
                                </Text>
                                <TouchableOpacity style={styles.btn_editarContato} onPress={openModal}>
                                    <IconPencil name="pencil" size={25} color={'#FFF'} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.campo_input}>
                            <Text style={styles.text_input}>Sobrenome</Text>
                            <View style={styles.view_input}>
                                <Text style={styles.input_contato} placeholderTextColor="#ABABAB">
                                    {'user.lastname'}
                                </Text>
                                <TouchableOpacity style={styles.btn_editarContato} onPress={openModal}>
                                    <IconPencil name="pencil" size={25} color={'#FFF'} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.campo_input}>
                            <Text style={styles.text_input}>Email</Text>
                            <View style={styles.view_input}>
                                <Text style={styles.input_contato} placeholderTextColor="#ABABAB">
                                    {'user.email'}
                                </Text>
                                <TouchableOpacity style={styles.btn_editarContato} onPress={openModal}>
                                    <IconPencil name="pencil" size={25} color={'#FFF'} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.campo_input}>
                            <Text style={styles.text_input}>Cargo</Text>
                            <View style={styles.view_input}>
                                <Text style={styles.input_contato} placeholderTextColor="#ABABAB">
                                    {'user.role'}
                                </Text>
                                <TouchableOpacity style={styles.btn_editarContato} onPress={openModal}>
                                    <IconPencil name="pencil" size={25} color={'#FFF'} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ModalEditContact
                            visible={modalVisibleEdit}
                            onClose={closeModal}
                            onSubmit={handleSubmit}
                            initialData={{ name: 'user.name', lastName: 'user.lastname', email: 'user.email' }} />
                    </ScrollView>
                </View>
            </View>
            <Footer style={styles.footer} routeSelected={route.name} />
        </View>
    );
}

export default InfoManagerEmployee;
