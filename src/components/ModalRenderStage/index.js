import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon_Edit from "react-native-vector-icons/FontAwesome";
import Icon_Trash from "react-native-vector-icons/Entypo";
import Icon_Clock from "react-native-vector-icons/Feather";
import Icon_Date from "react-native-vector-icons/Fontisto";
import Icon_Check from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";

const ModalRenderStage = ({
  progressList,
  onDeleteProgress,
  onEditProgress,
}) => {
  return (
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
            onPress={() => handleClockButtonClick(index)}
          >
            {item.completed ? (
              <Icon_Check name="check" size={60} color="white" />
            ) : (
              <Icon_Clock name="clock" size={60} color="#FFF" />
            )}
          </TouchableOpacity>
          <View style={styles.content}>
            <View style={styles.progressContent}>
              <Text style={styles.progressText}>{` ${item.tittle}`}</Text>
              <Text>--------------------------------------------</Text>
              <Text style={styles.progressText}>{` ${item.description}`}</Text>
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
                  // Certifique-se de que newItemTitle, newItemDescription e newItemDateHour estejam definidos corretamente
                  onEditProgress(index, {
                    tittle: newItemTitle,
                    description: newItemDescription,
                    dateHour: newItemDateHour,
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
  );
};

export default ModalRenderStage;
