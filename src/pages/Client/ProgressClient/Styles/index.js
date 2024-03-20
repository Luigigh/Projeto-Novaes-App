import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },

  scrollviewContainer: {
    height: 400,
    width: "100%",
  },

  etapaContainer: {
    height: 150,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
    height: "auto",
    width: "75%",
    borderColor: "#007B8F",
    borderWidth: 1,
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 5,
  },

  etapaTitulo: {
    textAlign: "center",
    marginBottom: 5,
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontSize: 15,
  },

  etapaDescricao: {
    marginBottom: 5,
    width: "90%",
    alignSelf: "center",
  },

  etapaDataHora: {
    marginLeft: "5%",
  },
});

export default styles;
