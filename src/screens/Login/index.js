import React from "react";
import { connect } from "react-redux";
import {
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import TextInputComponent from "../../components/Common/TextInputCustom";
import ErrorMessage from "../../components/Common/ErrorMessageComponent";
//import { resetPassword, clearStatus } from "../../actions/userAction";
import { THEME_WHITE_COLOR } from "../../constants/theme";
import styles from "./style";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      message: "",
      password: "",
      email:"",
      confirmPassword: "",
    };
  }

  componentDidMount() {
    //this.props.clearStatus();
  }


  componentDidUpdate() {
    if (this.props.passwordResetSuccess) {
      this.props.navigation.navigate("SignIn");
    }
  }

  onChangePassword = (text) => {
    this.setState({ password: text, error: false });
  };

  onChangeConfirmPassword = (text) => {
    this.setState({ confirmPassword: text, error: false });
  };

 
  handleSubmit = () => {
    const { password} = this.state;
    const { params } = this.props.route;

    if (!password) {
      this.setState({ error: true, message: "Fill all required fields" });
    // } else if (password !== confirmPassword) {
    //   this.setState({ error: true, message: "Passwords do not match" });
    } 
    else{
      this.props.navigation.navigate("ForgotPassword")
    }
    
    // else {
    //   let userData = {
    //     email: params.email,
    //     password: password,
    //     c_password: confirmPassword,
    //     otp: params.code,
    //   }
      
    //   this.props.resetPassword(userData);
    // }
  };

  render() {
    const { confirmPassword, password, error, message } = this.state;
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor={THEME_WHITE_COLOR}
          barStyle={"dark-content"}
        />
        <SafeAreaView style={styles.signInContainer}>
          <ScrollView style={styles.scroll}>
            

            {error && message && <ErrorMessage message={message} />}
            <View style={styles.container}>
            <TextInputComponent
              label={"Email"}
              // onChangeText={(text) => this.onChangePassword(text)}
              // value={email}
              // error={error && !password}
              // secureTextEntry={true}
              style={styles.textInput}
              placeholder={""}
            />
            <TextInputComponent
              label={"PASSWORD"}
              onChangeText={(text) => this.onChangePassword(text)}
              value={password}
              error={error && !password}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder={""}
            />



            {/* <TextInputComponent
              label={"CONFIRM PASSWORD"}
              onChangeText={(text) => this.onChangeConfirmPassword(text)}
              value={confirmPassword}
              error={error && !confirmPassword}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder={""}
            /> */}
            <TouchableOpacity
          style={styles.buttonStyleActive}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.buttonText}>{'LOGIN'}</Text>
        </TouchableOpacity>
        </View>
          </ScrollView>
          
        </SafeAreaView>
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  authUser: state.user.authUser,
  passwordResetSuccess: state.user.passwordResetSuccess
});

const mapDispatchToProps = (dispatch) => ({
  clearStatus: () => dispatch(clearStatus()),
  resetPassword: (userData) => dispatch(resetPassword(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);