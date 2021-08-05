// React Navigation Drawer with Sectioned Menu Options & Footer
// https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

import React from 'react';
import {SafeAreaView, View, StyleSheet, Text,Image} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { MaterialIcons, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const CustomSidebarMenu = (props) => {
  const {state, descriptors, navigation} = props;
  let lastGroupName = '';
  let newGroup = true;

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{alignItems:'center', marginHorizontal:30, marginTop:20}}>
            <Image style={styles.logoImg}  source={require('../assets/whitehouselogo.png')}/>
    </View> 
    <Text
          style={{
           // marginTop:2,
            alignSelf: 'center',
            fontSize: 19,
            fontWeight: 'bold',
            color: '#333',
          }}>
         John Doe
        </Text>


      <DrawerContentScrollView {...props}>
        {state.routes.map((route) => {
          const {
            drawerLabel,
            activeTintColor,
            groupName
          } = descriptors[route.key].options;
          if (lastGroupName !== groupName) {
            newGroup = true;
            lastGroupName = groupName;
          } else newGroup = false;
          return (
            <>
              {newGroup ? (
                <View style={styles.sectionContainer}>
                <MaterialCommunityIcons
                name="account"
                size={20}
                 color={'black'}
                 style={{marginLeft:10}}
              />
                  <Text key={groupName} style={{marginLeft: 16,fontSize:16, fontWeight:"bold"}}>
                    {groupName}
                  </Text>  
               
                  <View style={styles.sectionLine} />
                </View>
              ) : null}
              <DrawerItem
                key={route.key}
                label={
                  ({color}) =>
                    <Text style={{color , fontSize:15, fontWeight:"bold"}}>
                      {drawerLabel}
                    </Text>
                }
                focused={
                  state.routes.findIndex(
                    (e) => e.name === route.name
                  ) === state.index
                }
                activeTintColor={activeTintColor}
                onPress={() => navigation.navigate(route.name)}
              />
            </>
          );
        })}
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
       WhiteHouse.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionLine: {
    backgroundColor: 'gray',
    flex: 1,
    height: 1,
    marginLeft: 10,
    marginRight: 20,
  },
  logoImg:{
    marginTop:10,
    width:100,
    height:100,
    
  },
});

export default CustomSidebarMenu;