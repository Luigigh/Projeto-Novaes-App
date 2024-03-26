import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      item: {
        flex: 1,
      },
      nameFolder: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      lastModification: {
        fontSize: 14,
      },
      btnOptions: {
        marginLeft: 'auto',
      },
      optionsContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        elevation: 5,
        zIndex: 1,
      },
      optionItem: {
        padding: 5,
      },
      optionText: {
        fontSize: 16,
        color: '#000',
      },
    });
export default styles;