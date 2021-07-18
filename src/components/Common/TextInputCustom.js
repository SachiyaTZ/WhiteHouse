import React from "react";
import { View, TextInput, Text } from "react-native";
import { THEME_ERROR_RED } from "../../constants/theme";
export default TextInputCustom = (props) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 14 }}>{props.label}</Text>
      <TextInput
        style={
          props.error
            ? [props.style, { borderColor: THEME_ERROR_RED }]
            : props.style
        }
        autoCapitalize={"none"}
        returnKeyType={"done"}
        returnKeyLabel={"Done"}
        keyboardType={props.keyboardType ? props.keyboardType : "ascii-capable"}
        secureTextEntry={props.secureTextEntry ? true : false}
        placeholderTextColor={"#A5B9CB"}
        value={props.value}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
};
