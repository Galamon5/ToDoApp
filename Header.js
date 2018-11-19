/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Ingresa las tareas</Text>
        <TextInput
          style={styles.text}
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregaTarea}
          placeholder="Escribe"
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b867b',
  },
  text: {
    fontSize: 24,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 30,
    color: 'white',
  },
});
