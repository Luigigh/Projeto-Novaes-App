import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import ContratoService from "../../service/ContratoService";
import styles from "./Styles";
import { UserService } from "../../service/UserService";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import {Picker} from '@react-native-picker/picker';

const ModalAddContract = ({
  visible,
  onClose,
  onAdd,
  onSave,
  isEditing,
  title,
  setTitle,
  email,
  setEmail,
  contract,
}) => {
  const [time, setTime] = useState(null);
  const [status, setStatus] = useState(
    contract?.concluded ? "Concluído" : "Em andamento"
  );

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (event, selectedDate) => {
        if (event.type === "set" && selectedDate) {
          setTime(new Date(selectedDate));
        }
      },
      mode: "date",
      is24Hour: true,
    });
  };

  const handleAction = async () => {
    try {
      const contractData = {
        title: title,
        concluded: status === "Concluído",
        time: time,
        client: {
          login: email,
        },
      };
      if (isEditing) {
        await ContratoService.editContractById(contract.id, contractData);
      } else {
        const response = await ContratoService.addContract(contractData);
        if (title == "" || time == null) {
          console.log("teste");
          Alert.alert(
            "Alguns campos podem não estar preenchidos corretamente",
            ""
          );
        } else if (!response) {
          Alert.alert("Cliente não existe!", "");
        }
      }

      onSave();
      setTitle("");
      setEmail("");
      setTime(null);
      setStatus("");
    } catch (error) {
      console.error("Erro ao salvar contrato:", error);
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>
            {isEditing ? "Editar Contrato" : "Adicionar Contrato"}
          </Text>
          <TextInput
            style={styles.inputTitulo}
            placeholder="Nome do Contrato"
            value={title}
            onChangeText={(text) => setTitle(text)}
            maxLength={20}
            placeholderTextColor={"#6B6D71"}
            fontSize={15}
          />
          <TextInput
            style={styles.inputDescricao}
            placeholder="Email do colaborador"
            value={email}
            onChangeText={(text) => setEmail(text)}
            maxLength={120}
            placeholderTextColor={"#6B6D71"}
            fontSize={15}
          />

          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              style={styles.inputDataHora}
              placeholder="Ultimo dia do contrato"
              value={time ? time.toLocaleDateString() : ""}
              editable={false}
              placeholderTextColor={"#6B6D71"}
              fontSize={15}
            />
          </TouchableOpacity>

          <View style={styles.inputStatus}>
          <Picker
              selectedValue={status}
              onValueChange={(itemValue) => setStatus(itemValue)}
            >
              <Picker.Item label="Em andamento" value="Em andamento" />
              <Picker.Item label="Concluído" value="Concluído" />
            </Picker>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={handleAction}
              testID={"save-button"}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCancel} onPress={onClose}>
              <Text style={{ color: "white", fontSize: 16.5 }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddContract;
