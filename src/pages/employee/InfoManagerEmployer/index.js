import React, { useState , useEffect} from "react";
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
import { saveProfilePhoto } from "../../../service/InfoManagerService";
import { getProfilePhotoUser, addNewProfilePhoto, userLogged } from "../../../service/UserService"; 

const initDataUser = [
    id="",
    nameUser ="",
    lastname = "",
    login = "",
    office = ""
]

function InfoManagerEmployee({ navigation }) {
    const route = useRoute();
    const PlaceholderImage = require("../../../../src/img/IconProfile.png");
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
    const [idUserLogged , setIdUserLogged] = useState(0);
    const [user , setUser] = useState(initDataUser);

    useEffect(() => {
        async function fetchProfilePhoto() {
          const base64Image = await getProfilePhotoUser(userLogged[0].id);
          if (base64Image) {
            setSelectedImage(`data:image/png;base64,${base64Image}`);
            setUser(userLogged[0]);
          }
        }
        
        fetchProfilePhoto();
      }, []);

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
          const image = result.assets[0];
          const response = await addNewProfilePhoto(image, userLogged[0].id);
          if (response) {
            console.log("Foto adicionada com Sucesso!");
            setSelectedImage(image.uri);
            setModalVisible(true);
          } else {
            console.log("Foto não adicionada!");
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
                        {selectedImage && (
                            <Image
                                source={{ uri: selectedImage }}
                                style={styles.imagem_perfil}
                            />
                        )}
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
                                    {user.nameUser}
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
                                    {user.lastname}
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
                                    {user.login}
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
                                    {user.office}
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
                            initialData={{ name: user.name, lastName: user.lastname, email: user.email }} />
                    </ScrollView>
                </View>
            </View>
            <Footer style={styles.footer} routeSelected={route.name} />
        </View>
    );
}

export default InfoManagerEmployee;
