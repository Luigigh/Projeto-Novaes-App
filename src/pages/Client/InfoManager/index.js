import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import IconCamera from "react-native-vector-icons/Entypo";
import styles from "./Styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalPhoto from '../../components/ModalPhoto';
import * as ImagePicker from 'expo-image-picker';
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";

// function ImageViewer({ placeholderImageSource, selectedImage }) {
//   const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

//   return <Image source={imageSource} style={styles.imagem_perfil} />;
// }

export default function InfoManager() {
  const route = useRoute();
  const [selectedImage, setSelectedImage] = useState(null);
  const PlaceholderImage = require('../../../src/img/IconProfile.png');
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = async () => {
    setModalVisible(true);
  }

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

  const openGallery = () => {
    pickImage();
  };

  const openCamera = async () => {
    let resultCamera = await launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!resultCamera.canceled) {
      setSelectedImage(resultCamera.assets[0].uri);
      setModalVisible(true);
    } else {
      console.log("Erro ao abrir a câmera");
    }
  }


  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <Header />
        <View style={styles.container_foto_user}>
          <View style={styles.fotoperfil}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={selectedImage ? { uri: selectedImage } : PlaceholderImage} style={styles.imagem_perfil} />
            </TouchableOpacity>
            <View style={styles.imagem_camera}>
              <TouchableOpacity onPress={pickImage}>
                <IconCamera name="camera" size={33} color={"#FFF"} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnTESTE} onPress={openCamera}>
                <Text>Abrir Camera</Text>
              </TouchableOpacity>
            </View>
            {/* <ModalGalleryCamera visible={modalVisible} onPress={() => setModalVisible(false)}/> */}
            <ModalPhoto visible={modalVisible} imageURL={selectedImage} onClose={() => setModalVisible(false)} />

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
        <Footer style={styles.footer} routeSelected={route.name} />

      </View>
    </View>
  );
}


// METODO PARA ENVIAR A IMAGEM PARA O BACK END
// const selectImage = () => {
//   ImagePicker.launchImageLibrary({}, response => {
//     if (!response.didCancel && !response.error) {
//       setImageSource({ uri: response.uri });

//       // Create FormData object
//       const formData = new FormData();
//       formData.append('image', {
//         uri: response.uri,
//         type: response.type, // This is the mime type of the image
//         name: response.fileName // This is the name of the image file
//       });

//       // Send POST request to server
//       fetch('YOUR_ENDPOINT', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error('Error:', error));
//     }
//   });
// };
