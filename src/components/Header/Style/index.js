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
    image:{
        width:50,
        height:50,
        tintColor: 'white',
    }
});

export default styles;
