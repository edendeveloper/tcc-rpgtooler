
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
  Button} from 'react-native';
  import Constants from 'expo-constants';
  import Botao from '../components/Botao';
  import newFire from './../services/newFire'
import { ScrollableComponent } from 'react-native-keyboard-aware-scroll-view';

export default function Register ({navigation}){


  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

 

  async function handleRegistrar(e) {
    console.log("Email e senha:",email, senha)
    newFire.register(email, senha, this.props,
      {
        username:username
      }).then(() => {
        navigation.navigate('Login');
      })
  }

  return(
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Image style={styles.logo} source={require('../images/logo.png')}></Image>
        <TextInput 
          style={styles.input}
          placeholder="E-mail" value={email}
          onChangeText={setEmail}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput 
          style={styles.input}
          placeholder="Senha" value={senha}
          onChangeText={setSenha}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <Botao nome="Criar" alinhar='center' funcao={handleRegistrar}/>
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
  logo:{
    width: 260,
    height: 260,
    alignSelf: 'center',
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
})

