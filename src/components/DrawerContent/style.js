import React from "react";
import {
  THEME_WHITE_COLOR,
  THEME_BLACK_COLOR,
} from "../../constants/theme";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme"

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: COLORS.SIDEBAR_TOP_BACKGROUND,
    paddingHorizontal: 16,
    borderBottomEndRadius: 36,
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 22,
    color: COLORS.SIDEBAR_TOP_TEXT
  },
  subText: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 22,
    color: COLORS.SIDEBAR_TOP_TEXT
  },
  buttonStyle: {
    backgroundColor: THEME_BLACK_COLOR,
    marginTop: 16,
    paddingHorizontal: 80,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: THEME_WHITE_COLOR,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 22,
  },
  nameText: {
    marginTop: 16,
    color: COLORS.SIDEBAR_TOP_TEXT,
    fontSize: 26,
    fontWeight: "600",
  },
  bottomContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 8
  },
  logOutText: {
    color: THEME_BLACK_COLOR,
    fontSize: 14,
    fontWeight: "400",
  },
  versionText: {
    color: THEME_BLACK_COLOR,
    fontSize: 14,
    fontWeight: "400",
  },
  cartLable: {
    color: THEME_BLACK_COLOR,
    fontSize: 17,
    fontWeight: "600",
  },
});

export default styles;
