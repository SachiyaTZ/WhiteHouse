import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ProductDetail extends Component {

  constructor(props) {
    super(props);
  }
  

  clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart")
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"https://www.whitehouseproductsltd.com/PRODUCT_IMAGES/0PL003APDFAN.jpg"}}/>
            <Text style={styles.name}>Hydraulic Pumps</Text>
            <Text style={styles.price}>$ 120.22</Text>
            <Text style={styles.description}>
            Gear pumps are used in a wide range of hydraulic systems; in fact, they are easily among the most common types of pumps seen in this type of equipment. 
            </Text>
          </View>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          </View>
          {/* <View style={styles.contentColors}>
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00BFFF"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF1493"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#00CED1"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#228B22"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#20B2AA"}]}></TouchableOpacity> 
            <TouchableOpacity style={[styles.btnColor, {backgroundColor:"#FF4500"}]}></TouchableOpacity> 
          </View> */}
          <View style={styles.contentSize}>
            <TouchableOpacity style={styles.btnSize}><Text>Vane</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.btnSize}><Text>Gear</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.btnSize}><Text>Piston</Text></TouchableOpacity> 
          
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:50,
    width:50,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#003366",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  }
});    