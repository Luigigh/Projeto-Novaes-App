import React, { useState } from "react";
import styles from "./Styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import {DrawerNavigatorItems} from '@react-navigation/drawer'
import InfoManager from "../../pages/Client/InfoManager";
import ContractList from "../../pages/Client/ContractList";
import Login from "../../pages/LoginPage";
import IconUser from "react-native-vector-icons/Feather";
import IconContract from "react-native-vector-icons/Ionicons";
import IconProgress from "react-native-vector-icons/MaterialCommunityIcons";
import IconLogout from "react-native-vector-icons/MaterialIcons";
import IconCadaster from "react-native-vector-icons/AntDesign";
import colors from "../../color";
import ModalLogout from "../ModalLogout";

const SideMenu = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    navigation.navigate("Login");
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../img/IconProfile.png")}
          style={styles.userImage}
        />
        <Text style={styles.username}>Nome do Usuário</Text>
      </View>
      <View style={styles.containerOpcao}>
        <View style={styles.subContainerOpcao}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("InfoManager")}
          >
            <IconUser name="user" size={20} color={colors.primary} />
            <Text style={styles.textOpcoes}>Meu perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("ContractList")}
          >
            <IconContract
              name="newspaper-outline"
              size={20}
              color={colors.primary}
            />
            <Text style={styles.textOpcoes}>Lista de Contratos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Progress")}
          >
            <IconProgress
              name="progress-question"
              size={20}
              color={colors.primary}
            />
            <Text style={styles.textOpcoes}>Progresso do Cliente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItemLast}
            onPress={() => navigation.navigate("Register")}
          >
            <IconCadaster
              name="adduser"
              size={20}
              color={colors.primary}
            />
            <Text style={styles.textOpcoes}>Cadastro de usuário</Text>
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
