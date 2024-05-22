import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon_Contract from "react-native-vector-icons/Ionicons";
import styles from "./Styles";
import colors from "../../color";

const Contract = ({ contract, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon_Contract
        style={styles.icon_Contract}
        name="document-text"
        size={45}
        color={colors.branco}
      />

      <TouchableOpacity
        style={styles.btnContract}
        onPress={() => onPress(contract)}
      >
        <Text style={styles.title}>{contract.title}</Text>

        <View style={styles.main}>
          <View style={styles.maintatus}>
            <Text style={styles.concluded}>Status:</Text>
            <Text style={styles.concluded}>{contract.concluded ? "Concluído" : "Em andamento"}</Text>
          </View>

          <View style={styles.maintime}>
            <Text style={styles.time}>Tempo:</Text>
            <Text style={styles.time}>{contract.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Contract;
