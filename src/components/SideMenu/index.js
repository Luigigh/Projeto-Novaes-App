// SideMenu.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import IconUser from "react-native-vector-icons/Feather";
import IconContract from "react-native-vector-icons/Ionicons";
import IconProgress from "react-native-vector-icons/MaterialCommunityIcons";
import IconContacts from "react-native-vector-icons/AntDesign";
import IconLogout from "react-native-vector-icons/MaterialIcons";
import Iconlist from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../color";
import ModalLogout from "../ModalLogout";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles";

const SideMenu = ({ navigation, menuSelected }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    navigation.navigate("Login");
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, "#007B8F"]}
      >
        <Image
          source={require("../../img/IconProfile.png")}
          style={styles.userImage}
        />
        <Text style={styles.username}>Nome do Usuário</Text>
      </LinearGradient>
      <View style={styles.containerOpcao}>
        <View style={styles.subContainerOpcao}>
          <TouchableOpacity
            style={[
              styles.menuItem,
              menuSelected === "InfoManagerEmployer" && styles.menuItemSelected,
            ]}
            onPress={() => navigation.navigate("InfoManagerEmployer")}
          >
            <IconUser name="user" size={20} color={colors.primary} />
            <Text style={styles.textOpcoes}>Meu perfil</Text>
          </TouchableOpacity>

          <View style={styles.line}></View>

          <TouchableOpacity
            style={[
              styles.menuItem,
              menuSelected === "ProgressClient" && styles.menuItemSelected,
            ]}
            onPress={() => navigation.navigate("ProgressClient")}
          >
            <IconProgress name="progress-clock" size={20} color={colors.primary} />
            <Text style={styles.textOpcoes}>Progresso do cliente</Text>
          </TouchableOpacity>

          <View style={styles.line}></View>

          <TouchableOpacity
            style={[
              styles.menuItem,
              menuSelected === "ClientList" && styles.menuItemSelected,
            ]}
            onPress={() => navigation.navigate("ClientList")}
          >
            <Iconlist name="format-list-bulleted" size={20} color={colors.primary} />
            <Text style={styles.textOpcoes}>Lista de clientes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerLogout}>
          <TouchableOpacity
            style={styles.menuItemLogout}
            onPress={() => setShowModal(true)}
          >
            <IconLogout
              name="logout"
              size={20}
              color={colors.branco}
              style={styles.icon_logout}
            />
            <Text style={styles.textOpcoesLogout}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalLogout
        visible={showModal}
        onClose={() => setShowModal(false)}
        onLogout={handleLogout}
      />
    </View>
  );
};

export default SideMenu;
