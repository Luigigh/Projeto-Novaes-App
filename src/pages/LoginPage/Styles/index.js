import { StyleSheet, Platform } from "react-native";
import colors from '../../../color';

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
    paddingTop: 30,
    backgroundColor: 'white',
  },
  header: {
    alignItems: "center",
    justifyContent: 'center',
    width: "100%",
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
    borderRadius: 5,
    alignItems: 'center',
    paddingBottom: 5,
    shadowColor: 'black',
    elevation: 8,
    backgroundColor: colors.login,
  },
  texto_login: {
    color: colors.primary,
    fontSize: 20,
    marginBottom: 15,
    fontWeight: '600'
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
    borderRadius: 5,
    marginVertical: 6,
    fontSize: 17,
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  btn_login: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 15,
    marginBottom: 35
  },
  text_entrar: {
    color: '#FFF',
    fontSize: 18
  },
  text_descricao: {
    fontSize: 14,
    marginVertical: 2,
    textDecorationLine: 'underline',
  },
});

export default styles;
