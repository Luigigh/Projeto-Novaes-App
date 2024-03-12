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
    },
    InformationPaste:{
        marginLeft:20,
    }
    
});

export default styles;
