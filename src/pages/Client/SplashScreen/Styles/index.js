import { StyleSheet } from "react-native";
import colors from "../../../../color";

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  btnContainer:{
    flexDirection:'column',
    marginTop:190
  },

  containerButton:{
    width:300,
    height:45,
    backgroundColor: colors.primary,
    borderRadius:5,
    justifyContent:'center',
    alignContent:'center',
    marginBottom:30,
  },
  buttonEntrar:{
    alignSelf:'center',
    color:colors.branco,
    fontSize:22,

  },
  buttonCadastrar:{
    alignSelf:'center',
    color:colors.branco,
    fontSize:22,
  }
  
});

export default styles;
