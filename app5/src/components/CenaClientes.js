import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import BarraNavegacao from './BarraNavegacao'

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#9ec75c" />
        <BarraNavegacao bgColor="#9ec75c" />
        <View style={styles.nossoCliente}>
          <Image source={detalheClientes}/>
          <Text style={styles.txtnossoCliente}>Nossos Clientes</Text>
        </View>
        <View style={styles.conteudo}>
          <Image source={cliente1}/>
          <Text style={styles.txtMenu}>Loren Ipsun Doleores</Text>
        </View>
        <View style={styles.conteudo}>
          <Image source={cliente2}/>
          <Text style={styles.txtMenu}>Loren Ipsun Doleores</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nossoCliente: {
    flexDirection: 'row',
    marginTop: 10
  },
  txtnossoCliente: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,
    color: '#9ec75c'
  },
  conteudo: {
    marginTop: 40,
    marginLeft: 20
  },
  txtMenu: {
    marginLeft: 20,
    fontSize: 18
  }
});

