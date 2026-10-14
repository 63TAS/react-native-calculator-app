
import { StyleSheet } from "react-native";

export const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  calculator: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 20,
    paddingBottom: 15,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 20,
  },

  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 25,
  },

  display: {
    color: "#FFFFFF",
    fontSize: 65,
    fontWeight: "300",
  },

  buttonsContainer: {
    gap: 4,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
