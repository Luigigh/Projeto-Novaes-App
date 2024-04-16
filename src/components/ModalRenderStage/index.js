// src/components/ModalRenderStage/index.js

import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon_Edit from "react-native-vector-icons/FontAwesome";
import Icon_Trash from "react-native-vector-icons/Entypo";
import Icon_Clock from "react-native-vector-icons/Feather";
import Icon_Date from "react-native-vector-icons/Fontisto";
import Icon_Check from "react-native-vector-icons/FontAwesome";
import ModalConfirmacao from "../ModalStage";
import styles from "./Styles";

const ModalRenderStage = ({
  progressList,
  onDeleteProgress,
  onEditProgress,
}) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleConfirm = () => {
    setConfirmModalVisible(false);
  };

  const handleCancel = () => {
    setConfirmModalVisible(false); 
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={styles.BoxStage}
        data={progressList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.progressContainer}>
            <TouchableOpacity
              style={[
                styles.btnClock,
                { backgroundColor: item.completed ? "#00A148" : "#007B8F" },
              ]}
              onPress={() => setConfirmModalVisible(true)}
            >
              {item.completed ? (
                <Icon_Check name="check" size={60} color="white" />
              ) : (
                <Icon_Clock name="clock" size={60} color="#FFF" />
              )}
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.progressContent}>
                <Text style={styles.progressText}>{` ${item.title}`}</Text>
                <Text>--------------------------------------------</Text>
                <Text
                  style={styles.progressText}
                >{` ${item.description}`}</Text>
                <Text style={styles.progressText}>
                  {" "}
                  <Icon_Date name="date" size={20} color="#007B8F" />
                  {` ${item.dateHour}`}
                </Text>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.btnEdit}
                  onPress={() => {
                    onEditProgress(index, {
                      title: item.title, // Passa o título da etapa para edição
                      description: item.description, // Passa a descrição da etapa para edição
                      dateHour: item.dateHour, // Passa a data e hora da etapa para edição
                    });
                  }}
                >
                  <Icon_Edit name="pencil" size={25} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnDelete}
                  onPress={() => onDeleteProgress(index)}
                >
                  <Icon_Trash name="trash" size={25} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <ModalConfirmacao
        visible={confirmModalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
};

export default ModalRenderStage;
