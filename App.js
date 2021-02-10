import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';

class Botao extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: "35%",
        height: 40,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 4,
        backgroundColor: '#228CDB',
        alignSelf: props.alinhar,
        marginTop: 10,
      },
      btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnTexto: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'BebasNeue-Regular'
      }
    })
  }
  
  render() {
    return (
      <TouchableOpacity style={this.styles.botao}>
        <View style={this.styles.btnArea}>
          <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  render() {
    return (
    <SafeAreaView style={styles.main}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scroll}>
        <Image style={styles.logo} source={require('./images/logo.png')}></Image>
        <TextInput style={styles.input} placeholder="E-mail" underlineColorAndroid="transparent"></TextInput>
        <TextInput style={styles.input} placeholder="Senha" underlineColorAndroid="transparent"></TextInput>
        <Botao nome="Entrar" alinhar='center' onPress={() => navigation.navigate('./src/pages/register')} />
        <Botao nome="Registrar" alinhar='center' altura='150' largura='150'/>
      </ScrollView>
     </SafeAreaView>
    )
  }
};

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


