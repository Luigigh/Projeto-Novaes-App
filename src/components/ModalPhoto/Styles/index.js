import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    imageContainer: {
      width: '90%',
      height: '90%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  });  

export default styles;
