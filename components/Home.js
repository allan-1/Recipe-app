import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import image from './images/undraw_cooking_lyxy.png';

function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.introtext}>30k + Recipes</Text>
      <Text style={styles.text}>Happy</Text>
      <Text style={styles.text}>Cooking</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  introtext: {
    color: 'red',
    marginLeft: 50,
    fontSize: 13,
  },
  button: {
    marginTop: 6,
    marginLeft: 50,
    backgroundColor: 'yellow',
    width: 130,
    borderRadius: 25,
    padding: 13,
    textAlign: 'center',
  },
  buttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 390,
    height: 500,
  },
});
export default Home;
