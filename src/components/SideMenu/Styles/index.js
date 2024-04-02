import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerOpcao: {
    marginTop: 15,
    marginHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '67%',
  },
  header: {
    alignItems: "center",
    marginBottom: 5,
    paddingTop: 25,
    paddingBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  subContainerOpcao:{
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    marginHorizontal: 12,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemLast: {
    paddingVertical: 10,
    marginHorizontal: 12,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemLogout: {
    paddingVertical: 10,
    marginHorizontal: 12,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007B8F",
    borderRadius: 7,
  },
  textOpcoes: {
    color: colors.primary,
    marginLeft: 5,
  },
  textOpcoesLogout: {
    color: colors.branco,
    marginLeft: 5,
    fontWeight: "500",
  },
  icon_logout: {
    marginLeft: 10,
  },
  containerLogout: {
    justifyContent: 'flex-end',
  },
});

export default styles;
