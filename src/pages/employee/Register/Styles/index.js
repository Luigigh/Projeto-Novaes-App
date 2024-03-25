import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  body:{
    alignItems: 'center',
  },

  main: {
    marginTop: 20,
    height: '60%',
    width: '80%',    
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 20,
    alignItems: 'center',
    
  },
  linear:{
    height: '100%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 20,
    elevation: 15,
    
  },
  texto_cadastro:{
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 6,
    width: '80%'
  },
  btn_cadastro:{
    backgroundColor: "#007B8F",
    padding: 10,
    borderRadius: 10,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40
  },
  text_cadastrar:{
    color: 'white',
    fontSize: 17
  },
  textos:{
    flexDirection: 'row',
  },

  NomeSobrenome:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  inputNomeSobrenome:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 6,
    width: '45%',
  },

  buttonsUser:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  btnFuncionario:{
    backgroundColor: '#00A148',
    height: 47,
    width: '50%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#417C5C',
    borderWidth: 1.5,
  },

  btnCliente:{
    backgroundColor: '#C06F26',
    height: 45,
    width: '45%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#975B26',
    borderWidth: 1.5,
  },


});

export default styles;
