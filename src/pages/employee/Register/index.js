import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import RegisterService from "../../../service/RegisterService";
import RNPickerSelect from "react-native-picker-select";

export default function Register() {
  const navigation = useNavigation();
  const route = useRoute();

  const [tipoCadastro, setTipoCadastro] = useState("funcionario");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cargo, setCargo] = useState("");
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    let userData = {};

    let isAdmin = false;

    if (cargo === "adm" || cargo === "gestor") {
      isAdmin = true;
    }
     
    if (tipoCadastro === "funcionario") {
      userData = {
        name: nome,
        lastname: sobrenome,
        password: senha,
        office: cargo,
        admin: isAdmin,
        login: email,
      };
      
      try {
        await RegisterService.createFuncionario(userData);
        alert(
          `Funcionário ${nome} ${sobrenome}, email ${email}, com o cargo ${cargo} cadastrado com sucesso!`
        );
        navigation.navigate("Login");
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        alert("Erro ao cadastrar usuário. Tente novamente mais tarde.");
      }
    } else {
      userData = {
        name: nome,
        lastname: sobrenome,
        password: senha,
        entrerprise_name: nomeEmpresa,
        login: email,
      };

      try {
        await RegisterService.createCliente(userData);
        alert(
          `Cliente ${nome} ${sobrenome}, email ${email}, da empresa ${nomeEmpresa} cadastrado com sucesso!`
        );
        navigation.navigate("Login");
      } catch (error) {
        console.error("Erro ao cadastrar cliente:", error);
        alert("Erro ao cadastrar cliente. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.main}>
          <Text style={styles.titulo_cadastro}>Cadastrar Usuários</Text>

          <View style={styles.abas}>
            <TouchableOpacity
              style={[
                styles.aba,
                tipoCadastro === "funcionario" && styles.abaSelecionada,
              ]}
              onPress={() => setTipoCadastro("funcionario")}
            >
              <Text style={styles.textAba}>Funcionário</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.aba,
                tipoCadastro === "cliente" && styles.abaSelecionada,
              ]}
              onPress={() => setTipoCadastro("cliente")}
            >
              <Text style={styles.textAba}>Cliente</Text>
            </TouchableOpacity>
          </View>

          <LinearGradient
            style={styles.linear}
            colors={["#B3DFE7", "#EEEEEE", "#FFFFFF"]}
          >
            <Text style={styles.texto_cadastro}>
              {tipoCadastro === "funcionario"
                ? "Cadastro de Funcionário"
                : "Cadastro de Cliente"}
            </Text>

            <View style={styles.NomeSobrenome}>
              <TextInput
                style={styles.inputNomeSobrenome}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
              />
              <TextInput
                style={styles.inputNomeSobrenome}
                placeholder="Sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
              />
            </View>

            {tipoCadastro === "funcionario" ? (
              <View style={styles.cargoPicker}>
                <RNPickerSelect
                  onValueChange={(value) => setCargo(value)}
                  items={[
                    { label: "Administrativo", value: "adm" },
                    { label: "Gestor", value: "gestor" },
                    { label: "Engenharia", value: "eng" },
                  ]}
                  placeholder={{ label: "Selecione um Cargo:", value: null }}
                />
              </View>
            ) : (
              <TextInput
                style={styles.input}
                placeholder="Nome da Empresa"
                value={nomeEmpresa}
                onChangeText={setNomeEmpresa}
              />
            )}

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />

            <TouchableOpacity
              style={styles.btn_cadastro}
              onPress={handleRegister}
            >
              <Text style={styles.text_cadastrar}>Cadastrar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
}
