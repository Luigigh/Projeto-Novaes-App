import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    backgroundColor: "transparent",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  inputsearch: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    padding: 8,
    marginVertical: 10,
    fontSize: 20,
    position: "relative",
    borderWidth: 1,
    borderColor: '#083C52'
  },
  iconcamera: {
    position: "absolute",
    top: -15,
    right: 15,
  },
  btnContato: {
    width: '100%',
  },
  contato: {
    backgroundColor: '#F3F3F3',
    width: '100%',
    marginVertical: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  textName: {
    fontSize: 20,
    fontWeight: "400",
    color: '#083C52',
  },
});

export default styles;
