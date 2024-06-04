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
        backgroundColor: '#ededed',
        alignItems:'center',
        justifyContent:'center'
    },
    btnNotSelected:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:colors.azu,
        alignItems:'center',
        justifyContent:'center'
    }
    
});

export default styles;
