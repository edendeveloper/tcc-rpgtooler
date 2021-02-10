import React, {Component, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Button
} from 'react-native';
import Constants from 'expo-constants';
import Routes from '../Routes';
import Botao from '../components/Botao';
import newFire from './../services/newFire';

export default function Login ({navigation}) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  

    function handleRegister(e){
      navigation.navigate('Register');
    }
    async function handleLogar(e){
      console.log("logando!");
      newFire.login(email, senha).then((autenticou) => {
        if(autenticou){
          navigation.navigate('Principal');
        }
      }).catch((error) => {
        console.log("Deu erro", error)
      });
    }
    
  return(
    <SafeAreaView style={styles.main}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scroll}>
        <Image style={styles.logo} source={require('../images/logo.png')}></Image>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          underlineColorAndroid="transparent"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          keyboardType="email-address"
          value={email}
          onChangeText= {setEmail}
        />
        <TextInput style={styles.input}
          placeholder="Senha"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="password"
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText= {setSenha}
        />
        <Botao nome="Entrar" alinhar='center' funcao={handleLogar}/>
        <Botao nome="Registrar" alinhar='center' funcao={handleRegister}/>
      </ScrollView>
     </SafeAreaView>
  );
  }
  

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#201F26',
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  input:{
    backgroundColor: '#ffffff',
    color: 'black',
    width: '75%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: 3,
    marginBottom: 10,
    paddingLeft: 7,
    fontSize: 26,
    fontFamily: 'BebasNeue-Regular',
  },
  logo:{
    width: 260,
    height: 260,
    alignSelf: 'center',
  },
  scroll: {

  }
});


