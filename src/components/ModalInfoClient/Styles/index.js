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
    fontSize: 25,
    color: '#083C52',
    marginBottom: 10,
    fontWeight: '500',
  },
  imagem_perfil: {
    borderRadius: 150,
    width: 130,
    height: 130,
    marginVertical: 15,
  },
  placeInputs: {
    fontSize: 17,
    color: '#083C52',
    fontWeight: '500'
  },
  inputs: {
    borderBottomWidth: 1,
    marginBottom: 25,
    marginTop: 4,
    fontSize: 15,
    color: 'black',
    paddingLeft: 10
  },
  btnOk: {
    backgroundColor: '#083C52',
    borderRadius: 5,
    padding: 10,
    fontSize: 15,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    marginTop: 10
  },
  txtButton: {
    color: "white",
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
