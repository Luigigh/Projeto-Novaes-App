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
    paddingLeft: 10,
  },
  content:{
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center'
  },
  ButtonName: {
    alignItems: 'flex-start',
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginLeft: 5,
  },
  Text: {
    fontSize: 17,
    marginLeft: 10,
    color: 'black',
  },
  optionsFolder:{
    height: 60,
    width: '42%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 10
  },
  ButtonDelete: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.secondary
  },
  ButtonEdit: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.verde,
    marginRight: 3
  },
});

export default styles;
