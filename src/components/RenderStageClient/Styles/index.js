import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    justifyContent: "center",
    
  },

  progressContainer: {
    maxHeight: 250,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    padding: 5,
  },

  btnClock: {
    height: 70,
    width: 70,
    backgroundColor: "#007B8F",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },

  content: {
    flexDirection: "row",
    height: "auto",
    width: "75%",
    borderColor: "#007B8F",
    borderWidth: 1,
    justifyContent: "space-between",
    borderRadius: 5,
  },

  progressContent: {
    maxHeight: 240,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },

  progressTitle: {
    width: "100%",
    alignItems: "center",
    marginVertical: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  progressDescription: {
    textAlign: "center",
    width: "auto",
    marginVertical: 7,
    maxWidth: '80%',
  },

  description: {
    includeFontPadding: false,
    textAlign: "left",
  },

  progressDate: {
    height: 30,
    flexDirection: 'row',
    width: "100%",
    alignItems: "center",
    justifyContent: 'flex-start',
    marginLeft: 3,
  },
  dataFormatada:{
    height: 25,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
  },
});

export default styles;
