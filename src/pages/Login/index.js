import React from "react";
import { View, Button, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Login/Styles";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imagem_logo} source={require("../../../src/img/LogoGrupoNovaesGrande.png")}></Image>
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
                    ></TextInput>

                    <TextInput
                        style={styles.input_login}
                        placeholder="Senha"
                        secureTextEntry={true}
                    ></TextInput>

                    <TouchableOpacity style={styles.btn_login} onPress={() => navigation.navigate("ContractList")}>
                        <Text style={styles.text_entrar}>Entrar</Text>
                    </TouchableOpacity>

                </LinearGradient>
            </View>
        </View>
    );
}