import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { format } from "date-fns";
import Icon_Edit from "react-native-vector-icons/FontAwesome";
import Icon_Trash from "react-native-vector-icons/Entypo";
import Icon_Clock from "react-native-vector-icons/Feather";
import Icon_Date from "react-native-vector-icons/Fontisto";
import Icon_Check from "react-native-vector-icons/FontAwesome";
import ModalConfirmacao from "../ModalStage";
import styles from "./Styles";
import colors from "../../color";

const ModalRenderStage = ({
  progressList,
  setProgressList,
  onDeleteProgress,
  onEditProgress,
  onFinishStage,
}) => {
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleConfirm = () => {
    setConfirmModalVisible(false);
  };

  const handleCancel = () => {
    setConfirmModalVisible(false);
  };

  const formatDate = (date) => {
    if (!date) return "";

    if (date instanceof Date && !isNaN(date)) {
      console.log("Date is already a valid Date object:", date);
      return format(date, "dd/MM/yyyy HH:mm");
    }
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate)) {
      const formattedDate = format(parsedDate, "dd/MM/yyyy HH:mm");
      return formattedDate;
    } else {
      console.log("Failed to parse date string:", date);
    }
    return date;
  };

  const addNewProgress = () => {
    setProgressList([...progressList]);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.BoxStage}
        data={progressList}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item, index }) => (
          <View style={styles.progressContainer}>
            <TouchableOpacity
              style={[
                styles.btnClock,
                { backgroundColor: item.status ? "#00A148" : "#007B8F" },
              ]}
              onPress={() => onFinishStage(item.id)}
            >
              {item.status ? (
                <Icon_Check name="check" size={45} color="white" />
              ) : (
                <Icon_Clock name="clock" size={45} color="#FFF" />
              )}
            </TouchableOpacity>

            <View style={styles.content}>
              <View style={styles.progressContent}>
                <View style={styles.progressTitle}>
                  <Text style={styles.title}>{` ${item.title}`}</Text>
                </View>
                <View style={styles.progressDescription}>
                  <Text
                    style={styles.description}
                  >{` ${item.description}`}</Text>
                </View>
                <View style={styles.progressDate}>
                <Icon_Date name="date" size={25} color="#007B8F" />
                  <Text style={styles.dataFormatada}>
                      {` ${formatDate(item.dateHour)}`}
                  </Text>
                </View>
              </View>

              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.btnEdit}
                  onPress={() => {
                    onEditProgress(index, {
                      title: item.title,
                      description: item.description,
                      dateHour: item.dateHour,
                    });
                  }}
                >
                  <Icon_Edit name="pencil" size={30} color={colors.verde} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnDelete}
                  onPress={() => onDeleteProgress(index)}
                >
                  <Icon_Trash name="trash" size={30} color={"#E56D01"} />
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
