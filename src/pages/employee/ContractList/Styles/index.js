import { StyleSheet } from "react-native";
import colors from "../../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ViewFlatList:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  btnPlus:{
    height: 65,
    width: 65,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  }
});

export default styles;

