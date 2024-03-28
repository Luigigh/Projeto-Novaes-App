import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf: 'center',
        backgroundColor:colors.primary,
        height:70,
        width: '95%',
        borderRadius:5,
        padding:10,
        marginVertical: 10
    },

    btnFolder:{
        backgroundColor: colors.verde,
    },

    nameFolder:{
        fontSize:18,
        color:colors.branco,
    },

    lastModification: {
        color:colors.branco,
    },

    right:{
        flexDirection: 'row',
        width: '94%',
        justifyContent: 'space-around'
    },

    InformationPaste:{
        flexDirection: 'column',
        width: '80%',
    },

    contentContainer:{
        
    },

    btnOptions:{
        width: 50,
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

      },

      optionText: {
      },

});

export default styles;
