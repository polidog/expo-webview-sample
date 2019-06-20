import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LocalHtmlView from './components/LocalHtmlView'

export default function App() {
  return (
    <View style={styles.container}>
      <LocalHtmlView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
  }
})
