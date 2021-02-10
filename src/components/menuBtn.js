import React, { Component } from 'react'
import { 
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
 } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from 'native-base';
import mainDrawer from '../Routes';

export default class MenuBtn extends Component {
    render() {     
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.toggleDrawer(mainDrawer)} }>
			    <Image style={{width: 35, height: 35, marginLeft: 15,}} source={require('../images/menu2.png')}></Image>
		    </TouchableOpacity>   
        )
    }
 }


