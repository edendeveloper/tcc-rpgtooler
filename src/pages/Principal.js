import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView } from 'react-native';



export default class Principal extends React.Component{
  static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/home.png')}
          style={[styles.icon, { tintColor: tintColor }]}
        />
      
      ),
      
    };
  
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={[styles.title , {paddingTop: 10,}]}>
              Bem Vindo ao RPGTooler!
            </Text>
            <Text style={styles.texto}>
              O RPGTooler é uma ferramenta de geração de elementos
              usados na criação de uma aventura RPG do mestre.
              Nossa ferramenta pode gerar NPC's, equipamentos e habilidades.
              Tudo isso respeitando o sistema D&D 5e.
            </Text>
            <Text style={styles.title}>
              Como Usar
            </Text>
            <Text style={styles.texto}>
              Clique no ícone de menu no topo da página, nele você pode selecionar uma ferramenta
              geradora, na interface de geração, selecione as especificações que desejar.
            </Text>
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
    alignItems: 'center',
  },
  header:{
    width: '100%',
    height: 50,
    backgroundColor: '#403F4C',
    paddingTop: 7,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  title:{
    fontFamily: 'BebasNeue-Regular',
    fontSize: 30,
    color: '#228CDB',
    margin: 10,
    alignSelf: 'center',
  },
  texto: {
    fontSize: 15,
    color: 'white',
    textAlign: 'justify',
    margin: 10,
  }
});