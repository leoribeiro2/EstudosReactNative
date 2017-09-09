import React from 'react'
import { AppRegistry, View, Image, TouchableOpacity, Text, Alert } from 'react-native'

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.floor(Math.random() * 5);

  let frases = [];
  frases[0] = 'aaa';
  frases[1] = 'bbb';
  frases[2] = 'ccc';
  frases[3] = 'ddd';
  frases[4] = 'eee';

  let fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);

};

const App = () => {
    const { principal, botao, textoBotao } = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  )
};

AppRegistry.registerComponent('app2', () => App);