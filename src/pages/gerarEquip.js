import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Button, 
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal } from 'react-native'
import { Picker } from 'native-base';
import Botao from '../components/Botao';
import Constants from 'expo-constants';

export default class gerarEquip extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Gerar Equipamento',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/weapons.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      };
      
      constructor(props){
        super(props);
        this.state = {
          tipo: " ",
          arma: " ",
          equip: " ",
          armor: " ",
          modalVisible: false,
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
                  Tipo
              </Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.tipo}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({tipo: itemValue})
                }>
                  <Picker.item label="Armadura" value="tipoArmor"/>
                  <Picker.item label="Arma" value="tipoArma"/>
                  <Picker.item label="Equipamento" value="tipoEquip"/>
                </Picker>
              </View>


              <View style={styles.picker}>
              {this.state.tipo === 'tipoArma'?

              <Picker
                selectedValue={this.state.arma}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({arma: itemValue})
              }>
                <Picker.item label="Simples Corpo-a-Corpo" value="armaSCaC"/>
                <Picker.item label="Simples à Distância" value="armaSaD"/>
                <Picker.item label="Marcial Corpo-a-Corpo" value="armaMCaC"/>
                <Picker.item label="Marcial à Distância" value="armaMaD"/>
              </Picker>

              : this.state.tipo === "tipoEquip" ?

              <Picker
                selectedValue={this.state.equip}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({equip: itemValue})
              }>
                <Picker.item label="Equipamento de aventura" value="equipAventura"/>
                <Picker.item label="Implemento Arcano" value="equipArcano"/>
                <Picker.item label="Implemento Druidico" value="equipD"/>
              </Picker> :

              <Picker
                selectedValue={this.state.armor}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({armor: itemValue})
              }>
                <Picker.item label="Leves" value="armorLeve"/>
                <Picker.item label="Médias" value="armorMedia"/>
                <Picker.item label="Pesadas" value="armorPesada"/>
                <Picker.item label="Escudo" value="armorEscudo"/>
              </Picker>
              }
              
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
                
                    
                    <Text style={styles.title}>Armadura de Couro</Text>

                    <Text style={styles.texto}>Preço: 10po</Text>
                    <Text style={styles.texto}>Defesa: 1</Text>
                    <Text style={styles.texto}>Furtividade: </Text>
                    <Text style={styles.texto}>Peso: 5k</Text>
                    
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
    width: 37,
    height: 37,
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
    margin: 5
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