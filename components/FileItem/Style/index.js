import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:2,
        borderColor:colors.primary,
        height:70,
        borderRadius:5,
        padding:10,
        marginBottom:10,
        marginTop:10,
    },
    nameFolder:{
        fontSize:18,
        color:"#000"
    },
    lastModification: {
        color:"#000"
    },
    right:{
        flexDirection:'row',
    },
    InformationFile:{
        marginLeft:20,
    }
    
});

export default styles;
