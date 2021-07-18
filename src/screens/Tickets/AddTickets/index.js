import React from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
//import { userSignIn, clearStatus } from "../../actions/userAction";
import { THEME_WHITE_COLOR } from "../../../constants/theme";
import styles from "./style";
//import { ACCESS_KEY } from "../../constants/api";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      message: "",

      phone: "",
    };
  }

  componentDidMount() {
    //this.props.clearStatus();
  }


  render() {


    return (
      <React.Fragment>
        <StatusBar
          backgroundColor={THEME_WHITE_COLOR}
          barStyle={"dark-content"}
        />
        <SafeAreaView style={styles.signInContainer}>
          <ScrollView style={styles.scroll}>

            <View >
            <Text>Tickets Page</Text>


        </View>
          </ScrollView>
        </SafeAreaView>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  // isFetching: state.user.isFetching,
  // authUser: state.user.authUser,
});

const mapDispatchToProps = (dispatch) => ({
  // userSignIn: (userData) => dispatch(userSignIn(userData)),
  // clearStatus: () => dispatch(clearStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
