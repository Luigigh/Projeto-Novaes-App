import React, { useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon_Camera from "react-native-vector-icons/Entypo";
import styles from "./Styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import iconProfile from "../../../src/img/IconProfile.png";
import * as ImagePicker from "expo-image-picker";

export default function InfoManager() {
  const route = useRoute();
  const [image, setImage] = useState(iconProfile);

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      //   const imageURI = result.assets[0].uri;
      //   setImage(imageURI);
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Header />
        <View style={styles.container_foto_user}>
          <View style={styles.fotoperfil}>
            <Image style={styles.imagem_perfil} source={image} />
            <View style={styles.imagem_camera}>
              <TouchableOpacity onPress={handleImagePicker}>
                <Icon_Camera name="camera" size={33} color={"#FFF"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container_info_user}>
          <View style={styles.campo_input}>
            <Text style={styles.text_input}>Nome</Text>
            <View style={styles.view_input}>
              <Text style={styles.input_contato} placeholderTextColor="#ABABAB">
                Pessoa 01
              </Text>
            </View>
          </View>

          <View style={styles.campo_input}>
            <Text style={styles.text_input}>Email</Text>
            <View style={styles.view_input}>
              <Text style={styles.input_contato} placeholderTextColor="#ABABAB">
                adm@novaes.com
              </Text>
            </View>
          </View>

          <View style={styles.campo_input}>
            <Text style={styles.text_input}>Telefone</Text>
            <View style={styles.view_input}>
              <Text style={styles.input_contato} placeholderTextColor="#ABABAB">
                (16) 91234-5678
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Footer style={styles.footer} routeSelected={route.name} />
    </View>
  );
}
