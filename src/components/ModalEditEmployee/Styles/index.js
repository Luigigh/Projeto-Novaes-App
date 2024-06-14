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
    fontSize: 22,
    color: '#083C52',
    marginBottom: 20,
    fontWeight: '500'
  },
  inputs: {
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 18,
    color: 'black',
  },
  inputOffice: {
    borderBottomWidth: 1,
    borderBottomColor: '#a1a1a1',
    color: '#a1a1a1',
    marginBottom: 15,
    fontSize: 18,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnEnviar: {
    backgroundColor: "#00A148",
    color: "white",
    borderRadius: 5,
    padding: 7,
    marginHorizontal: 5,
  },
  btnCancelar: {
    backgroundColor: "#E56D01",
    borderRadius: 5,
    padding: 7,
    fontSize: 15,
    marginHorizontal: 5,
  },
  txtButton: {
    color: "white",
    fontSize: 17,
  },
  imagem_perfil: {
    borderRadius: 300,
    width: 130,
    height: 130,
  },
  btnSave: {
    backgroundColor: "#00A148",
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnExcluir:{
    backgroundColor: '#E56D01',
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    marginTop: 10
  },
  btnOk: {
    backgroundColor: '#083C52',
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    marginTop: 10
  }
});

export default styles;
