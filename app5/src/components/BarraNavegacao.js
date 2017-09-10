import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
      <View style={styles.titulo}>
        <Text style={styles.txtTitulo}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titulo: {
    backgroundColor: '#ccc',
    padding: 10,
    height: 60
  },
  txtTitulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
})

