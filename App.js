import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from './components/Title';
import Home from './components/Home';

function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
});

export default App;
