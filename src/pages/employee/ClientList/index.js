import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./Styles";
import IconSearch from "react-native-vector-icons/FontAwesome";
import colors from "../../../color";
import ModalInfoClient from "../../../components/ModalInfoClient";
import { getAllUsers } from "../../../service/UserService";

const ClientList = ({ navigation }) => {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState([]);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersList = await getAllUsers();
      setClients(usersList);
    } catch (error) {
      console.error("Erro ao obter lista de clientes:", error);
    }
  };

  const openModal = () => {
    setModalVisibleEdit(true);
  };

  const closeModal = () => {
    setModalVisibleEdit(false);
  };

  const handleSubmit = (data) => {
    console.log("Dados atualizados:", data);
    closeModal();
  };

  const filteredClients = clients.filter((client) =>
    client.username.toLowerCase().includes(searchQuery.toLowerCase())
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

        {filteredClients.length === 0 ? (
          <Text style={styles.notFoundText}>Contato não encontrado</Text>
        ) : (
          filteredClients.map((client, index) => (
            <TouchableOpacity
              key={index}
              style={styles.btnContato}
              onPress={openModal}
            >
              <Text
                style={styles.textName}
              >{`${client.name} ${client.lastname}`}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
      <Footer routeSelected={route.name} />

      <ModalInfoClient
        visible={modalVisibleEdit}
        onClose={closeModal}
        onSubmit={handleSubmit}
        initialData={{ name: "Ola", lastName: "", login: "" }}
      />
    </View>
  );
};

export default ClientList;
