import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import ModalRegsFuncionario from "../../../components/ModalRegsFuncionario";
// import ModalRegsCliente from "../../../components/ModalRegsCliente";
import styles from "./Styles";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import RegisterService from "../../../service/RegisterService";

export default function Register() {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isModalVisibleClient, setIsModalVisibleClient] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const userData = {
      name: nome,
      lastname: sobrenome,
      password: senha,
      login: `${nome.toLowerCase()}.${sobrenome.toLowerCase()}`,
    };

    try {
      await RegisterService.createUsuario(userData);
      alert("Usuário cadastrado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Tente novamente mais tarde.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <View style={styles.main}>
          <Text style={styles.titulo_cadastro}>Cadastrar Usuários</Text>

          <View style={styles.abas}>
            <TouchableOpacity style={styles.aba}>
              <Text style={styles.textAba}>Funcionário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.aba}>
              <Text style={styles.textAba}>Cliente</Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            style={styles.linear}
            colors={["#B3DFE7", "#EEEEEE", "#FFFFFF"]}
          >
            <Text style={styles.texto_cadastro}>Func/client</Text>

            <View style={styles.NomeSobrenome}>
              <TextInput
                style={styles.inputNomeSobrenome}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
              ></TextInput>

              <TextInput
                style={styles.inputNomeSobrenome}
                placeholder="Sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
              ></TextInput>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            ></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            ></TextInput>

            {/* <View style={styles.buttonsUser}>
              <TouchableOpacity style={styles.btnFuncionario}>
                <Text
                  style={{ color: "white", fontSize: 16 }}
                  onPress={() => setIsModalVisible(true)}
                >
                  Funcionario
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnCliente}>
                <Text
                  style={{ color: "white", fontSize: 16 }}
                  onPress={() => setIsModalVisibleClient(true)}
                >
                  Cliente
                </Text>
              </TouchableOpacity>
            </View> */}

            <TouchableOpacity
              style={styles.btn_cadastro}
              onPress={handleRegister}
            >
              <Text style={styles.text_cadastrar}>Cadastrar</Text>
            </TouchableOpacity>

            {/* <ModalRegsFuncionario
              visible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
            />
            <ModalRegsCliente
              visible={isModalVisibleClient}
              onClose={() => setIsModalVisibleClient(false)}
            /> */}
          </LinearGradient>
        </View>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
}
