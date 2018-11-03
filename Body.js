/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import Tarea from './Tarea';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
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
