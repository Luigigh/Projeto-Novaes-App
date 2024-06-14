import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { format } from "date-fns";
import Icon_Clock from "react-native-vector-icons/Feather";
import Icon_Date from "react-native-vector-icons/Fontisto";
import Icon_Check from "react-native-vector-icons/FontAwesome";
import styles from "./Styles";
import colors from "../../color";

const RenderStage = ({ progressList, onFinishStage }) => {
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
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default RenderStage;
