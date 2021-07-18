import React from "react";
import { connect } from "react-redux";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
// import BackImage from "../components/Common/BackImage";
// import RightBtn from "../components/Common/RightBtn";
import AddTickets from "../screens/Tickets/AddTickets/index.js";

const Stack = createStackNavigator();

const AuthStackNavigator = (props) => {
  const { route, navigation } = props;
  //const category_id = route.params && route.params.category_id ? route.params.category_id : null;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddTickets"
        component={AddTickets}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
        {/* {(props) => <Login/>}</Stack.Screen> */}   

    </Stack.Navigator>    
  );
}

const mapStateToProps = (state) => ({
//   authUser: state.user.authUser,
//   token: state.user.token,
});

export default connect(mapStateToProps)(AuthStackNavigator);
