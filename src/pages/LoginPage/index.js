import React, { useState } from "react";
import { View, Button, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import { serviceLoginMethod } from "../../service/UserService";
import { LinearGradient } from "expo-linear-gradient";
import { useUser } from "../../context/index.js";

export default function LoginScreen() {
    const navigation = useNavigation();
    const { setUsername: setUsernameContext } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertEmpty, setAlertEmpty] = useState('');

    const login = () => {
        if(username === "" || password === ""){
            setAlertEmpty("Todos os campos devem ser preenchidos");
        } else {
            serviceLoginMethod(username, password)
            .then(function(result) {
                if(result === 'Employee' || result === 'Client'){
                    if(result == 'Employee'){
                        setUsernameContext(username);
                        navigation.navigate('ContractList');
                    }else{
                        setUsernameContext(username);
                        navigation.navigate('ContractList');
                    }
                } else {
                    setAlertEmpty('Erro no Login... Usuário ou Senha Incorretos');
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imagem_logo} source={require("../../img/LogoGrupoNovaesGrande.png")}></Image>
            </View>

            <View style={styles.main}>
                <LinearGradient
                    style={styles.linear}
                    colors={["#B3DFE7", "#EEEEEE", "#FFFFFF"]}
                >
                    <Text style={styles.texto_login}>Faça login na Novaes</Text>

                    <TextInput
                        style={styles.input_login}
                        placeholder="Email"
                        onChangeText={text => setUsername(text)}
                        // onChangeText={text => setUsernameState(text)}
                    ></TextInput>

                    <TextInput
                        style={styles.input_login}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    ></TextInput>

                    <Text>{alertEmpty}</Text>
                    <TouchableOpacity style={styles.btn_login} onPress={async() => login()}>
                        <Text style={styles.text_entrar}>Entrar</Text>
                    </TouchableOpacity>

                </LinearGradient>
            </View>
        </View>
    );
}
