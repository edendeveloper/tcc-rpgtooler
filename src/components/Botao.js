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
          width: "35%",
          height: 40,
          borderWidth: 0.5,
          borderColor: 'black',
          borderRadius: 4,
          backgroundColor: '#228CDB',
          alignSelf: props.alinhar,
          margin: 5,
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
        <TouchableOpacity onPress={this.props.funcao} style={this.styles.botao}>
          <View style={this.styles.btnArea}>
            <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  