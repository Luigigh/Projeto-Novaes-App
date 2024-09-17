import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.branco,
        height:70,
        padding:10,
        elevation: 20,
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
        backgroundColor: colors.branco,
        alignItems:'center',
        justifyContent:'center'
    },
    btnSelectedDirectory:{
        width:65,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    btnSelectedContract:{
        width:80,
        height:50,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    btnSelectedProfile:{
        width:65,
        height:50,
        borderRadius:100,
        backgroundColor: colors.branco,
        alignItems:'center',
        justifyContent:'center'
    },
    colorIcon: {
        color: colors.primary
    },
    txt:{
        color:colors.primary,
        fontSize: 12,
    },
    txtNon: {
        color: colors.noncinza,
        fontSize: 12,
    },
});

export default styles;
