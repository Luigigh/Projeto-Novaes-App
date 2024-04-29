import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import IconCamera from "react-native-vector-icons/Entypo";
import IconArrow from "react-native-vector-icons/Ionicons";
import IconPencil from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./Styles";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ModalPhoto from "../../../components/ModalPhoto";
import ModalEditContact from "../../../components/ModalEditContact"; // Importe o ModalEditContact
import * as ImagePicker from "expo-image-picker";
import colors from "../../../color";
import { LinearGradient } from "expo-linear-gradient";
import { useUser } from "../../../context/index.js";

const InfoManager = ({ navigation }) => {
  const route = useRoute();
  const PlaceholderImage = require("../../../../src/img/IconProfile.png");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const { username } = useUser();

  const openModal = () => {
    setModalVisibleEdit(true);
  };

  const closeModal = () => {
    setModalVisibleEdit(false);
  };

  const handleSubmit = (data) => {
    // Lógica para lidar com os dados atualizados
    console.log("Dados atualizados:", data);
    // Aqui você pode enviar os dados atualizados para o backend, por exemplo
    closeModal();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setModalVisible(true);
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
          colors={[colors.primary, "#007B8F"]}
        >
          <View style={styles.fotoperfil}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                source={
                  selectedImage ? { uri: selectedImage } : PlaceholderImage
                }
                style={styles.imagem_perfil}
              />
            </TouchableOpacity>
            <View style={styles.imagem_camera}>
              <TouchableOpacity onPress={pickImage}>
                <IconCamera name="camera" size={33} color={"#FFF"} />
              </TouchableOpacity>
            </View>
            <ModalPhoto
              visible={modalVisible}
              imageURL={selectedImage}
              onClose={() => setModalVisible(false)}
            />
          </View>
        </LinearGradient>

        <View style={styles.container_info_user}>
          {/* <TouchableOpacity
            style={styles.containerBack}
            onPress={() => navigation.navigate("Contacts")}
          >
            <IconArrow name="arrow-undo-outline" size={33} color={"#007B8F"} />
            <Text style={styles.textBack}>Voltar</Text>
          </TouchableOpacity> */}

          <ScrollView>
            <Text style={styles.titleInfoContact}>Informações do usuário:</Text>
            <View style={styles.campo_input}>
              <Text style={styles.text_input}>Nome</Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {username}
                </Text>
                <TouchableOpacity
                  style={styles.btn_editarContato}
                  onPress={openModal}
                >
                  <IconPencil name="pencil" size={25} color={"#FFF"} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.campo_input}>
              <Text style={styles.text_input}>Sobrenome</Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {username}
                </Text>
                <TouchableOpacity
                  style={styles.btn_editarContato}
                  onPress={openModal}
                >
                  <IconPencil name="pencil" size={25} color={"#FFF"} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.campo_input}>
              <Text style={styles.text_input}>Email</Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {username}
                </Text>
                <TouchableOpacity
                  style={styles.btn_editarContato}
                  onPress={openModal}
                >
                  <IconPencil name="pencil" size={25} color={"#FFF"} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.campo_input}>
              <Text style={styles.text_input}>Cargo</Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {username}
                </Text>
                <TouchableOpacity
                  style={styles.btn_editarContato}
                  onPress={openModal}
                >
                  <IconPencil name="pencil" size={25} color={"#FFF"} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Outros campos de entrada para sobrenome e email */}

            <ModalEditContact
              visible={modalVisibleEdit}
              onClose={closeModal}
              onSubmit={handleSubmit}
              initialData={{ name: username, lastName: "", email: "" }}
            />
          </ScrollView>
        </View>
      </View>
      <Footer style={styles.footer} routeSelected={route.name} />
    </View>
  );
};

export default InfoManager;
