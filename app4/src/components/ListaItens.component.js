import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Itens from './Itens.component'
import Axios from 'axios'

export default class ListaItens extends Component{
  componentWillMount() {
    Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  render(){
    console.log('redenrizou');
    return(
      <View>
        <Itens></Itens>
        <Itens></Itens>
        <Itens></Itens>
      </View>
    )
  }
}