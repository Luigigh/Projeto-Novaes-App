import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { format } from "date-fns";
import Icon_Contract from "react-native-vector-icons/Ionicons";
import Icon_Edit from "react-native-vector-icons/FontAwesome";
import Icon_Trash from "react-native-vector-icons/Entypo";
import Icon_Options from "react-native-vector-icons/Entypo";
import styles from "./Styles";
import colors from "../../color";

const ContractClient = ({
  contract,
  onPress,
  onDeleteContract,
  onEditContract,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
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

  return (
    <View style={styles.container}>
      <Icon_Contract
        style={styles.icon_Contract}
        name="document-text"
        size={50}
        color={colors.contract}
      />

      <TouchableOpacity
        style={styles.btnContract}
        onPress={() => onPress(contract)}
      >
        <Text style={styles.title}>{contract.title}</Text>

        <View style={styles.main}>
          <View style={styles.maintatus}>
            <Text style={styles.concludedTitle}>Status:</Text>
            <Text style={styles.concluded}>
              {contract.concluded ? "Concluído" : "Em andamento"}
            </Text>
          </View>

          <View style={styles.maintime}>
            <Text style={styles.timeTitle}>Tempo:</Text>
            <Text style={styles.time}>{` ${formatDate(contract.time)}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContractClient;
