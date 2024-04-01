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
        marginVertical: 5
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
    }
});

export default styles;
