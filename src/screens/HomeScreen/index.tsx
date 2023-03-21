import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.homeTitle}>Home, sweet home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeTitle: {
    fontSize: 32,
    alignSelf: 'center',
  },
});

export default HomeScreen;
