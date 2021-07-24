import React from "react";
import { View, Text } from "react-native";
import { THEME_ERROR_BOX_RED, THEME_WHITE_COLOR } from "../../constants/theme";

export default ErrorMessageComponent = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 4,
        marginTop:100,
        backgroundColor: THEME_ERROR_BOX_RED,
        padding: 10,
        marginVertical: 15,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: THEME_WHITE_COLOR,
          fontWeight: "600",
        }}
      >
        {props.message}
      </Text>
    </View>
  );
};
