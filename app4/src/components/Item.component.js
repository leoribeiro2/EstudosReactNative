import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Item extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View>
          <Image style={{height: 100, width: 100}} source={{uri: this.props.item.foto}} />
        </View>
        <View style={styles.info}>
          <Text style={styles.titulo}>{this.props.item.titulo}</Text>
          <Text style={styles.preco}>R$ {this.props.item.valor},00</Text>
          <Text>{this.props.item.local_anuncio}</Text>
          <Text style={styles.data}>{this.props.item.data_publicacao}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1
  },
  info: {
    paddingLeft: 20,
    paddingTop: 5,
    flex: 1
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  data: {
    fontSize: 10
  },
  preco: {
    fontSize: 15
  }
});