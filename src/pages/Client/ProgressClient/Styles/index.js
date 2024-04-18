import {StyleSheet} from 'react-native';
import colors from "../../../../color";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },

    BoxStage:{
        width: '100%',
    },

    progressContainer:{
      maxHeight: 150,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center', 
      marginVertical: 20,
    },

    btnClock:{
      height: 80,
      width: 80,
      backgroundColor: "#007B8F",
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 5,
    },

    content:{
      flexDirection: 'row',
      height: 'auto',
      width: '75%',
      borderColor: '#007B8F',
      borderWidth: 1,
      justifyContent: 'space-between',
      borderRadius: 5,
    },

    progressContent:{
      maxHeight: 150,
      alignItems: 'center',
      width: '100%',
    },

});



export default styles;