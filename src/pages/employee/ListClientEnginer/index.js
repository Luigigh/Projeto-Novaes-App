import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text, Alert, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./Styles";
import IconSearch from "react-native-vector-icons/FontAwesome";
import Icon_AddUser from "react-native-vector-icons/Ionicons";
import colors from "../../../color";
import ModalInfoClient from "../../../components/ModalInfoClient";
import ModalEditEmployee from "../../../components/ModalEditEmployee";
import ModalEditClient from "../../../components/ModalEditClient";
import { getAllClients, getClientDetails, getEmployeeDetails, deleteClient, deleteEmployee, editClient, editEmployee, getAllEmployee } from "../../../service/UserService";
import ModalInfoClientEnginer from "../../../components/ModalInfoClientEnginer";

const ClientListEnginer = () => {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalVisibleClient, setModalVisibleClient] = useState(false);
  const [modalVisibleEmployee, setModalVisibleEmployee] = useState(false);
  const [editClientData, setEditClientData] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Clientes");
  const navigator = useNavigation();

  useEffect(() => {
    fetchUsers();
  }, [activeTab]);

  const fetchUsers = async () => {
    try {
      if (activeTab === "Clientes") {
        const usersList = await getAllClients();
        setClients(usersList);
      } else {
        const employeeList = await getAllEmployee();
        setEmployees(employeeList);
      }
    } catch (error) {
      console.error(`Erro ao obter lista de ${activeTab.toLowerCase()}:`, error);
    }
  };

  const fetchClientDetails = async (id) => {
    try {
      const clientDetails = await getClientDetails(id);
      setSelectedClient(clientDetails);
      setModalVisibleClient(true);
    } catch (error) {
      console.error("Erro ao obter detalhes do cliente:", error);
    }
  };

  const fetchEmployeeDetails = async (id) => {
    try {
      const employeeDetails = await getEmployeeDetails(id);
      setSelectedEmployee(employeeDetails);
      setModalVisibleEmployee(true);
    } catch (error) {
      console.error("Erro ao obter detalhes do funcionário:", error);
    }
  };

  const handleDeleteClient = async (id) => {
    try {
      await deleteClient(id);
      setClients(clients.filter((client) => client.id !== id));
      Alert.alert("Deletado com sucesso", "O cliente foi deletado com sucesso");
      closeModal();
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      Alert.alert("Erro ao deletar", "Houve um erro ao tentar deletar o cliente.");
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter((employee) => employee.id !== id));
      Alert.alert("Deletado com sucesso", "O funcionário foi deletado com sucesso");
      closeModal();
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error);
      Alert.alert("Erro ao deletar", "Houve um erro ao tentar deletar o funcionário.");
    }
  };

  const closeModal = () => {
    setModalVisibleClient(false);
    setModalVisibleEmployee(false);
    setSelectedClient(null);
    setSelectedEmployee(null);
    setEditModalVisible(false);
  };

  const handleEditClientSubmit = async (data) => {
    try {
      await editClient(selectedClient.id, data);
      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === selectedClient.id ? { ...client, ...data } : client
        )
      );
      setSelectedClient((prevClient) => ({ ...prevClient, ...data }));
      setEditModalVisible(false);
      setModalVisibleClient(false);
    } catch (error) {
      console.error("Erro ao editar cliente:", error);
    }
  };

  const handleEditEmployeeSubmit = async (data) => {
    try {
      await editEmployee(selectedEmployee.id, data);
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === selectedEmployee.id ? { ...employee, ...data } : employee
        )
      );
      setSelectedEmployee((prevEmployee) => ({ ...prevEmployee, ...data }));
      setModalVisibleEmployee(false);
    } catch (error) {
      console.error("Erro ao editar funcionário:", error);
    }
  };

  const filteredClients = clients.filter((client) =>
    `${client.name} ${client.lastname}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.lastname}`.toLowerCase().includes(searchQuery.toLowerCase())
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
            placeholder={`Pesquisar ${activeTab.toLowerCase()}`}
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
          />
          <TouchableOpacity onPress={handleSearch}>
            <IconSearch name="search" size={28} color={colors.primary} style={styles.iconcamera} />
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === "Clientes" && styles.activeTab]}
            onPress={() => setActiveTab("Clientes")}
          >
            <Text style={styles.tabText}>Clientes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === "Funcionários" && styles.activeTab]}
            onPress={() => setActiveTab("Funcionários")}
          >
            <Text style={styles.tabText}>Funcionários</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.clientList}>
          {activeTab === "Clientes" ? (
            filteredClients.length === 0 ? (
              <Text style={styles.notFoundText}>Contato não encontrado</Text>
            ) : (
              filteredClients.map((client, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.btnContato}
                  onPress={() => fetchClientDetails(client.id)}
                >
                  <Text style={styles.textName}>{`${client.name} ${client.lastname}`}</Text>
                </TouchableOpacity>
              ))
            )
          ) : (
            filteredEmployees.length === 0 ? (
              <Text style={styles.notFoundText}>Contato não encontrado</Text>
            ) : (
              filteredEmployees.map((employee, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.btnContato}
                  onPress={() => fetchEmployeeDetails(employee.id)}
                >
                  <Text style={styles.textName}>{`${employee.name} ${employee.lastname}`}</Text>
                </TouchableOpacity>
              ))
            )
          )}
        </ScrollView>

      </View>
      <Footer routeSelected={route.name} />

      {selectedClient && (
        <ModalInfoClientEnginer
          visible={modalVisibleClient}
          onClose={closeModal}
          onSubmit={handleEditClientSubmit}
          onDelete={() => handleDeleteClient(selectedClient.id)}
          initialData={selectedClient}
          onEdit={() => setEditModalVisible(true)}
        />
      )}

      {selectedEmployee && (
        <ModalEditEmployee
          visible={modalVisibleEmployee}
          onClose={closeModal}
          onSubmit={handleEditEmployeeSubmit}
          onDelete={() => handleDeleteEmployee(selectedEmployee.id)}
          initialData={selectedEmployee}
        />
      )}

      {editClientData && (
        <ModalEditClient
          visible={editModalVisible}
          onClose={() => setEditModalVisible(false)}
          onSubmit={handleEditClientSubmit}
          initialData={editClientData}
        />
      )}
    </View>
  );
};

export default ClientListEnginer;
