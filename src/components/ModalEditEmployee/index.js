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
import { editEmployee, deleteEmployee } from "../../service/UserService";

const ModalEditEmployee = ({
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
  const [phoneNumber , setPhoneNumber] = useState(null);
  const [office, setOffice] = useState(null);
  const [photo, setPhoto] = useState(null);
  const PlaceholderImage = require("../../img/IconProfile.png");

  const engineerPhotos = [
    // require("../../img/"),
    // require("../../img/EngineerProfilePhoto/Engineer2.png"),
    // require("../../img/EngineerProfilePhoto/Engineer3.png"),
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [employee, setEmployee] = useState(initialData);

  const handleSave = async () => {
    const updatedData = { name, lastName, login, phoneNumber, office, photo };
    try {
      const response = await editEmployee(employee.id, updatedData);
      if (response) {
        setEmployee({ ...employee, ...updatedData });
        onSubmit(updatedData);
      } else {
        console.error("Erro ao atualizar os dados");
      }
    } catch (error) {
      console.error("Erro ao enviar dados atualizados:", error);
    } finally {
      setEditMode(false);
    }
  };

  useEffect(() => {
    if (visible) {
      const randomIndex = Math.floor(Math.random() * engineerPhotos.length);
      setSelectedImage(engineerPhotos[randomIndex]);
      setName(initialData.name);
      setLastName(initialData.lastname);
      setLogin(initialData.login);
      setPhoneNumber(initialData.phoneNumber);
      setOffice(initialData.office);
      setPhoto(initialData.photo);
    }
  }, [visible, initialData]);

  const handleDelete = () => {
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir este funcionário?",
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
    setEditMode(true);
    onEdit();
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.titleModal}>Informações do funcionário</Text>
            <View style={styles.containerInputs}>
              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Nome</Text>
                  <TextInput
                    placeholder="Nome"
                    value={name}
                    editable={editMode}
                    onChangeText={setName}
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
                    editable={editMode}
                    onChangeText={setLastName}
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
                    editable={editMode}
                    onChangeText={setLogin}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>

              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Telefone</Text>
                  <TextInput
                    placeholder="Telefone"
                    value={phoneNumber}
                    editable={editMode}
                    onChangeText={setPhoneNumber}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>

              <View style={styles.conjuntoInputs}>
                <View style={styles.contInput}>
                  <Text style={styles.placeInputs}>Cargo</Text>
                  <TextInput
                    placeholder="Cargo"
                    value={office}
                    editable={editMode}
                    onChangeText={setOffice}
                    style={styles.inputs}
                  />
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={handleEdit}>
                  <Icon_Edit name="edit" size={27} color={"white"} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerBtn}>
              {editMode ? (
                <TouchableOpacity onPress={handleSave} style={styles.btnSave}>
                  <Text style={styles.txtButton}>Salvar</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <View style={styles.containerBtn}>
                    <TouchableOpacity
                      onPress={handleDelete}
                      style={styles.btnExcluir}
                    >
                      <Text style={styles.txtButton}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={styles.btnOk}>
                      <Text style={styles.txtButton}>Fechar</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalEditEmployee;
