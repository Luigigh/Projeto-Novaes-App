import React, { useState, useEffect, useCallback } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import styles from "./Styles";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ModalPhoto from "../../../components/ModalPhoto";
import colors from "../../../color";
import { LinearGradient } from "expo-linear-gradient";
import { userLogged } from "../../../service/UserService";

const InfoManager = ({ navigation }) => {
  const route = useRoute();
  const PlaceholderImage = require("../../../../src/img/IconProfile.png");

  const profilesPhotos = [
    "Multiavatar-4c20efcf17464cabf8.png",
    "Multiavatar-88d2609dca8910ff12.png",
    "Multiavatar-89f075505dfe766b1e.png",
    "Multiavatar-a14cf2e0b1e9a13a82.png",
    "Multiavatar-a22f502b50d950084b.png",
    "Multiavatar-a460932e85bb01f49f.png",
    "Multiavatar-aff8351b734d0f57d5.png",
    "Multiavatar-dbddfc9d50e6c316b0.png",
    "Multiavatar-dd5be944b9c288c2e4.png",
    "Multiavatar-e60aa374c5e5e4f052.png",
    "Multiavatar-fa144b635ab6f2a901.png",
  ];

  const profileImages = {
    "Multiavatar-4c20efcf17464cabf8.png": require("../../../img/DefaultProfilePhoto/Multiavatar-4c20efcf17464cabf8.png"),
    "Multiavatar-88d2609dca8910ff12.png": require("../../../img/DefaultProfilePhoto/Multiavatar-88d2609dca8910ff12.png"),
    "Multiavatar-89f075505dfe766b1e.png": require("../../../img/DefaultProfilePhoto/Multiavatar-89f075505dfe766b1e.png"),
    "Multiavatar-a14cf2e0b1e9a13a82.png": require("../../../img/DefaultProfilePhoto/Multiavatar-a14cf2e0b1e9a13a82.png"),
    "Multiavatar-a22f502b50d950084b.png": require("../../../img/DefaultProfilePhoto/Multiavatar-a22f502b50d950084b.png"),
    "Multiavatar-a460932e85bb01f49f.png": require("../../../img/DefaultProfilePhoto/Multiavatar-a460932e85bb01f49f.png"),
    "Multiavatar-aff8351b734d0f57d5.png": require("../../../img/DefaultProfilePhoto/Multiavatar-aff8351b734d0f57d5.png"),
    "Multiavatar-dbddfc9d50e6c316b0.png": require("../../../img/DefaultProfilePhoto/Multiavatar-dbddfc9d50e6c316b0.png"),
    "Multiavatar-dd5be944b9c288c2e4.png": require("../../../img/DefaultProfilePhoto/Multiavatar-dd5be944b9c288c2e4.png"),
    "Multiavatar-e60aa374c5e5e4f052.png": require("../../../img/DefaultProfilePhoto/Multiavatar-e60aa374c5e5e4f052.png"),
    "Multiavatar-fa144b635ab6f2a901.png": require("../../../img/DefaultProfilePhoto/Multiavatar-fa144b635ab6f2a901.png"),
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const randomNumber = Math.floor(Math.random() * profilesPhotos.length);
      setSelectedImage(profilesPhotos[randomNumber]);
    }, [profilesPhotos, selectedImage])
  );

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
                  selectedImage
                    ? profileImages[selectedImage]
                    : PlaceholderImage
                }
                style={styles.imagem_perfil}
              />
            </TouchableOpacity>
            <ModalPhoto
              visible={modalVisible}
              imageURL={selectedImage}
              onClose={() => setModalVisible(false)}
            />
          </View>
        </LinearGradient>

        <View style={styles.container_info_user}>
          <Text style={styles.titleInfoContact}>Minhas informações</Text>

          <ScrollView>
            <View style={styles.campo_input}>
              <Text style={styles.text_input}>Nome</Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {userLogged[0].nameUser}
                </Text>
              </View>
            </View>
            <View style={styles.campo_input}>
              <Text style={styles.text_input}>Sobrenome</Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {userLogged[0].lastname}
                </Text>
              </View>
            </View>
            <View style={styles.campo_input}>
              <Text style={styles.text_input}>Email</Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {userLogged[0].login}
                </Text>
              </View>
            </View>
            <View style={styles.campo_input}>
              <Text style={styles.text_input}>
                {userLogged[0].role === "USER" ? "Empresa" : "Cargo"}
              </Text>
              <View style={styles.view_input}>
                <Text
                  style={styles.input_contato}
                  placeholderTextColor="#ABABAB"
                >
                  {userLogged[0].role === "USER"
                    ? userLogged[0].entrerprise_name
                    : userLogged[0].office}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <Footer style={styles.footer} routeSelected={route.name} />
    </View>
  );
};

export default InfoManager;
