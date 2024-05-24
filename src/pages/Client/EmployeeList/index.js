import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./Styles";
import IconSearch from "react-native-vector-icons/FontAwesome";
import colors from "../../../color";
import ModalInfoEmployee from "../../../components/ModalInfoEmployee";
import { getAllEmployee, getEmployeeDetails } from "../../../service/UserService";

const EmployeeList = ({ navigation }) => {
  const route = useRoute();
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const employeeList = await getAllEmployee();
      setEmployee(employeeList);
    } catch (error) {
      console.error("Erro ao obter lista de gestores:", error);
    }
  };

  const fetchEmployeeDetails = async (id) => {
    try {
      const employeeDetails = await getEmployeeDetails(id);
      console.log("Detalhes do gestor:", employeeDetails);
      setSelectedEmployee(employeeDetails);
      setModalVisibleEdit(true);
    } catch (error) {
      console.error("Erro ao obter detalhes do gestor:", error);
    }
  };  

  const closeModal = () => {
    setModalVisibleEdit(false);
    setSelectedEmployee(null);
  };

  const handleSubmit = (data) => {
    console.log("Dados atualizados:", data);
    closeModal();
  };

  const filteredEmployee = employees.filter((employee) =>
  employee.username.toLowerCase().includes(searchQuery.toLowerCase())
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
            placeholder="Pesquisar gestor"
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

        {filteredEmployee.length === 0 ? (
          <Text style={styles.notFoundText}>Contato não encontrado</Text>
        ) : (
          filteredEmployee.map((employee, index) => (
            <TouchableOpacity
              key={index}
              style={styles.btnContato}
              onPress={() => fetchEmployeeDetails(employee.id)}
            >
              <Text
                style={styles.textName}
              >{`${employee.name} ${employee.lastname}`}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
      <Footer routeSelected={route.name} />

      {selectedEmployee && (
        <ModalInfoEmployee
          visible={modalVisibleEdit}
          onClose={closeModal}
          onSubmit={handleSubmit}
          initialData={selectedEmployee}
        />
      )}
    </View>
  );
};

export default EmployeeList;
