import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Icon_Edit from "react-native-vector-icons/MaterialIcons";
import styles from "./Styles";
import colors from "../../color";
import ModalEditClient from "../../components/ModalEditClient";
import { editClient } from "../../service/UserService";
import DirectoryService from "../../service/DirectoryService";

const ModalInfoClient = ({
  visible,
  onClose,
  onDelete,
  initialData,
  onSubmit,
  onEdit,
}) => {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [login, setLogin] = useState(null);
  const [enterpriseName, setEnterpriseName] = useState(null);
  const [ references_directory , setReferencesDirectory ] = useState(null);
  const [ name_directory , setNameDirectory ] = useState("");
  const PlaceholderImage = require("../../img/IconProfile.png");

  const profilesPhotos = [
    require("../../img/DefaultProfilePhoto/Multiavatar-4c20efcf17464cabf8.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-88d2609dca8910ff12.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-89f075505dfe766b1e.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-a14cf2e0b1e9a13a82.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-a22f502b50d950084b.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-a460932e85bb01f49f.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-aff8351b734d0f57d5.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-dbddfc9d50e6c316b0.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-dd5be944b9c288c2e4.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-e60aa374c5e5e4f052.png"),
    require("../../img/DefaultProfilePhoto/Multiavatar-fa144b635ab6f2a901.png"),
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [user, setUser] = useState(initialData);

  const handleSubmit = async (data) => {
    console.log("handle submit: "+ JSON.stringify(data));
    try {
      const response = await editClient(user.id, data);
      if (response) {
        setUser({ ...user, ...data });
        onSubmit(data); // Update the parent component with the new data
      } else {
        console.error("Erro ao atualizar os dados");
      }
    } catch (error) {
      console.error("Erro ao enviar dados atualizados:", error);
    } finally {
      setEditModalVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      const randomIndex = Math.floor(Math.random() * profilesPhotos.length);
      setSelectedImage(profilesPhotos[randomIndex]);
    }
  }, [visible]);

  useEffect(() => {
    const fetchData = async () => {
      setName(initialData.name);
      setLastName(initialData.lastname);
      setLogin(initialData.login);
      setEnterpriseName(initialData.entrerprise_name);
      const nameDirectory = await getNameDirectory();
      setNameDirectory(nameDirectory);
    };
    
    fetchData();
  }, [initialData]);
  
  

  const getNameDirectory = async () => {
    const nameDirectory = await DirectoryService.getNameOfDirectoryById(initialData.references_directory);
    console.log("nome d diretorio no modal: " + nameDirectory);
    if (nameDirectory === "") {
      throw new Error("Nome do diretorio vazio!")
    }
    return nameDirectory;
  }
  

  const handleDelete = () => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir este cliente?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => onDelete(initialData.id),
          style: "destructive",
        },
      ]
    );
  };

  const handleEdit = () => {
    setEditModalVisible(true);
    onEdit(); // Signal the parent component that edit modal is open
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.titleModal}>Informações do cliente</Text>
            <Image
              source={selectedImage ? selectedImage : PlaceholderImage}
              style={styles.imagem_perfil}
            />
            <View style={styles.containerInputs}>
              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Nome</Text>
                  <TextInput
                    placeholder="Nome"
                    value={name}
                    editable={false}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>

              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Sobrenome</Text>
                  <TextInput
                    placeholder="Sobrenome"
                    value={lastName}
                    editable={false}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>

              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Email</Text>
                  <TextInput
                    placeholder="Email"
                    value={login}
                    editable={false}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>

              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Empresa</Text>
                  <TextInput
                    placeholder="Empresa"
                    value={enterpriseName}
                    editable={false}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>

              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Diretorio Liberado</Text>
                  <TextInput
                    placeholder="Diretorio"
                    value={name_directory}
                    editable={false}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={handleDelete} style={styles.btnExcluir}>
                <Text style={styles.txtButton}>Excluir</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose} style={styles.btnOk}>
                <Text style={styles.txtButton}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {initialData && (
        <ModalEditClient
          visible={editModalVisible}
          onClose={() => setEditModalVisible(false)}
          onSubmit={handleSubmit}
          initialData={initialData}
        />
      )}
    </>
  );
};

export default ModalInfoClient;
