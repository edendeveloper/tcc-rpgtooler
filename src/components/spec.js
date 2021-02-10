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
import Botao from '../components/Botao';
import Constants from 'expo-constants';
import { Picker } from 'native-base';

export default class Spec extends Component {
    render(){
        return(
            <React.fragment>
            <Text style={styles.title}>
                Classe   
            </Text>
            <View style={styles.picker}>
                <Picker>
                    <Picker.item label="Mago" value="classMago"/>
                    <Picker.item label="Caçador" value="classCacador"/>
                </Picker>
            </View>
            </React.fragment> 
        );
        }
}