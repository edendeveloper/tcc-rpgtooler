import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Button, 
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image } from 'react-native'
import { Picker } from 'native-base';
import Botao from '../components/Botao';
import Constants from 'expo-constants';
import BotaoV from '../components/BotaoV'

export default class User extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Usuário',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/man-user.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      };
    
      render() {
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView>

              <View style={styles.typeContainer}>
                <Text style={styles.title}>NPCS</Text>

                <BotaoV nome="Salazar"/>

                <BotaoV nome="Malfurion"/>
              </View>

              <View style={styles.typeContainer}>
                <Text style={styles.title}>Equipamentos</Text>

                <BotaoV nome="Espada Grande"/>

                <BotaoV nome="Arco Pequeno"/>
              </View>

              <View style={styles.typeContainer}>
                <Text style={styles.title}>Habilidades</Text>

                <BotaoV nome="Bola de Fogo"/>

                <BotaoV nome="Míssil Mágico"/>
              </View>

            </ScrollView>
          </SafeAreaView>
        );
      }
}

const styles = StyleSheet.create({
  icon: {
    width: 33,
    height: 33,
  },
  container:{
    flex: 1,
    backgroundColor: '#201F26',
    marginTop: Constants.statusBarHeight,
  },
  title:{
    fontFamily: 'BebasNeue-Regular',
    fontSize: 35,
    color: '#228CDB',
    margin: 10,
    alignSelf: 'center',
  },
  displayNpc:{
    width: '80%',
    height: 50,
    backgroundColor: '#403F4C',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#403F4C',
    margin: 5
  },
  textNpc:{
    fontFamily: 'BebasNeue-Regular',
    fontSize: 35,
    color: '#228CDB',
    alignSelf: 'center',
    marginTop: 4,
    
  },
  typeContainer:{
    borderWidth: 1,
    borderColor: '#228CDB',
    borderRadius: 4,
    margin: 10,
    paddingBottom: 10,
  }
});