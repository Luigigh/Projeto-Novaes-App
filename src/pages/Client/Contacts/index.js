// ContractList

import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./Styles";
import IconSearch from "react-native-vector-icons/FontAwesome"
import colors from "../../../color";

const Contacts = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.search}>
        <TextInput
          style={styles.inputsearch}
          placeholder="Pesquisar contatos"
        />
        <IconSearch name="search" size={28} color={colors.primary} style={styles.iconcamera}/>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default Contacts;
