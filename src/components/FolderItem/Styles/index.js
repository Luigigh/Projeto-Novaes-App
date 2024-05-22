import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "98%",
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#052A39",
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    width: "55%",
    alignItems: "center",
  },
  ButtonName: {
    justifyContent: "center",
    width: "95%",
    height: 50,
  },
  Text: {
    fontSize: 19,
    marginLeft: 10,
    color: colors.branco,
  },
  BtnOption: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "7%",
  },
  optionsFolder: {
    height: 60,
    width: "23%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ButtonDelete: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: colors.secondary,
  },
  ButtonEdit: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: colors.verde,
    marginRight: 3,
  },
});

export default styles;
