import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent:'space-between',
      },
      folderItem: {
        backgroundColor: 'lightblue',
        marginBottom: 5,
        padding: 10
      },
      fileItem: {
        borderWidth: 1,
        borderColor: 'blue',
        marginBottom: 5,
        padding: 10
      }
  
});

export default styles;
