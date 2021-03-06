import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";

	
import { StackNavigator } from 'react-navigation'
import { NavigationContainer } from "@react-navigation/native";
import Swiper from 'react-native-swiper';

import {  Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading:true,
    //   dataSource: null,
    // }
  }

  handleSubmit = () => {
      this.props.navigation.navigate("ProductDetail")
  };

  handleSubmitCart = () => {
    this.props.navigation.navigate("Cart")
};
  
  handleSubmit2 = () => {
    this.props.navigation.navigate("ProductDetail2")
};
handleProductList = () => {
  this.props.navigation.navigate("ProductList")
};

handleSubmitMyAccountViewReturnRequest = () => {

  this.props.navigation.navigate("MyAccountViewReturnRequest")

};

// componentDidMount(){
//   return fetch('http://devsopapi.whitehouseproductsltd.com/products')
//     .then((response) => response.json())
//     .then((responseJson) => {
//      this.setState({
//        isLoading:false,
//        dataSource:responseJson.movies,
//      })
//     })
//     .catch((error) => {
//       console.log(error)
//     });
// }

  render() {
     const { navigation } = this.props;
    //  if(this.state.isLoading){
    //    return (
    //      <View>
    //        <ActivityIndicator />
    //      </View>
    //    )
    //  }

    //  else{
    //    let products = this.state.dataSource.map((val,key) => {
    //      return <View key={key} >
    //        {/* <Text>{val.skuimageurl}</Text> */}
    //      </View>
    //    })
    return (
      <ScrollView style={styles.container}>

      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <TouchableOpacity>
            <Image
              source={require('../../assets/white.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            
            />
            </TouchableOpacity>
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/sss.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}

            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/backcover.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={{ width: width * 0.9, display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
    {/* <TouchableOpacity style={styles.categoryBtn} onPress={() => this.handleProductList()}> */}
    <Image source={require('../../assets/motor.jpg')}style={{ width: "30%", height: 100, marginRight:11, marginTop:30, marginLeft:15, borderRadius:15}} />
    
    {/* </TouchableOpacity> */}
    <Image source={require('../../assets/hydraulic.jpg')}style={{ width: "30%", height: 100, marginRight:11, marginTop:30,borderRadius:15 }} />

    <Image source={require('../../assets/pinn.jpg')}style={{ width: "30%", height: 100, marginTop:30,borderRadius:15 }} />


    {/* <Image source={require("img.png")}style={{ width: "45%", height: 200 }} />
    <Image source={require("img.png")}style={{ width: "45%", height: 200 }} /> */}
</View>
<View style={{ width: width * 0.9, display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
    {/* <TouchableOpacity style={styles.categoryBtn} onPress={() => this.handleProductList()}> */}
    
    <Text style={styles.productDetails }>
             Hydraulic Motors
            </Text>
    {/* </TouchableOpacity> */}
    
    <Text style={styles.productDetails}>
    Hydraulic Pumps
            </Text>
    
    <Text style={styles.productDetails}>
            
             Other Products
            </Text>

    
</View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: "auto",
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            marginTop:30
          }}>
          Hydraulic Pumps
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <TouchableOpacity onPress={() => this.handleSubmit()}>
            <Image
              source={require('../../assets/hydraulic.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Hydraulic Gear Pumps</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Choose from the world's largest range of pumps.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <TouchableOpacity onPress={() => this.handleSubmit2()}>
            <Image
              source={require('../../assets/motor.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.cardInfo}>

            <Text style={styles.cardTitle}>Hydraulic Piston Pumps</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
             Provide the motors needed for any application
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <TouchableOpacity onPress={() => this.handleSubmit2()}>
            <Image
             source={require('../../assets/pinn.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Hydraulic Vane Pumps</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
              Wide ranging inventory of hydraulic parts
            </Text>
          </View>
        </View>
  
      </View>
    </ScrollView>
    );
  }
}
//}


const mapStateToProps = (state) => ({
  isFetching: state.user.isFetching,
  authUser: state.user.authUser,
  passwordResetSuccess: state.user.passwordResetSuccess
});

const mapDispatchToProps = (dispatch) => ({
  clearStatus: () => dispatch(clearStatus()),
  resetPassword: (userData) => dispatch(resetPassword(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize:17,
    color:"#0065cc"
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  productDetails:{
    fontSize: 14,
    marginLeft:16,
    fontWeight: 'bold',
    color: '#0065cc'
  },
});
