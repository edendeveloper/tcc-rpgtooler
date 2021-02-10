import Login from './pages/Login';
import Register from './pages/Register';
import Principal from './pages/Principal';
import gerarNpc from './pages/gerarNpc';
import gerarEquip from './pages/gerarEquip';
import gerarHab from './pages/gerarHab';
import User from './pages/User';
import Sair from './pages/Sair';
import MenuBtn from './components/menuBtn';

import React from 'react';
import {Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationActions } from 'react-navigation';

const mainDrawer = createDrawerNavigator({
  Principal,
  gerarNpc,
  gerarEquip,
  gerarHab,
  
}, {
  initialRouteName: 'Principal',
  drawerBackgroundColor: '#201F26',
  contentOptions: {
    inactiveTintColor: 'white',
    activeBackgroundColor: '#1C1B21',
    activeTintColor: '#228CDB',  
  },
  drawerLabelStyle: {
    fontFamily: 'BebasNeue-Regular',
  }
})


const Routes = createAppContainer(
  createStackNavigator({
    
    Login: { screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Register:{screen: Register,
      navigationOptions: {
        header: null,
      }
    },mainDrawer
  },{
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#403F4C',
      },
      headerLeft: <MenuBtn navigation={navigation}/>,
      headerTitle: 'RPGTooler',
      headerTitleStyle: {
        color: '#228CDB',
        fontFamily: 'BebasNeue-Regular',
        fontSize: 40,
        textAlign:"center", 
        flex:1 
      },
      headerRight: <Image style={{width: 50, height: 50, marginRight: 3,}} source={require('./images/logo.png')}></Image>
    }),
    
  })
)  

export default Routes;