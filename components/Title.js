import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipes</Text>
      <Text style={styles.text}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
});

export default Title;
