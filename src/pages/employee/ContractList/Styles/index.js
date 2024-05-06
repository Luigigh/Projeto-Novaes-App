import { StyleSheet } from "react-native";
import colors from "../../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  Options: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },

  flatListContentFile:{
    height: 250,
    width: '90%',
    marginTop: 20
  },

  btnBack: {
    height: 50,
    width: 50,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 10
  },

  btnPlus: {
    height: 60,
    width: 60,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 5
  },
});

export default styles;
