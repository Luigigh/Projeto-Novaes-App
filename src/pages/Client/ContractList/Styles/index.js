import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between',
      },
      folderItem: {
        backgroundColor: 'lightblue',
        marginBottom: 5,
        padding: 10
      },
      fileItem: {
        borderWidth: 1,
        borderColor: 'blue',
        marginBottom: 5,
        padding: 10
      },
      main:{
        paddingLeft:15,
        paddingRight:15
      },
      caminho:{
        paddingLeft:20
      },
      title:{
        padding:20,
        fontSize:22
      },
      caminhoContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      iconContainer:{
        marginRight:20,
        marginTop:20
      },
      emptyContainer:{
        alignItems:'center'
      },
      list:{
        justifyContent:'flex-start'
      }
  
});

export default styles;