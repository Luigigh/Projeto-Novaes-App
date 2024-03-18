import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  boxContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  textEscolha: {
    textAlign: 'center',
    marginBottom: 20,
  },
  iconsModal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  textOpen: {
    marginLeft: 10
  },
});

export default styles;
