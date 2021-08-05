import React from "react";
import { connect } from "react-redux";
import {
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import TextInputComponent from "../../components/Common/TextInputCustom";
import ErrorMessage from "../../components/Common/ErrorMessageComponent";
//import { resetPassword, clearStatus } from "../../actions/userAction";
import { THEME_WHITE_COLOR } from "../../constants/theme";
import styles from "./style";

import Swiper from 'react-native-swiper';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import CardView from 'react-native-cardview'

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      message: "",
      password: "",
      email:"",
      secret:"shemal.deabrew@redtransact.com"
      
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
    this.setState({ secret: text, error: false });
  };

  // onChangeConfirmPassword = (text) => {
  //   this.setState({ confirmPassword: text, error: false });
  // };

 
  handleSubmit = () => {
    const { secret} = this.state;
    const { params } = this.props.route;

    // if (!password) {
    //   this.setState({ error: true, message: "Fill all required fields" });
    // } else
     if (secret !== "shemal.deabrew@redtransact.com") {
      this.setState({ error: true, message: "Unauthorized User" });
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

      {/* <View style={styles.sliderContainer}>
         <View style={styles.slide}>
              <Image
              source={require('../../assets/whitehouselogo.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            
            />
          </View> */}

          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.logoImg}  source={require('../../assets/whitehouselogo.png')}/>
          </View> 
      {/* </View> */}
      <Text
          style={{
           // marginTop:2,
            alignSelf: 'center',
            fontSize: 19,
            fontWeight: 'bold',
            color: '#333',
          }}>
          WHITEHOUSE PRODUCTS LTD
        </Text>
        <Text
          style={{
            marginTop:2,
            alignSelf: 'center',
            fontSize: 19,
            fontWeight: 'bold',
            color: '#0065cc',
          }}>
          If it's Hydraulic we do it
        </Text>
      
      <Text
          style={{
            marginTop:30,
            alignSelf: 'center',
            fontSize: 19,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Welcome,
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 17,
            fontWeight: 'bold',
            color: '#93999c',
          }}>
          Sign In to Continue!
        </Text>
    
        <View style={styles.MainContainer}>
 
 <CardView
   cardElevation={5}
   cardMaxElevation={5}
   cornerRadius={15}
   style={styles.cardViewStyle}>

         {/* <Text style={styles.cardView_InsideText}> Simple CardView </Text> */}
         <View style={styles.container}>
            {/* <TextInputComponent
              label={"Email"}
              // onChangeText={(text) => this.onChangePassword(text)}
              // value={email}
              // error={error && !password}
              // secureTextEntry={true}
              style={styles.textInput}
              placeholder={"Enter your Email"}
            /> */}

            <TextInputComponent
              label={"Email"}
              onChangeText={(text) => this.onChangePassword(text)}
             // value={secret}
              error={error && !password}
              //secureTextEntry={true}
              style={styles.textInput}
              placeholder={"Enter your email"}
            />

            <TextInputComponent
              label={"Password"}
              // onChangeText={(text) => this.onChangePassword(text)}
              // value={password}
              // error={error && !password}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder={"Enter Your Password"}
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
          <Text style={styles.buttonText}>{'SIGN IN'}</Text>
        </TouchableOpacity>
        </View>

 </CardView>
 
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

