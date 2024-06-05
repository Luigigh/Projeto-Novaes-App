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
    },
    btnSelectedList:{
        width:65,
        height:50,
        borderRadius:100,
        backgroundColor: colors.secondary,
        alignItems:'center',
        justifyContent:'center'
    },
    btnSelectedDirectory:{
        width:65,
        height:50,
        borderRadius:100,
        backgroundColor: colors.folder1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnSelectedContract:{
        width:65,
        height:50,
        borderRadius:100,
        backgroundColor: colors.azul_claro1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnSelectedProfile:{
        width:65,
        height:50,
        borderRadius:100,
        backgroundColor: colors.verde,
        alignItems:'center',
        justifyContent:'center'
    },
    colorIcon: {
        color: 'white'
    }
    
});

export default styles;
