import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: '100%',
  },
  search: {
    backgroundColor: "#007B8F",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
  },
  inputsearch: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 8,
    marginVertical: 10,
    fontSize: 20,
    position: 'relative'
  },
  iconcamera:{
    position: 'absolute',
  },
});

export default styles;
