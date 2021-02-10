import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Icon
} from 'native-base';
import Ionicons from 'react-native-vector-icons';
import Routes from '../Routes';
import Botao from '../components/Botao'
import mainDrawer from '../Routes'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerOpen from '../Routes';

const customDrawer = (props) => (
    <Container style={styles.drawer}>
        <Header style={styles.header}>

        </Header>
    </Container>
)

const styles = StyleSheet.create({
    drawer: {
        height: '100%',

        backgroundColor: '#403F4C'
    },
    header: {
        height: 50
    }
})


export default customDrawer;