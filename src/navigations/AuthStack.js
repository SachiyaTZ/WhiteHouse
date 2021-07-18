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




const Stack = createStackNavigator();

const AuthStackNavigator = (props) => {
  const { route, navigation } = props;
  //const category_id = route.params && route.params.category_id ? route.params.category_id : null;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
        {/* {(props) => <Login/>}</Stack.Screen> */}   

        <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

        <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

        <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />

      <Stack.Screen
        name="ProductDetail2"
        component={ProductDetail2}
        options={{
          headerShown: false,
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
