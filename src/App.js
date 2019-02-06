import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import params from './params'
import Field from './components/field'

import MineField from './components/mineField'
import {createMinedBoard} from './logics'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }



  minesAmount = () =>{
    const cols = params.getColunmnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.dificultLevel)
  }
  createState = () =>{
    const cols = params.getColunmnsAmount()
    const rows = params.getRowsAmount()
    return{
      board: createMinedBoard(rows, cols, this.minesAmount())
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}> Iniciando o Mines</Text>
           <Text style={styles.introductions}> 
            Tamanho da grade
            {params.getRowsAmount()} x {params.getColunmnsAmount()}
          </Text>
          <View style={styles.board}>
              <MineField board={this.state.board}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  board:{
    alignItems: 'center',
    backgroundColor: '#aaa'
  }
});
