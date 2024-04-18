import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  subContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInputs:{
    width: "90%",
  },
  titleModal: {
    fontSize: 20,
    color: '#083C52',
    marginBottom: 10,
  },
  inputs: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 15,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  btnEnviar: {
    backgroundColor: "#00A148",
    color: "white",
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  btnCancelar: {
    backgroundColor: "#E56D01",
    borderRadius: 5,
    padding: 5,
    fontSize: 15,
    marginHorizontal: 5,
  },
  txtButton: {
    color: "white",
    fontSize: 15,
  },
});

export default styles;
