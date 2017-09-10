import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import Item from './Item.component'
import Axios from 'axios'

export default class ListaItens extends Component{
  constructor(props) {
    super(props);

    this.state = {
      listaItens: []
    }
  }

  componentWillMount() {
    Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => {
        this.setState({
          listaItens: response.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ScrollView>
        {this.state.listaItens.map(item => (<Item key={item.titulo} item={item}/>))}
      </ScrollView>
    )
  }
}