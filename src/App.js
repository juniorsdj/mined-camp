import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import params from './params'
import Field from './components/field'

import MineField from './components/mineField'
import { createMinedBoard, cloneBoard, openField, hadExploded, wonGame, showMines } from './logics'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }



  minesAmount = () => {
    const cols = params.getColunmnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.dificultLevel)
  }
  createState = () => {
    const cols = params.getColunmnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExploded(board)
    const won = wonGame(board)
    if (lost) {
      showMines(board)
      Alert.alert('Ai que burro, dá zero pra ele')
    }

    if (won) {
      Alert.alert(`Parabéns, voce venceu`)
    }
    this.setState({ board, lost, won })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Iniciando o Mines</Text>
        <Text style={styles.welcome}>
          Tamanho da grade
            {params.getRowsAmount()} x {params.getColunmnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={
            this.onOpenField} />
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
  welcome: {
    color: 'white'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa'
  }
});
