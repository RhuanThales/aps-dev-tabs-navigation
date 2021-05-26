import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test icons!</Text>
      <FontAwesome name='user' size={40} color='blue'/>
      <FontAwesome name='home' size={40} color='green'/>
      <Feather name='gift' size={40} color='red'/>
      <TouchableOpacity style={styles.btnFacebook}>
        <FontAwesome
          name='facebook'
          size={25}
          color='white'
        />
        <Text style={styles.btnText}>Access Facebook</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFacebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4664A5',
    borderRadius: 5,
  },
  btnText : {
    color: '#FFF',
    paddingLeft: 10
  }
});
