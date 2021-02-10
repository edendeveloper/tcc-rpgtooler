import React, {Component} from 'react';
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



export default class Botao extends Component {

    constructor(props) {
      super(props);
      
      this.state = {};
      this.styles = StyleSheet.create({
        botao: {
            width: '80%',
            height: 50,
            backgroundColor: '#403F4C',
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#403F4C',
            margin: 5
        },
        btnArea: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        btnTexto: {
          fontSize: 35,
          color: 'white',
          fontFamily: 'BebasNeue-Regular'
        }
      })
    }
    
    
    render() {
      return (
        <TouchableOpacity onPress={this.props.funcao} style={this.styles.botao}>
          <View style={this.styles.btnArea}>
            <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  