import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Image, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./Styles";
import IconSearch from "react-native-vector-icons/FontAwesome";
import colors from "../../../color";
import { usuarios } from "../../../service/UserService";

const Contacts = ({ navigation }) => {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = usuarios.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Pesquisando:", searchQuery);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.search}>
          <TextInput
            style={styles.inputsearch}
            placeholder="Pesquisar contatos"
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
          <TouchableOpacity onPress={handleSearch}>
            <IconSearch
              name="search"
              size={28}
              color={colors.primary}
              style={styles.iconcamera}
            />
          </TouchableOpacity>
        </View>

        {filteredContacts.length === 0 ? (
          <Text style={styles.notFoundText}>Contato não encontrado</Text>
        ) : (
          filteredContacts.map((user, index) => (
            <TouchableOpacity
              key={index}
              style={styles.btnContato}
              onPress={() => navigation.navigate("InfoManager")}
            >
              <View style={styles.contato}>
                <Image
                  source={require("../../../img/IconProfile.png")}
                  style={styles.userImage}
                />
                <Text style={styles.textName}>{user.username}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
};

export default Contacts;
