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
 } from "react-native";
import TextInputComponent from "../../components/Common/TextInputCustom";
import { THEME_WHITE_COLOR } from "../../constants/theme";
import styles from "./style";
import Swiper from 'react-native-swiper';
import CardView from 'react-native-cardview'

export default class Prospect extends React.Component {
	
	  render() {
	
		return (
		  
		  <React.Fragment>
			<StatusBar
			  backgroundColor={THEME_WHITE_COLOR}
			  barStyle={"dark-content"}
			/>
			<SafeAreaView style={styles.signInContainer}>
			  <ScrollView style={styles.scroll}>
				
		  <Text
			  style={{
			    marginTop:15,
				alignSelf: 'auto',
				fontSize: 19,
				fontWeight: 'bold',
				color: '#333',
			  }}>
			  My Account
			</Text>
			<Text
			  style={{
				marginTop:2,
				alignSelf: 'auto',
				fontSize: 19,
				fontWeight: 'bold',
				color: '#0065cc',
			  }}>
			  Prospect
			</Text>

		
			<View style={styles.MainContainer}>
	 
	 <CardView
	   cardElevation={5}
	   cardMaxElevation={5}
	   cornerRadius={15}
	   style={styles.cardViewStyle}>
	
			 <View style={styles.container}>
             <Text style={styles.name}>Reassign Prospects to Existing Consumer or Customer</Text>
		
				<TextInputComponent
				  label={"Prospect Code"}
				  style={styles.textInput}
				  placeholder={"John"}
				/>
	
				<TextInputComponent
				  label={"Consumer/Customer Code"}
				  secureTextEntry={true}
				  style={styles.textInput}
				  placeholder={"Doe"}
				/>
				
			<TouchableOpacity
			  style={styles.buttonStyleActive}
			//   onPress={() => this.handleSubmit()}
			>
			  <Text style={styles.buttonText}>{'Submit'}</Text>
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

	
	