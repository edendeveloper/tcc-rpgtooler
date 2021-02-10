import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Button, 
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Picker,
  TouchableOpacity,
  Modal } from 'react-native'
import Constants from 'expo-constants';
import Botao from '../components/Botao';

export default class gerarNpc extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Gerar NPC',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/farmer.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      };
      
      constructor(props){
        super(props);
        this.state = {
          mode: " ",
          racaNpc: " ",
          atributos: " ",
          vidaX: " ",
          vidaDice: " ",
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
              <Text style={styles.title}>Modelo</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.modelo}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({modelo: itemValue})
                }>
                  <Picker.Item label="Guerreiro" value="mGuerreiro" />
                  <Picker.Item label="Mago" value="mMago" />
                  <Picker.Item label="Caçador" value="mCacador"/>
                  <Picker.item label="Sacerdote" value="mSacer"/>
                </Picker>
              </View>
              
              <Text style={styles.title}>Raça</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.racaNpc}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({racaNpc: itemValue})
                }>
                  <Picker.tem label="Humano" value="racanHumano"/>
                  <Picker.item label="Elfo" value="racanElfo"/>
                  <Picker.item label="Orc" value="racanOrc"/>
                  <Picker.item label="Anão" value="racanAnao"/>
                </Picker>
              </View>

              <Text style={styles.title}>Atributos</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.atributos}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({atributos: itemValue})
                }>
                  <Picker.Item label="3d6" value="3d6" />
                  <Picker.Item label="4d6" value="4d6" />
                  <Picker.Item label="5d6" value="5d6" />
                </Picker>
              </View>

              <Text style={styles.title}>Vida</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.vidaX}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({vidaX: itemValue})
                }>
                  <Picker.Item label="1" value="dice1" />
                  <Picker.Item label="2" value="dice2" />
                  <Picker.Item label="3" value="dice3" />
                  <Picker.Item label="4" value="dice4" />
                  <Picker.Item label="5" value="dice5" />
                </Picker>
              </View>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.vidaDice}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({vidaDice: itemValue})
                }>
                  <Picker.Item label="d4" value="d4" />
                  <Picker.Item label="d6" value="d6" />
                  <Picker.Item label="d8" value="d8" />
                  <Picker.Item label="d10" value="d10" />
                  <Picker.Item label="d12" value="d12" />
                  <Picker.Item label="d20" value="d20" />
                </Picker>
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
                    
                    <Text style={styles.title}>Ronan</Text>

                    <Text style={styles.title}>Humano/Guerreiro</Text>
                    <Text style={styles.texto}>Armadura: 10</Text>
                    <Text style={styles.texto}>Vida: 14 (3d6)</Text>
                    <Text style={styles.texto}>Proficiência: 6</Text>

                    <Text style={styles.texto}>Força: 17(+3)</Text>
                    <Text style={styles.texto}>Destreza: 11(+0)</Text>
                    <Text style={styles.texto}>Constituição: 18(+4)</Text>
                    <Text style={styles.texto}>Inteligência: 11(+0)</Text>
                    <Text style={styles.texto}>Sabedoria: 14(+2)</Text>
                    <Text style={styles.texto}>Carisma: 13(+1)</Text>

                    <Text style={styles.title}>Habilidades</Text>
                    <Text style={styles.texto}>História +3 Atletismo +6 Persuasão +4 Manejo de animais +5</Text>
                    
                    <Text style={styles.title}>Ações</Text>
                    <Text style={styles.texto}> Multi Ataque: O Guerreiro faz quatro ataques corpo a corpo ou quatro ataques à distância.</Text>

                    <Text style={styles.title}>Habilidades Especiais</Text>
                    <Text style={styles.texto}>Companheiro de cavalo: O cavaleiro tem um cavalo favorito e tem vantagem em qualquer manuseio de animais com ele.</Text>
                    <View style={{height: 10}}></View>
                    <Text style={styles.texto}>Um com sua montaria: o cavaleiro pode forçar um ataque ao alvo em sua montaria para mirar em si mesmo.</Text>

                    <Text style={styles.title}> Recursos de Raça</Text>
                    <Text style={styles.texto}>Modificadores de Habilidades: +1 para todos.</Text>
                    <Text style={styles.texto}>Idiomas: Fala o idioma comum e mais um.</Text>
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