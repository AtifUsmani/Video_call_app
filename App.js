import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './screens/Home'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
