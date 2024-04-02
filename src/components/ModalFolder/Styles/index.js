import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        height: 250,
        width: 300,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#007B8F',
        elevation: 15,
        alignItems: 'center',
        borderColor: '#083C52',
        borderWidth: 1,
      },
      title:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
      },
      inputTitulo: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        borderColor: 'grey',
        borderWidth: 1.5,
      },
      buttonContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        borderRadius: 5,
      },
      btnAdd:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '60%',
        backgroundColor: 'white',
        borderRadius: 5,
        backgroundColor: '#00A148',
        borderColor: '#417C5C',
        borderWidth: 1.5,
      },
      btnCancel:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '38%',
        backgroundColor: 'white',
        borderRadius: 5,
        backgroundColor: '#C06F26',
        borderColor: '#975B26',
        borderWidth: 1.5,
      },
})
export default styles;