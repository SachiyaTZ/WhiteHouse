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

export default class MyAccountViewReturnRequest extends React.Component {
	
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
			 Profile
			</Text>

		
			<View style={styles.MainContainer}>
	 
	 <CardView
	   cardElevation={5}
	   cardMaxElevation={5}
	   cornerRadius={15}
	   style={styles.cardViewStyle}>
	
			 <View style={styles.container}>
			 <Text style={styles.name}>Account No: 12345ZZ</Text>
			 <Text style={styles.name}>User Name: admin@stack.io</Text>
				<TextInputComponent
				  label={"Title"}
				  secureTextEntry={true}
				  style={styles.textInput}
				  placeholder={"Select"}
				/>
					<TextInputComponent
				  label={"First Name"}
				  secureTextEntry={true}
				  style={styles.textInput}
				  placeholder={"John"}
				/>
						<TextInputComponent
				  label={"Last Name"}
				  style={styles.textInput}
				  placeholder={"Doe"}
				/>
	
				<TextInputComponent
				  label={"Company"}
				  secureTextEntry={true}
				  style={styles.textInput}
				  placeholder={"Stack Technologies"}
				/>
					<TextInputComponent
				  label={"Job"}
				  secureTextEntry={true}
				  style={styles.textInput}
				  placeholder={"CEO"}
				/>
			<TouchableOpacity
			  style={styles.buttonStyleActive}
			//   onPress={() => this.handleSubmit()}
			>
			  <Text style={styles.buttonText}>{'UPDATE'}</Text>
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

	
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		selectAll: false,
	// 		cartItemsIsLoading: false,
	// 		cartItems: [
	// 			/* Sample data from whitehouse products */
	// 			{ name: "Hydraulic Pumps",  },
	// 			{ name: "Hydraulic Motors", },
	// 			{ name: "Adaptors",  },
	// 			{ name: "Hose Fittings",  },
	// 			{ name: "HP 14\" Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, 14-DQ1038wm",  }
	// 		]
	// 	}
	// }
	
	// selectHandler = (index, value) => {
	// 	const newItems = [...this.state.cartItems]; // clone the array 
	// 	newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value 
	// 	this.setState({ cartItems: newItems }); // set new state
	// }
	

	// render() {
	// 	const styles = StyleSheet.create({
	// 		centerElement: {justifyContent: 'center', alignItems: 'center'},
	// 	});
		
	// 	const { cartItems, cartItemsIsLoading } = this.state;
		
	// 	return (
	// 		<View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
	// 			<View style={{flexDirection: 'row',  marginBottom: 10}}>
	// 				<View style={[styles.centerElement, {height: 50}]}>
	// 					<Text style={{fontSize: 18, color: '#000'}}>My Account</Text>
    //                     <Text style={{fontSize: 15, color: '#0065cc'}}>Return Request</Text>
	// 				</View>
	// 			</View>
				
				
	// 			{cartItemsIsLoading ? (
	// 				<View style={[styles.centerElement, {height: 300}]}>
	// 					<ActivityIndicator size="large" color="#ef5739" />
	// 				</View>
	// 			) : (
	// 				<ScrollView>	
	// 					{cartItems && cartItems.map((item, i) => (


	// 						<View key={i} style={{flexDirection: 'row', backgroundColor: '#fff',  height: 120 }}>


								
	// 							<View style={{flexDirection: 'row',  alignSelf: 'center' }}>

    //                                  <View style={{flexGrow: 1, flexShrink: 1,  alignSelf: 'center'}}>
	// 									<Text numberOfLines={4} style={{fontSize: 12}}>{item.name}</Text>
	// 								</View>
                                    
	// 								<View style={{flexGrow: 5, flexShrink: 1, alignSelf: 'center'}}>
	// 									<Text numberOfLines={4} style={{fontSize: 10}}>{item.name}</Text>
	// 								</View>
									
	// 							</View>

                              
							
	// 						</View>
                          
	// 					))}
	// 				</ScrollView>
	// 			)}
				
				
	// 		</View>
	// 	);
	// }
// }