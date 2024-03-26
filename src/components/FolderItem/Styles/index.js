import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.primary,
        height:70,
        borderRadius:5,
        padding:10,
        marginBottom:10,
        marginTop:10,
    },
    nameFolder:{
        fontSize:18,
        color:colors.branco
    },
    lastModification: {
        color:colors.branco,
    },
    right:{
        flexDirection:'row',
        width: '90%',
        justifyContent: 'flex-end'
    },
    InformationPaste:{
        flexDirection:'row',
        marginLeft:20,
    },

    content:{
        flexDirection: 'collum'
    },

    btnOptions:{
        width: 75,
        height: 50,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
    },

    optionContainer:{
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 5,
        zIndex: 1,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
      },
      optionText: {
        marginLeft: 10,
      },

});

export default styles;
