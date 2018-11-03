import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  stateText = (value) => {
    this.setState({ texto: value });
  };

  addTodo = () => {
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: String(Date.now()) }],
      texto: '',
    });
    console.log(this.state.tareas.length);
  }

  deleteTodo = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => (tarea.key !== id));
    this.setState({
      tareas: nuevasTareas,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header texto={this.state.texto} cambiarTexto={this.stateText} agregaTarea={this.addTodo} />
        <Body tareas={this.state.tareas} delete={this.deleteTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
