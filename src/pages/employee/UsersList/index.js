// UsersList.js
import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useUser } from "../../../context/index.js";
import { getAllUsers } from "../../../service/UserService";
import styles from "./Styles";
import colors from '../../../color';

const UsersList = ({ navigation }) => {
  const route = useRoute();
  const [users, setUsers] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const usersList = await getAllUsers();
      setUsers(usersList);
    } catch (error) {
      console.error("Erro ao obter lista de clientes:", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name} {item.lastname}</Text>
      <Text style={styles.itemText}>{item.email}</Text>
      <Text style={styles.itemText}>{item.enterprise_name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.title}>Lista de clientes</Text>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ width: "100%" }}
        />
      </View>
      <Footer style={styles.footer} routeSelected={route.name} />
    </View>
  );
};

export default UsersList;

