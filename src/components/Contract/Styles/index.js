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
    paddingLeft: 10,
    marginLeft: 5,
  },
  btnContract: {
    height: 80,
    width: "88%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: colors.branco,
  },
  concluded: {
    fontSize: 13,
    width: "95%",
    color: colors.branco,
    height: 20,
  },
  time: {
    fontSize: 13,
    width: "95%",
    color: colors.branco,
    height: 20,
    textAlign: 'center',
  },

  main: {
    height: 50,
    width: "70%",
    flexDirection: "row",
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
});

export default styles;
