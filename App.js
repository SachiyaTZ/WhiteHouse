import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import AppStackNavigator from "./src/navigations/AppStack";
import { store, persistor } from "./src/constants/storage";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStackNavigator from "./src/navigations/AuthStack";
import TicketStackNavigator from "./src/navigations/TicketStack";
import Login from "./src/screens/Login";



export default function App() {

  const Drawer = createDrawerNavigator();

  console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
    <NavigationContainer>
      
    <Drawer.Navigator
      initialRouteName="ForgotPassword"
      drawerPosition="left"
      drawerType="front"
      hideStatusBar={true}
      screenOptions={{
        headerShown:true,
        swipeEnabled:false
      }}
    >
      <Drawer.Screen name="AuthStack" component={AuthStackNavigator} />
      <Drawer.Screen name="TicketStack" component={TicketStackNavigator} />
      {/* <Drawer.Screen name="login" component={AuthStackNavigator} /> */}
    </Drawer.Navigator>
          {/* <AppStackNavigator />
          <FlashMessage position="top" /> */}
    </NavigationContainer>
    </Provider>

    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <NavigationContainer>
    //       <AppStackNavigator />
    //       <FlashMessage position="top" />
    //     </NavigationContainer>
    //   </PersistGate>
    // </Provider >
  );
}
