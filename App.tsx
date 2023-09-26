/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar';

let itemsArray = new Array(9).fill('empty');

function App(): JSX.Element {
  const [winMessage, setWinMessage] = useState('');
  const [isCross, setIsCross] = useState(false);

  const restartGame = () => {
    setWinMessage('');
    setIsCross(false);
    itemsArray.fill('empty');
  };

  const changeItem = (index: number) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#E25E3E',
      });
    }

    if (itemsArray[index] !== 'empty') {
      return Snackbar.show({
        text: 'Position is already filled.',
        backgroundColor: '#C63D2F',
      });
    }

    if (isCross) {
      itemsArray[index] = 'cross';
      setIsCross(false);
    } else {
      itemsArray[index] = 'circle';
      setIsCross(true);
    }

    checkWinner();
  };

  const checkWinner = () => {
    const winingPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winingPattern.map(combination => {
      if (
        itemsArray[combination[0]] !== 'empty' &&
        itemsArray[combination[0]] === itemsArray[combination[1]] &&
        itemsArray[combination[0]] === itemsArray[combination[2]]
      ) {
        return setWinMessage(`${itemsArray[combination[0]]} won.`);
      }
    });

    if (itemsArray.every(item => item !== 'empty')) {
      return setWinMessage('Draw');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tic Tac Toe</Text>
      <View style={styles.grid}>
        {itemsArray.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => changeItem(index)}>
            <Icons name={item} />
          </TouchableOpacity>
        ))}
      </View>
      {winMessage ? (
        <View>
          <Text style={styles.winMessage}>{winMessage}</Text>
          <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
            <Text style={styles.restartText}>Restart Game</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.winMessage}>
            {isCross ? 'Cross' : 'Circle'} turn.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  text: {
    color: '#C63D2F',
    fontWeight: '600',
    fontSize: 35,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginVertical: 20,
  },

  box: {
    backgroundColor: '#E25E3E',
    margin: 5,
    width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderRadius: 5,
  },

  winMessage: {
    color: '#E25E3E',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },

  restartButton: {
    backgroundColor: '#E25E3E',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },

  restartText: {color: '#fff', fontSize: 20},
});

export default App;
