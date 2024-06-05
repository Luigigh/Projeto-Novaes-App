import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "96%",
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#052A39",
    marginLeft: 5,
    justifyContent: "space-between",
  },
  btnContract: {
    height: 80,
    width: "65%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.branco,
  },

  concludedTitle: {
    fontSize: 14,
    width: "95%",
    color: colors.branco,
    height: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  concluded: {
    fontSize: 13,
    width: "95%",
    color: colors.branco,
    height: 20,
    textAlign: "center",
  },

  timeTitle: {
    fontSize: 14,
    width: "95%",
    color: colors.branco,
    height: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  time: {
    fontSize: 13,
    width: "95%",
    color: colors.branco,
    height: 20,
    textAlign: "center",
  },

  main: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  maintatus: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  maintime: {
    width: "50%",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "center",
  },

  BtnOption: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "12%",
  },

  buttons: {
    height: 80,
    width: "10%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnEdit: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginRight: 3,
    backgroundColor: colors.verde_claro1,
  },

  btnDelete: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginRight: 3,
    backgroundColor: colors.secondary,
  },

  ButtonOptions: {
    width: "100%",
  },
});

export default styles;
