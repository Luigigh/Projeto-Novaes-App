import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.branco,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: colors.azul_claro,
    padding: 5
  },
  content:{
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center'
  },
  ButtonName: {
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    height: 50,
  },
  Text: {
    color: 'black',
  },
  optionsFolder:{
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  ButtonDelete: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.secondary
  },
  ButtonEdit: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.verde
  },
});

export default styles;
