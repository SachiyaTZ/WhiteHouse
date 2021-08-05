import React from "react";
import { connect } from "react-redux";
import {
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
 } from "react-native";
import TextInputComponent from "../../components/Common/TextInputCustom";
import { THEME_WHITE_COLOR } from "../../constants/theme";
import styles from "./style";
import Swiper from 'react-native-swiper';
import CardView from 'react-native-cardview'
// import SelectDropdown from 'react-native-select-dropdown'

export default class Statement extends React.Component {
	
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
			Request a Statement Copy
			</Text>

		
			<View style={styles.MainContainer}>
	 
	 <CardView
	   cardElevation={5}
	   cardMaxElevation={5}
	   cornerRadius={15}
	   style={styles.cardViewStyle}>
	
			 <View style={styles.container}>
			 <TextInputComponent
				  label={"Account Id"}
				  secureTextEntry={true}
				  style={styles.textInput}
				  placeholder={"Account Id"}
				/>
					<TextInputComponent
				  label={"Type"}
				  secureTextEntry={true}
				  style={styles.textInput}
				  placeholder={"Type"}
				/>
						<TextInputComponent
				  label={"Ref"}
				  style={styles.textInput}
				  placeholder={"Ref"}
				/>
	
			 <View style={styles.textAreaContainer} >
			 <TextInput
			 label={"Comments"}
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Comments"
      placeholderTextColor="grey"
      numberOfLines={10}
      multiline={true}
    />
	</View>
				
			<TouchableOpacity
			  style={styles.buttonStyleActive}
			//   onPress={() => this.handleSubmit()}
			>
			  <Text style={styles.buttonText}>{'SAVE CHANGES'}</Text>
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

	
	