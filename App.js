import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import AppStackNavigator from "./src/navigations/AppStack";
import { store, persistor } from "./src/constants/storage";

import Login from "./src/screens/Login";

export default function App() {


  console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
    <NavigationContainer>
          <AppStackNavigator />
          <FlashMessage position="top" />
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
