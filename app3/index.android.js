
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text,
  View,
  StyleSheet
} from 'react-native';
import Topo from './src/components/Topo.component'
import Icone from './src/components/Icone.component'

class app3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaDoUsuario: '',
      escolhaDoComputador: '',
      resultado: ''
    }
  }

  jokenpo(escolhaDoUsuario){
    const numero = Math.floor(Math.random() * 3);
    let escolhaDoComputador = '';
    switch (numero){
      case 0: escolhaDoComputador = 'pedra'; break;
      case 1: escolhaDoComputador = 'papel'; break;
      case 2: escolhaDoComputador = 'tesoura'; break;
      default: escolhaDoComputador = '';
    }
    let resultado = '';
    if (escolhaDoComputador === 'pedra') {
      if(escolhaDoUsuario === 'papel') resultado = 'Você Perdeu';
      if(escolhaDoUsuario === 'pedra') {
        resultado = 'Empatou';
      } else {
        resultado = 'Você Ganhou'
      }
    }
    if (escolhaDoComputador === 'papel') {
      if(escolhaDoUsuario === 'pedra') resultado = 'Você Perdeu';
      if(escolhaDoUsuario === 'papel') {
        resultado = 'Empatou';
      } else {
        resultado = 'Você Ganhou'
      }
    }
    if (escolhaDoComputador === 'tesoura') {
      if(escolhaDoUsuario === 'papel') resultado = 'Você Perdeu';
      if(escolhaDoUsuario === 'tesoura'){
        resultado = 'Empatou';
      } else {
        resultado = 'Você Ganhou'
      }
    }
    this.setState({escolhaDoUsuario, escolhaDoComputador, resultado})
  }

  render() {
    return (
      <View>
        <Topo/>
        <View style={styles.painelAcoes}>
          <View  style={styles.btnEscolha}>
            <Button title="Pedra" onPress={() => this.jokenpo('pedra')}/>
          </View>
          <View  style={styles.btnEscolha}>
            <Button title="Papel" onPress={() => this.jokenpo('papel')}/>
          </View>
          <View  style={styles.btnEscolha}>
            <Button title="Tesoura" onPress={() => this.jokenpo('tesoura')}/>
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaDoComputador} jogador='Computador'/>
          <Icone escolha={this.state.escolhaDoUsuario} jogador='Usuário'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  palco: {
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('app3', () => app3);
