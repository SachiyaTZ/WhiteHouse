import React from "react";
import { THEME_BISMARK_COLOR } from "../../constants/theme";
import { View, TouchableOpacity, TextInput } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

export default ProductSearch = (props) => {

  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity
        style={styles.drawerIconContainer}
        onPress={() => props.navigation.openDrawer()}
      >
        <Ionicons name="ios-menu" size={24} color={THEME_BISMARK_COLOR} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => props.onChangeText(text)}
          placeholder={props.title}
          autoCapitalize={"none"}
          returnKeyType={"done"}
          value={props.value}
        />
      </View>

      <TouchableOpacity style={styles.searchIconContainer}>
        <Ionicons name="ios-search" size={24} color={THEME_BISMARK_COLOR} />
      </TouchableOpacity>
    </View>
  );
};
