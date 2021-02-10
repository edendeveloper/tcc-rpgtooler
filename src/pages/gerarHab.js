import React, { Component, useState } from 'react'
import { 
  Text, 
  View, 
  Button, 
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Alert  } from 'react-native';
import Botao from '../components/Botao';
import Constants from 'expo-constants';
import { Picker, Item } from 'native-base';
import Spec from '../components/spec';
import { bindExpression } from '@babel/types';
import newFire from './../services/newFire';


export default class gerarHab extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Gerar Habilidade',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/hab.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      };

      

      constructor(props){
        super(props);
        
        
        this.state = {
          spec: " ",
          modalVisible: false,
          //habCacador: newFire.gerarHabCacador()? newFire.gerarHabCacador()[0]: "",
        };
        
      }

    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

      render() {        
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView>

              <Text style={styles.title}>
                Especificação    
              </Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.spec}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({spec: itemValue})
                  }>
                  <Picker.tem label="Classe" value="specClasse"/>
                  <Picker.item label="Raça" value="specRaca"/>
                </Picker>
              </View>
              
              
              <View style={styles.picker}>

                {this.state.spec==='specRaca'?
                <Picker
                  selectedValue={this.state.raca}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({raca: itemValue})
                }>
                  <Picker.tem label="Humano" value="racaHumano"/>
                  <Picker.item label="Elfo" value="racaElfo"/>
                  <Picker.item label="Orc" value="racaOrc"/>
                  <Picker.item label="Anão" value="racaAnao"/>
                </Picker> :

                <Picker
                  selectedValue={this.state.classe}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({classe: itemValue})
                }>
                  <Picker.tem label="Guerreiro" value="classeGuerreiro"/>
                  <Picker.item label="Mago" value="classeMago"/>
                  <Picker.item label="Caçador" value="classeCacador"/>
                  <Picker.item label="Sacerdote" value="classeSacer"/>
                </Picker>}

              </View>     
    
              <TouchableOpacity
                style={styles.botao}
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <View style={styles.btnArea}>
                  <Text style={styles.btnTexto}>Gerar</Text>
                </View>             
              </TouchableOpacity>

              <View style={{height: 10}}></View>

              <Modal
                transparent={true}
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                }}>
                <SafeAreaView style={styles.modal}>
                <ScrollView>
                
                    
                    <Text style={styles.title}>Aparar</Text>

                    <Text style={styles.texto}>Quando outra criatura causar dano a você com um ataque corpo-a-corpo, você pode usar sua reação e gastar um dado de superioridade para reduzir o dano pelo número rolado no dado de superioridade + seu modificador de Destreza.</Text>

                    <TouchableOpacity
                      style={styles.botao}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <View style={styles.btnArea}>
                        <Text style={styles.btnTexto}>Fechar</Text>
                      </View>
                    </TouchableOpacity>
                                       
                </ScrollView>
                </SafeAreaView>
              </Modal>

            </ScrollView>
          </SafeAreaView>
        );
      }
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
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
  texto: {
    fontSize: 15,
    color: 'white',
    textAlign: 'justify',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  picker: {
    width: 160,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'black',
    borderRadius: 4,
    overflow: 'hidden',
    alignSelf: 'center',
    margin: 5,
    paddingRight: 5,
  },
  botao: {
    width: "35%",
    height: 40,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: '#228CDB',
    alignSelf: 'center',
    margin: 10,
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
  },
  modal: {
    backgroundColor: '#201F26',
    flex: 1,
  }
});

