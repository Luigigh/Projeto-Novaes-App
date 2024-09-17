import { StyleSheet } from "react-native";
import colors from "../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },

  titleProgress: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 30,
    marginTop: 10
  },

  BoxStage: {
    width: "100%",
  },

  progressWrapper:{
    alignItems: 'center',
    width: "100%",
  },

  progressContainer: {
    maxHeight: 250,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
    borderColor: colors.primary,
    borderRadius: 10,
  },

  selectedStage:{
    backgroundColor: "#E0E0E0",
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
    backgroundColor: colors.branco,
    justifyContent: "space-between",
    borderRadius: 5,
    elevation: 8,
  },

  progressContent: {
    maxHeight: 240,
    justifyContent: "space-around",
    alignItems: "center",
    width: "85%",
  },

  buttons: {
    height: 'auto',
    borderRadius: 10,
    width: "15%",
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
    alignContent: 'flex-end',
    textAlign: "center",
    width: "auto",
    marginVertical: 7,
    maxWidth: '85%',
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

  btnAdd: {
    height: 60,
    width: 60,
    backgroundColor: "#007B8F",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  btnEdit: {
    height: 45,
    width: 45,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "auto",
  },

  btnDelete: {
    height: 45,
    width: 45,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    alignItems: "flex-end",
    paddingRight: 10,
    justifyContent: "center",
  },
});

export default styles;
