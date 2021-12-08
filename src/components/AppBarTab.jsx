import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff'
  }
})

const AppBarTab = ({ children }) => {
    return (
        <Pressable>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default AppBarTab