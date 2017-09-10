import Navigator from 'react-native-deprecated-custom-components'
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'

export default class app5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={}
        renderScene={(route, navigator) => {

        }}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
