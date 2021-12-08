import React from 'react';
import AppBarTab from './AppBarTab';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    paddingLeft: 20,
    paddingRight: 20,
    height: 100,
    justifyContent: 'center'
  }
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
  </View>;
};

export default AppBar;