import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ScrollView:{
        flex: 1,
    },
  container: {
    flex: 1,
    
  },
  btnEtapa: {
    height: 80,
    width: 80,
    backgroundColor: "#007B8F",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons:{
    alignItems: 'flex-end',
    height: 'auto',
    width: '15%',
    alignItems: 'center',
},
  btnAdd: {
    height: 60,
    width: 60,
    backgroundColor: "#007B8F",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  ViewDescricao:{
    textAlign: 'center'
  },
  btnEdit: {
    height: 40,
    width: 40,
    backgroundColor: "#00A148",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 'auto',
  },
  btnDelete: {
    height: 40,
    width: 40,
    backgroundColor: "#E56D01",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  mainEtapa: {
    flexDirection: "row",
    height: 'auto',
    marginVertical: 10,
    alignItems: 'center',
  },

  boxEtapa: {
    flexDirection: 'row',
    borderColor: "#007B8F",
    borderWidth: 1,
    marginLeft: 5,
    borderRadius: 10,
    height: 'auto',
    maxWidth: 300,
    width: 300,
    padding: 5,
  },
  dados:{
    width: '85%',
  },
  modalContainer: {
    width: 300,
    height: 400,
    backgroundColor: "#007B8F",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
    elevation: 10,
    justifyContent: 'center'
  },
  modalContent: {
    marginTop: 20,
    height: 225,
    alignItems: "center",
    width: "80%",
  },
  ViewTitulo:{
    alignItems: 'center',
  },
  titulo: {
    fontSize: 23,
    color: "white",
    textDecorationLine: "underline",
  },
  txt: {
    fontSize: 18,
    color: "#007B8F",
  },
  inputTitulo: {
    alignSelf: "center",
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "left",
    marginBottom: 10,
    padding: 5,
  },
  inputDescricao: {
    height: 115,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "left",
    paddingBottom: 78,
    marginBottom: 20,
    padding: 5,
  },
  inputDataHora:{
    alignSelf: "center",
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    textAlign: "left",
    marginBottom: 10,
    padding: 5,
  },
  btnSalvar: {
    height: 40,
    width: 150,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 20
  },
});

export default styles;
