import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home'
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation'

export default function App() {
  // return <Navigation />
  return (
    // <Home />
    <Navigation />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
