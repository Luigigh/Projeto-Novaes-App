import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 20,
    height: '70%',
    width: '80%',    
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 20
  },
  linear:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 20,
    elevation: 15
  },
  texto_cadastro:{
    marginTop: 10,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 6,
    width: 250
  },
  btn_cadastro:{
    backgroundColor: "#007B8F",
    padding: 10,
    borderRadius: 10,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginVertical: 15
  },
  text_cadastrar:{
    color: 'white',
  },
  textos:{
    marginTop: 60
  },

});

export default styles;
