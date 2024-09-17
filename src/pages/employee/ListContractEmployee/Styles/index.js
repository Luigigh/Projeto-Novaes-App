import { StyleSheet } from "react-native";
import colors from "../../../../color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
  },

  BoxStage: {
    width: "100%",
  },

  progressContainer: {
    maxHeight: 150,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  btnClock: {
    height: 80,
    width: 80,
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
    maxHeight: 150,
    alignItems: "center",
    width: "80%",
  },
  buttons: {
    width: "15%",
    alignItems: "center",
  },

  btnAdd: {
    height: 60,
    width: 60,
    backgroundColor: colors.branco,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 20,
    marginVertical: 5,
  },

  btnEdit: {
    height: 40,
    width: 40,
    backgroundColor: "#00A148",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "auto",
  },

  btnDelete: {
    height: 40,
    width: 40,
    backgroundColor: "#E56D01",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
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
  listContainer:{
    maxHeight:600
  }
});

export default styles;
