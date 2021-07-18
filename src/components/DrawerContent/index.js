import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
//import { userLogOut } from "../../actions/userAction";
import Constants from 'expo-constants';

import styles from "./style";

const customLabel = (text) => <Text style={styles.cartLable}>{text}</Text>;

const DrawerContent = (props) => {
  return (
    <View style={styles.drawerWrapper}>
      <View style={styles.topContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.subText}>
          {props.authUser ? props.authUser.organization.name : 
          //Constants.manifest.name
        "Occular Commerce"}
        </Text>
        {!props.authUser ? (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("AuthStack", {
                screen: "SignIn",
                params: { path: "drawer" },
              });
            }}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        ) : (
            <Text style={styles.nameText}>{`Hi ${props.authUser.first_name}!`}</Text>
          )}
      </View>
      <View style={styles.bottomContainer}>

        <DrawerContentScrollView {...props}>
          <DrawerItem
            label={() => customLabel("Home")}
            onPress={() => props.navigation.navigate("ProductList")}
          />
          {props.authUser && (
            <DrawerItem
              label={() => customLabel("My Orders")}
              onPress={() => props.navigation.navigate("OrderStack")}
            />
          )}
          <DrawerItem
            label={() => customLabel("Contact Us")}
            onPress={() =>
              props.navigation.navigate("AuthStack", {
                screen: "ContactUs",
              })
            }
          />
            <DrawerItem
            label={() => customLabel("Payment Gateway")}
            onPress={() =>
              props.navigation.navigate("PaymentStack", {
                screen: "PaymentGateway",
              })
            }
          /> 
        </DrawerContentScrollView>

        <View style={styles.bottomRow}>
          {props.authUser && (
            <TouchableOpacity
              onPress={() => props.userLogOut()}
              style={{ paddingVertical: 8, paddingHorizontal: 16 }}
            >
              <Text style={styles.logOutText}>Logout</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{ paddingVertical: 8, paddingHorizontal: 16 }}
          >
            { <Text style={styles.versionText}>{"Version" + `${" 1.0.0"}`}
            {/*`${Constants.manifest.version}`}*/}
            </Text> }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  authUser: state.user.authUser,
});

const mapDispatchToProps = (dispatch) => ({
  userLogOut: (userData) => dispatch(userLogOut(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
