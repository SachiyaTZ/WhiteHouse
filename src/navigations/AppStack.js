import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { fetchUser, fetchOrganization } from "../actions/userAction";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthStackNavigator from "./AuthStack";
import TicketStackNavigator from "./TicketStack"

const Drawer = createDrawerNavigator();

const AppStackNavigator = (props) => {
  //const token = useSelector((state) => state.user.token);

  //connect redux actions
  //const dispatch = useDispatch();

  // if (token) {
  //   dispatch(fetchUser(token));
  // }

  // dispatch(fetchOrganization());

  return (

    <Drawer.Navigator
      initialRouteName="AuthStack"
      //drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="AuthStack" component={AuthStackNavigator} />
      <Drawer.Screen name="TicketStack" component={TicketStackNavigator} />
      {/* <Drawer.Screen name="login" component={AuthStackNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default AppStackNavigator;
