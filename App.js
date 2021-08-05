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
import Cart from "./src/screens/Cart";
import ForgotPassword from "./src/screens/ForgotPassword";
import MyAccountViewReturnRequest from "./src/screens/MyAccountViewReturnRequest";
import CustomSidebarMenu from './src/navigations/CustomSidebarMenu';
import AccountPassword from "./src/screens/AccountPassword";
import Statement from "./src/screens/Statement";
import Prospect from "./src/screens/Prospect";
export default function App() {

  const Drawer = createDrawerNavigator();

  console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
    <NavigationContainer>
      
    <Drawer.Navigator
    
      initialRouteName="AuthStackNavigator"
      drawerPosition="left"
      drawerType="front"
      hideStatusBar={true}
      screenOptions={{
        headerShown:true,
        swipeEnabled:false,
        headerTitle:null
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
    >
       <Drawer.Screen name="Login" options={{
            // drawerLabel: 'Home',
            groupName: '',
            activeTintColor: '#0065cc',
            
          }}  component={AuthStackNavigator} />
      <Drawer.Screen name="Home" options={{
            drawerLabel: 'Home',
            groupName: '',
            activeTintColor: '#0065cc',
            
          }} component={ForgotPassword} />
      <Drawer.Screen name="Quick Order"options={{
            drawerLabel: 'Quick Order',
            groupName: '',
            activeTintColor: '#0065cc',
          }} component={TicketStackNavigator} />
      <Drawer.Screen name="Cart" options={{
            drawerLabel: 'Cart',
            groupName: '',
            activeTintColor: '#0065cc',
          }} component={Cart} />
      <Drawer.Screen name="Profile" options={{
            drawerLabel: '- Profile', 
            groupName: 'My Account',
            activeTintColor: '#0065cc',
          }} component={MyAccountViewReturnRequest} />
      <Drawer.Screen name="Customers" options={{
            drawerLabel: '- Customers',
            groupName: 'My Account',
            activeTintColor: '#0065cc',
          }} component={TicketStackNavigator} />
      <Drawer.Screen name="Returns" options={{
            drawerLabel: '- Returns',
            groupName: 'My Account',
            activeTintColor: '#0065cc',
          }} component={Statement} />
      <Drawer.Screen name="Prospect" options={{
            drawerLabel: '- Prospect',
            groupName: 'My Account',
            activeTintColor: '#0065cc',
          }} component={Prospect} />
      <Drawer.Screen name="Password" options={{
            drawerLabel: '- Password',
            groupName: 'My Account',
            activeTintColor: '#0065cc',
          }} component={AccountPassword} />
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
