import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({

    container:{
        height: 70,
        width: '100%',
        flexDirection: 'row',
        backgroundColor:colors.primary,
        borderRadius:5,
        alignItems: 'center',
        marginVertical: 10
    },
    ButtonName:{
        justifyContent: 'center',
        width: '95%',
        height: 50,
    },
    Text:{
        color: colors.branco
    },

});

export default styles;
