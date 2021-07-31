import React from "react";
import {
  THEME_WHITE_COLOR,
  THEME_LIGHT_BLUE,
  THEME_BLUE_COLOR,
  THEME_BISMARK_COLOR,
  COLORS
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
    marginTop:50,
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
  subText: {
    fontSize: 14,
    color: THEME_BISMARK_COLOR,
  },
  loginText: {
    fontSize: 14,
    fontWeight: "600",
    color: THEME_BLUE_COLOR,
  },
  forgetPassword: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    marginVertical: 10,
  },
  forgetPasswordText: {
    fontSize: 14,
    fontWeight: "600",
    color: THEME_BISMARK_COLOR,
  },
  buttonStyle: {
   
    flexDirection: "row",
    height: 56,
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
    borderRadius: 8
  },
  buttonText: {

    color: THEME_WHITE_COLOR,
    fontSize: 18,
    fontWeight: "800",
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop:10
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default styles;
