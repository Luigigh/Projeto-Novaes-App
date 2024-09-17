import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.branco,
        padding:10,
        elevation: 20,
    },
    image:{
        width:50,
        height:50,
    }
});

export default styles;
