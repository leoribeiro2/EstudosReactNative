import React from 'react'
import { Text, AppRegistry, View, Button } from 'react-native'

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.floor(Math.random()*10);
  alert(numeroAleatorio);
};

const App = () => {
    return (
        <View>
          <Text>Meu Primeiro APP</Text>
          <Button
              title="Gerador de Numeros Randomicos!!"
              onPress={geraNumeroAleatorio}/>
        </View>
    );
};

AppRegistry.registerComponent('app1', () => App);