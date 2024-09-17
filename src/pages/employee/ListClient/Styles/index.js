import { StyleSheet } from "react-native";
import colors from "../../../../color";

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
    position: 'relative',
    justifyContent: 'center',
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
    width: "90%",
    padding: 8,
    marginVertical: 10,
    fontSize: 20,
    position: "relative",
    borderWidth: 1,
    borderColor: '#083C52'
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,

  },
  tabButton: {
    backgroundColor: colors.branco,
    width: '50%',
    alignItems: 'center',
    padding: 7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    elevation: 15
  },
  tabText: {
    fontSize: 20,
    fontWeight: '600'
  },
  activeTab: {
    borderWidth: 1,
    borderColor: 'black'
  },
  clientList: {
    width: '90%',
    backgroundColor: colors.branco,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    padding: 7,
    elevation: 15,
  },
  iconcamera: {
    position: "absolute",
    top: -15,
    right: 15,
  },
  btnContato: {
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#083C52',
    marginVertical: 10,
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
  btnAdd: {
    height: 60,
    width: 60,
    backgroundColor: colors.branco,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 20,
    marginVertical: 5
  },
});

export default styles;
