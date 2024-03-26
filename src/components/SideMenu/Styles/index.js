import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    imagemBackground: {
        width: undefined,
        padding: 16,
        paddingTop: 48
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "red"
    },
    textPessoa: {
        color: 'blue',
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8
    },
    TESTE: {
        flexDirection: 'row'
    }
});

export default styles;
