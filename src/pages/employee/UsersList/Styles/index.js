// Styles.js
import { StyleSheet } from "react-native";
import colors from '../../../../color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  title:{
    color: 'black',
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default styles;
