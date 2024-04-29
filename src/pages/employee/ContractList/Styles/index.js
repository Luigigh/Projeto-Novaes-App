import { StyleSheet } from "react-native";
import colors from "../../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  Options:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.branco,
    paddingHorizontal: 20
  },

  btnBack:{
    height: 65,
    width: 65,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  btnPlus:{
    height: 65,
    width: 65,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  goBackButton:{
    height: 65,
    width: 65,
    backgroundColor: colors.primary,
  },
});

export default styles;

