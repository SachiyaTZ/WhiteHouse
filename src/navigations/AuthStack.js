import React from "react";
import { connect } from "react-redux";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
// import BackImage from "../components/Common/BackImage";
// import RightBtn from "../components/Common/RightBtn";
import Login from "../screens/Login/index.js";
import ForgotPassword from "../screens/ForgotPassword/index.js";
import ProductDetail from "../screens/ProductDetail/index.js";
import ProductDetail2 from "../screens/ProductDetail2/index.js";
import Checkout from "../screens/Checkout/index.js";
import Cart from "../screens/Cart/index.js";
import StackHeader from './util/StackHeader';
import ProductList from "../screens/ProductList/index.js";
import MyAccountViewReturnRequest from "../screens/MyAccountViewReturnRequest/index.js";
import AccountPassword from "../screens/AccountPassword/index.js";
import Statement from "../screens/Statement/index.js";
import Prospect from "../screens/Prospect/index.js";
const Stack = createStackNavigator();

const AuthStackNavigator = (props) => {
  const { route, navigation } = props;
  //const category_id = route.params && route.params.category_id ? route.params.category_id : null;

  return (
    <Stack.Navigator
    headerMode="screen"
            screenOptions={{
               header:({scene,navigation})=>(
                   <StackHeader scene={scene} navigation={navigation}/>
               )
            
            }}
    screenOptions={{
      headerShown: false
    }}
    > 
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
         // headerTitle: "WhiteHouse Products",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
        {/* {(props) => <Login/>}</Stack.Screen> */}   

        <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          //headerTitle: "Home",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

        <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
        //  headerTitle: "Products",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

        <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
        //  headerTitle: "Cart",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
         // headerTitle: "Checkout",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="ProductDetail2"
        component={ProductDetail2}
        options={{
         // headerTitle: "Products",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
         // headerTitle: "ProductList",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
        <Stack.Screen
        name="MyAccountViewReturnRequest"
        component={MyAccountViewReturnRequest}
        options={{
         // headerTitle: "MyAccountViewReturnRequest",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
          <Stack.Screen
        name="AccountPassword"
        component={AccountPassword}
        options={{
         // headerTitle: "MyAccountViewReturnRequest",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
          <Stack.Screen
        name="Statement"
        component={Statement}
        options={{
         // headerTitle: "MyAccountViewReturnRequest",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
             <Stack.Screen
        name="Prospect"
        component={Prospect}
        options={{
         // headerTitle: "MyAccountViewReturnRequest",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />


   </Stack.Navigator>
  );
}

const mapStateToProps = (state) => ({
//   authUser: state.user.authUser,
//   token: state.user.token,
});

export default connect(mapStateToProps)(AuthStackNavigator);
