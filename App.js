import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      cargando: true,
    };
  }

  componentDidMount(){
    this.recuperarTelefono();
  }

  stateText = (value) => {
    this.setState({ texto: value });
  };

  addTodo = () => {
    const nuevasTareas = [...this.state.tareas, { texto: this.state.texto, key: String(Date.now()) }];
    this.guradarTelefono(nuevasTareas);
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: String(Date.now()) }],
      texto: '',
    });
    console.log(this.state.tareas.length);
  }

  deleteTodo = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => (tarea.key !== id));
    this.guradarTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
    });
  }
  guradarTelefono = (nuevasTareas) => {
    AsyncStorage.setItem('@app:tareas', JSON.stringify(nuevasTareas)).
    then((result)=> console.log(result)).catch((error)=>console.log(error));
  }
  recuperarTelefono = () => {
    AsyncStorage.getItem('@app:tareas').
    then((result)=> {
      console.log(result);
      this.setState({
        cargando: false,
      });
      if (result !== null ){
        this.setState({
          tareas: JSON.parse(result),
        });
      }
  }).
    catch((error)=>{
      console.log(error);
      this.setState({
        cargando: false,
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header texto={this.state.texto} cambiarTexto={this.stateText} agregaTarea={this.addTodo} />
        <Body tareas={this.state.tareas} delete={this.deleteTodo} cargando ={this.state.cargando} />
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
