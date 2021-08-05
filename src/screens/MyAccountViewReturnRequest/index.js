import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class MyAccountViewReturnRequest extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectAll: false,
			cartItemsIsLoading: false,
			cartItems: [
				/* Sample data from whitehouse products */
				{ name: "Hydraulic Pumps",  },
				{ name: "Hydraulic Motors", },
				{ name: "Adaptors",  },
				{ name: "Hose Fittings",  },
				{ name: "HP 14\" Laptop, Intel Core i3-1005G1, 4GB SDRAM, 128GB SSD, Pale Gold, 14-DQ1038wm",  }
			]
		}
	}
	
	selectHandler = (index, value) => {
		const newItems = [...this.state.cartItems]; // clone the array 
		newItems[index]['checked'] = value == 1 ? 0 : 1; // set the new value 
		this.setState({ cartItems: newItems }); // set new state
	}
	

	render() {
		const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
		});
		
		const { cartItems, cartItemsIsLoading } = this.state;
		
		return (
			<View style={{flex: 1, backgroundColor: '#f6f6f6'}}>
				<View style={{flexDirection: 'row',  marginBottom: 10}}>
					<View style={[styles.centerElement, {height: 50}]}>
						<Text style={{fontSize: 18, color: '#000'}}>My Account</Text>
                        <Text style={{fontSize: 15, color: '#0065cc'}}>Return Request</Text>
					</View>
				</View>
				
				
				{cartItemsIsLoading ? (
					<View style={[styles.centerElement, {height: 300}]}>
						<ActivityIndicator size="large" color="#ef5739" />
					</View>
				) : (
					<ScrollView>	
						{cartItems && cartItems.map((item, i) => (


							<View key={i} style={{flexDirection: 'row', backgroundColor: '#fff',  height: 120 }}>


								
								<View style={{flexDirection: 'row',  alignSelf: 'center' }}>

                                     <View style={{flexGrow: 1, flexShrink: 1,  alignSelf: 'center'}}>
										<Text numberOfLines={4} style={{fontSize: 12}}>{item.name}</Text>
									</View>
                                    
									<View style={{flexGrow: 5, flexShrink: 1, alignSelf: 'center'}}>
										<Text numberOfLines={4} style={{fontSize: 10}}>{item.name}</Text>
									</View>
									
								</View>

                              
							
							</View>
                          
						))}
					</ScrollView>
				)}
				
				
			</View>
		);
	}
}