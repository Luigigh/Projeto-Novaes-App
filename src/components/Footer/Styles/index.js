import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.primary,
        height:70,
        padding:10,
    },
    btnSelected:{
        width:65,
        height:50,
        borderRadius:100,
        backgroundColor: colors.laranja,
        alignItems:'center',
        justifyContent:'center'
    },
    btnNotSelected:{
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    }
    
});

export default styles;
