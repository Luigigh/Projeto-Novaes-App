import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.branco,
      backg: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textEscolha: {
        color: colors.branco,
    },
    closeButton: {
      top: 5,
      right: 5,
    },
    buttonsContainer: {
      width: '70%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    btn_modal: {
        backgroundColor: colors.branco,
        padding: 5,
        borderRadius: 50
    }
  });  

export default styles;
