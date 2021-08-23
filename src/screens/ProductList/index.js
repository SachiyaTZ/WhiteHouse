import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions} from 'react-native';
import { CardViewWithIcon } from "react-native-simple-card-view";
// import { makeStyles } from "@material-ui/core/styles";

export default class ProductList extends Component{
  constructor(props) {
    super(props);
    this.state = ({
        github       : 0,
      }
    )
  }

  render() {
    const miniCardStyle = {
      shadowColor: '#000000',
      shadowOffsetWidth : 2,
      shadowOffsetHeight: 2,
      shadowOpacity : 0.1,
      hadowRadius: 5,
      bgColor: '#ffffff',
      padding: 5,
      margin: 5,
      borderRadius: 3,
      elevation: 3,
      width: (Dimensions.get("window").width / 2) - 10, 
      height:10
    };
    console.log(miniCardStyle)
    return (
      <View style={ styles.container }>
              <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',} }>
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'ios-square-outline' }
            //iosIcon={ 'ios-square-outline' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Product 1' }
            contentFontSize={ 12 }
            titleFontSize={ 20 }
            style={ miniCardStyle }
             content={ "Example" }
            // onPress={ () => this.setState({
            //          github       : this.state.github + 1
            // }) }
          />
        <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'ios-square-outline' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Product 2' }
            contentFontSize={ 12 }
            titleFontSize={ 20 }
            style={ miniCardStyle }
             content={ "Example" }
            // onPress={ () => this.setState({
            //          github       : this.state.github + 1
            // }) }
          />
        </View>
        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',} }>
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'ios-square-outline' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Product 3' }
            contentFontSize={ 12 }
            titleFontSize={ 20 }
            style={ miniCardStyle }
             content={ "Example" }
            // onPress={ () => this.setState({
            //          github       : this.state.github + 1
            // }) }
          />
        <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'ios-square-outline' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Product 4' }
            contentFontSize={ 12 }
            titleFontSize={ 20 }
            style={ miniCardStyle }
             content={ "Example" }
            // onPress={ () => this.setState({
            //          github       : this.state.github + 1
            // }) }
          />
        </View>
        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',} }>
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'ios-square-outline' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Product 5' }
            contentFontSize={ 12 }
            titleFontSize={ 20 }
            style={ miniCardStyle }
            content={ "Example" }
            // onPress={ () => this.setState({
            //          github       : this.state.github + 1
            // }) }
          />
        <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'ios-square-outline' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Product 6' }
            contentFontSize={ 12 }
            titleFontSize={ 20 }
            style={ miniCardStyle }
             content={ "Example" }
            // onPress={ () => this.setState({
            //          github       : this.state.github + 1
            // }) }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({container: {flex           : 2, alignItems     : 'center',backgroundColor: '#F5FCFF',paddingTop     : 25,},});