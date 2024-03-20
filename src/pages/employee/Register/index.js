// src/screens/Login/index.js

import React from "react";
import { View, Button, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { LinearGradient } from "expo-linear-gradient";

export default function Register() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../../src/img/LogoGrupoNovaesGrande.png")} style={styles.logo}></Image>
      </View>

      <View style={styles.main}>
        <LinearGradient
          style={styles.linear}
          colors={["#B3DFE7", "#EEEEEE", "#FFFFFF"]}
        >
          <Text style={styles.texto_cadastro}>Cadastre-se com a Novaes</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Email"
          ></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Nome da Empresa"
          ></TextInput>

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

          <TouchableOpacity style={styles.btn_cadastro} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.text_cadastrar}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.textos}>
            <Text  onPress={() => navigation.navigate("Login")}>Já possui uma conta? Clique aqui.</Text>
            <Text >Sou Funcionario</Text>
          </View>

        </LinearGradient>
      </View>
    </View>
  );
}