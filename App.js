import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Title from './components/Title';
// import Home from './components/Home';
import Recipes from './components/Recipes';

function App() {
  return (
    <View style={styles.container}>
      <Recipes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
});

export default App;
