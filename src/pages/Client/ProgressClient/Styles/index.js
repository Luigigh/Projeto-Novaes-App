import {StyleSheet} from 'react-native';
import colors from "../../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnVoltar: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    paddingRight: 10,
    justifyContent: "space-around",

  },
  btnBack: {
    height: 50,
    width: 50,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 10,
  },

  emptyMessageContainer:{
    height: 250,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  emptyMessage:{
    height: 50,
    alignSelf: "center",
    fontSize: 20,
  },
});



export default styles;