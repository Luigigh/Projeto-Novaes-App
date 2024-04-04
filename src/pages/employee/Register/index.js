import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Button, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalRegsFuncionario from "../../../components/ModalRegsFuncionario";
import ModalRegsCliente from "../../../components/ModalRegsCliente";
import styles from "./Styles";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { LinearGradient } from "expo-linear-gradient";

export default function Register() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleClient, setIsModalVisibleClient] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();


  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        

        <View style={styles.main}>
          <LinearGradient
            style={styles.linear}
            colors={["#B3DFE7", "#EEEEEE", "#FFFFFF"]}
          >
            <Text style={styles.texto_cadastro}>Cadastrar Usuários</Text>

            <View style={styles.NomeSobrenome}>
              <TextInput
                style={styles.inputNomeSobrenome}
                placeholder="Nome"
              ></TextInput>

              <TextInput
                style={styles.inputNomeSobrenome}
                placeholder="Sobrenome"
              ></TextInput>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
            ></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
            ></TextInput>

            <View style={styles.buttonsUser}>
              <TouchableOpacity style={styles.btnFuncionario}>
                <Text style={{ color: 'white', fontSize: 16 }}
                  onPress={() => setIsModalVisible(true)}
                >Funcionario</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnCliente}>
                <Text style={{ color: 'white', fontSize: 16 }}
                  onPress={() => setIsModalVisibleClient(true)}>Cliente</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btn_cadastro} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.text_cadastrar}>Cadastrar</Text>
            </TouchableOpacity>

            <ModalRegsFuncionario visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
            <ModalRegsCliente visible={isModalVisibleClient} onClose={() => setIsModalVisibleClient(false)} />

            <View style={styles.textos}>
              <Text >Já possui uma conta? </Text>
              <Text style={{fontWeight: "bold"}} onPress={() => navigation.navigate("Login")}>Clique aqui.</Text>
            </View>

          </LinearGradient>
        </View>
        
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
}