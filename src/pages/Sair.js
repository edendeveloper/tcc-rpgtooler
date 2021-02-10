import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Button, 
  StyleSheet,
  Image,
  Botao } from 'react-native'

export default function Sair ({navigation}){
    const navigationOptions = {
        drawerLabel: 'Sair',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/logout.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      };
      


      
        function sair(){
          navigation.navigate('Login');
        }
        return (
          <Botao Nome="a" funcao={sair()}/>
        );
      }

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
});