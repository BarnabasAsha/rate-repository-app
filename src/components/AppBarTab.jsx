import React from "react";
import { Text, StyleSheet } from "react-native";
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    marginRight: 10
  }
})

const AppBarTab = ({ children, url }) => {
    return (
          <Link to={url}>
             <Text style={styles.text}>{children}</Text>
          </Link>
    )
}

export default AppBarTab