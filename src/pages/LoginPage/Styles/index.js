import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
        web:{
          padding: 15
        },
        android:{
          position: 'absolute'
        },
        ios:{

        },
    }),
    height: "100%",
    width: "100%",
    alignItems: "center",
    marginTop: 30
  },
  header: {
    alignItems: "center",
    justifyContent: 'center',
    width: "100%",
  },
  linear: {
    ...Platform.select({
      web: {
        height: '100%',
        width: "100%",
      },
      android: {
        height: '100%',
        width: "100%",
      },
      ios: {

      },
    }),
    alignItems: "center",

    justifyContent: 'center',
    borderRadius: 20,
    paddingBottom: 5,
    elevation: 15,
  },
  main: {
    ...Platform.select({
      web: {
        height: 350,
        width: "40%",
        marginTop: 35,
      },
      android: {
        height: 400,
        width: "90%",
        marginTop: 50,
      },
      ios: {

      }
    }),
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 20,
    alignItems: 'center',
    paddingBottom: 5,
    shadowColor: 'black',
    shadowRadius: 20,
  },
  texto_login: {
    color: "#007B8F",
    fontSize: 25,
    marginBottom: 8,
    fontWeight: '500'
  },
  input_login: {
    ...Platform.select({
      web:{
        width: '60%'
      },
      android:{
        width: '80%'
      },
      ios:{

      }
    }),
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 6,
    fontSize: 17
  },
  btn_login: {
    backgroundColor: "#007B8F",
    padding: 10,
    borderRadius: 10,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 15,
    marginBottom: 35
  },
  text_entrar: {
    color: 'white',
    fontSize: 18
  },
  text_descricao: {
    fontSize: 14,
    marginVertical: 2,
    textDecorationLine: 'underline',
  },
});

export default styles;
