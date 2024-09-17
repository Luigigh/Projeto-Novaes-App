import { StyleSheet } from "react-native";
import colors from "../../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  bodyy:{
    flex: 1
  },

  Options: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },

  flatListContent:{
    minheight: 350,
    maxHeight: 400,
    width: "97%",
  },

  flatListContentFile: {
    Height: 350,
    minHeight: 260,
    width: "90%",
    marginTop: 20,
    maxHeight: 300,
  },

  emptyMessageContainer: {
    height: 250,
    justifyContent: 'space-around'
  },

  Text:{
    fontSize: 20
  },

  icon_emptyfolder: {
    height: 100,
    alignSelf: "center",
  },

  emptyMessageContainer:{
    height: 250,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  Text:{
    fontSize: 20
  },

  emptyMessage:{
    height: 100,
    alignSelf: "center",
  },

  btnBack: {
    height: 50,
    width: 50,
    backgroundColor: colors.branco,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    elevation: 10,
  },

  btnPlus: {
    height: 60,
    width: 60,
    backgroundColor: colors.branco,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 5,
    elevation: 20,
  },

});

export default styles;
