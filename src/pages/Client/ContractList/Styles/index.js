import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
      },
      body:{
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
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
      containerFlatList:{
        height: '70%',
        padding: 10,
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
      },
      iconContainer:{
        marginRight:20,
        marginTop:20
      },
      emptyContainer:{
        alignItems:'center'
      },
      list:{
      },


      btnSpace:{
        alignItems: 'flex-end',
        paddingRight: 10,
        justifyContent: 'center'
      },
      btnAdd: {
        height: 60,
        width: 60,
        backgroundColor: "#007B8F",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
      },
  
});

export default styles;
