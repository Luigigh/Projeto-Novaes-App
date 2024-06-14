import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import RNPickerSelect from "react-native-picker-select";
import DirectoryService from "../../../service/DirectoryService";
import RegisterService from "../../../service/RegisterService";

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
  const [pickerItems, setPickerItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [idReferences, setIdReferences] = useState(null);

  const createPickerItems = (directoryNames) => {
    return directoryNames.map((directory) => ({
      label: directory.nameDirectory,
      value: directory.idReferencesDirectory,
    }));
  };

  useEffect(() => {
    const fetchDirectoryNames = async () => {
      const directoryNames = await DirectoryService.getDirectoryNames();
      if (directoryNames) {
        const items = createPickerItems(directoryNames);
        setPickerItems(items);
      }
    };

    fetchDirectoryNames();
  }, []);

  useEffect(() => {
    if (selectedValue !== null) {
      setIdReferences(selectedValue);
    }
  }, [selectedValue]);

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert(
        "As senhas não coincidem!",
        "Utilize a senha correta em ambos os campos.",
        [
          {
            text: "Fechar",
            style: "cancel",
          },
        ]
      );
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
        if (
          nome == "" ||
          sobrenome == "" ||
          email == "" ||
          cargo == null ||
          senha == ""
        ) {
          Alert.alert(
            "Campo(s) vazio(s)!",
            `Verifique se todos os campos estão preenchidos corretamente.`,
            [
              {
                text: "Fechar",
                style: "cancel",
              },
            ]
          );
        } else {
          await RegisterService.createFuncionario(userData);
          Alert.alert(
            "Cadastro realizado!",
            `Funcionário ${nome} ${sobrenome} (${email}), com o cargo ${cargo} cadastrado com sucesso!`,
            [
              {
                text: "Fechar",
                style: "cancel",
              },
            ]
          );
        }
      } catch (error) {
        if (
          error == 400 ||
          error == "AxiosError: Request failed with status code 400"
        ) {
          Alert.alert("Erro ao cadastrar!", `O email já está cadastrado.`, [
            {
              text: "Fechar",
              style: "cancel",
            },
          ]);
        }
        console.error("Erro ao cadastrar usuário:", error);
      }
    } else {
      userData = {
        name: nome,
        lastname: sobrenome,
        password: senha,
        entrerprise_name: nomeEmpresa,
        login: email,
        references_directory: idReferences,
      };

      try {
        if (
          nome == "" ||
          sobrenome == "" ||
          email == "" ||
          nomeEmpresa == "" ||
          senha == ""
        ) {
          Alert.alert(
            "Campo(s) vazio(s)!",
            `Verifique se todos os campos estão preenchidos corretamente.`,
            [
              {
                text: "Fechar",
                style: "cancel",
              },
            ]
          );
        } else {
          await RegisterService.createCliente(userData);
          Alert.alert(
            "Cadastrado realizado!",
            `Cliente ${nome} ${sobrenome} (${email}), da empresa ${nomeEmpresa} cadastrado com sucesso!`,
            [
              {
                text: "Fechar",
                style: "cancel",
              },
            ]
          );
        }
      } catch (error) {
        if (
          error == 400 ||
          error == "AxiosError: Request failed with status code 400"
        ) {
          Alert.alert("Erro ao cadastrar!", `O email já está cadastrado.`, [
            {
              text: "Fechar",
              style: "cancel",
            },
          ]);
        }
        console.error("Erro ao cadastrar cliente:", error);
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

          <View style={styles.modal}>
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
                placeholderTextColor={"#6B6D71"}
                fontSize={15}
              />
              <TextInput
                style={styles.inputNomeSobrenome}
                placeholder="Sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
                placeholderTextColor={"#6B6D71"}
                fontSize={15}
              />
            </View>

            {tipoCadastro === "funcionario" ? (
              <View style={styles.cargoPicker}>
                <RNPickerSelect
                  style={styles.picker}
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
              <View style={styles.containerSelectClient}>
                <TextInput
                  style={styles.input}
                  placeholder="Nome da Empresa"
                  value={nomeEmpresa}
                  onChangeText={setNomeEmpresa}
                  placeholderTextColor={"#6B6D71"}
                  fontSize={15}
                />

                <View style={styles.cargoPicker}>
                  <RNPickerSelect
                    style={styles.input}
                    onValueChange={(value) => setSelectedValue(value)}
                    items={pickerItems}
                    placeholder={{
                      label: "Selecione um Diretório:",
                      value: null,
                    }}
                  />
                </View>
              </View>
            )}

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={"#6B6D71"}
              fontSize={15}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
              placeholderTextColor={"#6B6D71"}
              fontSize={15}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholderTextColor={"#6B6D71"}
              fontSize={15}
            />

            <TouchableOpacity
              style={styles.btn_cadastro}
              onPress={handleRegister}
            >
              <Text style={styles.text_cadastrar}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer routeSelected={route.name} />
    </View>
  );
}
