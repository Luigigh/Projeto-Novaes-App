import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity , Alert} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import styles from './Styles';

const ModalProgress = ({ visible, onClose, onAdd, isEditing, title, setTitle, description, setDescription, dateHour, setDateHour, currentContractId }) => { 
  const [ time , setTime ] = useState(null);
  
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

  const handleAddProgress = () => {
    console.log("Dados a serem enviados add:", { title, description, time, contract_id: currentContractId });
    let verify = verifyIfEmpty();
    console.log(verify);
    if(verify){
      onAdd({ title, description, time, contract_id: currentContractId });
    }else{
      Alert.alert("Alguns campos podem estar vazios...","");
    }
  };

  function verifyIfEmpty(){
    console.log(title);
    console.log(description);
    console.log(time);
    if(title === "" || description == "" || time == ""){
      return false;
    }
    return true;
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{isEditing ? 'Editar Etapa' : 'Adicionar Etapa'}</Text>
          <TextInput
            style={styles.inputTitulo}
            placeholder="Título"
            value={title}
            onChangeText={text => setTitle(text)}
            maxLength={20}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />
          
          <TextInput
            style={styles.inputDescricao}
            placeholder="Descrição"
            value={description}
            onChangeText={text => setDescription(text)}
            maxLength={120}
            placeholderTextColor={'#6B6D71'}
            fontSize={15}
          />

          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              style={styles.inputDataHora}
              placeholder="Data"
              value={time ? time.toLocaleDateString() : ''}
              editable={false}
              placeholderTextColor={'#6B6D71'}
              fontSize={15}
            />
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={handleAddProgress}
              testID={"save-button"}
            >
              <Text style={{color: 'white', fontSize: 18}}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnCancel}
              onPress={onClose}
            >
              <Text style={{color: 'white', fontSize: 16.5}}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProgress;
