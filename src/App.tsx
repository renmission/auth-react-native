/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// UI ONLY

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
