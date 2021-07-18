import React from "react";
import {
  THEME_WHITE_COLOR,
  THEME_LIGHT_BLUE,
  COLORS,
} from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: THEME_WHITE_COLOR,
  },
  container : {
    marginTop:100,
    marginBottom:400
    
  },

  textInput: {
    height: 45,
    borderColor: THEME_LIGHT_BLUE,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 37,
    marginVertical: 30,
  },
  changeSignIn: {
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonStyle: {
    flexDirection: "row",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME_LIGHT_BLUE,

  },
  buttonStyleActive: {
    flexDirection: "row",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003366",
    marginTop:30,
    borderRadius: 8
  },
  buttonText: {
    color: THEME_WHITE_COLOR,
    fontSize: 18,
    fontWeight: "800",
  },
});

export default styles;
