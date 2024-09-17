import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:70,
        width: '100%',
        borderRadius:5,
        padding:10,
        marginBottom:10,
        marginTop:10,
        backgroundColor: colors.branco,
        elevation: 5,
    },
    nameFolder:{
        fontSize:18,
        color:"#000"
    },
    lastModification: {
        color:"#000"
    },
    content:{
        height: 60,
        width: '100%',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between'

    },
    InformationFile:{
        marginLeft:20,
    },
    Text:{
        fontSize: 16,
        maxWidth:200,
        maxHeight:25,
        color: colors.primary,
    }
    
});

export default styles;
