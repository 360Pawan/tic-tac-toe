/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {PaperProvider, Text, Button} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Text variant="headlineSmall" >Hola</Text>
      <Button mode="contained-tonal">Press me</Button>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
