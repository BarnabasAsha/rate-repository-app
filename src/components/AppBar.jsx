import React from 'react';
import AppBarTab from './AppBarTab';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    paddingLeft: 20,
    paddingRight: 20,
    height: 100
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal>
        <AppBarTab url="/">Repositories</AppBarTab>
        <AppBarTab url="/signin">
          Signin
        </AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;