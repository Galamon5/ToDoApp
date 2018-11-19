/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
<<<<<<< HEAD
  ActivityIndicator,
=======
>>>>>>> c828cf18b21f7efe6b74ad36c009b986ad427501
} from 'react-native';
import Tarea from './Tarea';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
      {this.props.cargando &&
      <ActivityIndicator
        size='large'
        color='#400064'
      />
      }
=======
>>>>>>> c828cf18b21f7efe6b74ad36c009b986ad427501
        <FlatList
          data={this.props.tareas}
          renderItem={({ item }) => <Tarea item={item} eliminar={this.props.delete} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#8cd5ed',
  },
});
