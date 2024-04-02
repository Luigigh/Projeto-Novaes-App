import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        backgroundColor:colors.primary,
        height:70,
        width: '100%',
        borderRadius:5,
        padding:5,
        marginVertical: 5,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    button:{
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around'
    },

    content:{
        flexDirection: 'column',
        width: '75%',
        justifyContent: 'center'
    },

    iconFolder:{
        width: '15%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    nameFolder:{
        fontSize:18,
        color:colors.branco,
    },

    lastModification: {
        color:colors.branco,
    },

    options:{
        height: 65,
        width: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },



    MenuContainer:{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        justifyContent: "center",
        alignItems: "flex-end",
        zIndex: 1,
    },
    Editar: {
        height: 35,
        width: 60,
        borderRadius: 5,
        backgroundColor: colors.verde,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Deletar:{
        height: 35,
        width: 60,
        borderRadius: 5,
        backgroundColor: colors.laranja,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default styles;
