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
import CardView from 'react-native-cardview'
import { THEME_WHITE_COLOR } from "../../constants/theme";

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
            <Image style={styles.productImg} source={require('../../assets/gear.png')}/>
          </View> 

          <CardView
   cardElevation={5}
   cardMaxElevation={5}
   cornerRadius={15}
   style={styles.cardViewStyle}>

         {/* <Text style={styles.cardView_InsideText}> Simple CardView </Text> */}
         <View style={styles.cardcontainer}>
         <Text style={styles.name}>OPL003ALSFAN</Text>
<Text style={{fontSize:16,
      color:"blue",
      fontWeight:'bold',
      textAlign:'left',
      }}>OPL 1.22 CC/REV HYDRAULIC GEAR PUMP</Text>

<View style={styles.starContainer}>
<Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
<Text style={{fontSize:15,
      color:"black",
      fontWeight:'bold',
      textAlign:'left',
      }}> 4.9 (120 Reviews)</Text>
</View>

           <Text style={{fontSize:15,
           marginTop:10,
      color:"black",
      fontWeight:'bold',
      textAlign:'left',
      }}>Weight (kg): 2.2</Text>
           <Text style={{fontSize:15,
      color:"black",
      fontWeight:'bold',
      textAlign:"left",
      }}>Manufacturer : PARKER</Text>
           <Text style={{fontSize:15,
      color:"black",
      fontWeight:'bold',
      textAlign:'left',
      }}>Last Updated :29/06/2021</Text>
       <Text style={{fontSize:15,
           marginTop:10,
      color:"blue",
      fontWeight:'bold',
      textAlign:'left',
      }}>Available in stock</Text>
                 <Text style={{fontSize:15,
           marginTop:10,
      color:"black",
      fontWeight:'bold',
      textAlign:'left',
      }}>Your Price(ex.vat) :</Text>
<Text style={styles.price}>$ 120.22</Text>

         </View>

</CardView>
{/* <View style={styles.separator}></View>
<View style={styles.addToCarContainer}> */}
{/* <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
  <Text style={styles.shareButtonText}>Add To Cart</Text>  
</TouchableOpacity> */}
<TouchableOpacity
          style={styles.buttonStyleActive}
          onPress={()=> this.clickEventListener()}
        >
          <Text style={styles.buttonText}>{'Add To Cart'}</Text>
        </TouchableOpacity>
{/* </View> */}

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
  cardViewStyle:{
    marginTop:20,
      width: 350, 
      height: 350,
     
      marginBottom:30,
      borderWidth:5,
      marginLeft:30
   
    },
    cardcontainer : {
      marginLeft:40,
      marginRight:20,
      marginTop:30,
      marginBottom:400
    },
  productImg:{
    width:150,
    height:150,
    borderRadius:10
  },
  name:{
    marginTop:10,
    fontSize:16,
    color:"black",
    fontWeight:'bold',
    textAlign:'left'
  },
  price:{
    marginTop:10,
    fontSize:15,
    color:"blue",
    // fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:20,
    height:20,
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
  buttonStyleActive: {
    flexDirection: "row",
    marginTop:10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0065cc",
    borderRadius: 8,
    marginLeft:30,
    marginRight:30,
    marginBottom:20
  },
  buttonText: {

    color: THEME_WHITE_COLOR,
    fontSize: 18,
    fontWeight: "800",
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