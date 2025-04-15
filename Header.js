import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ count }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Top Food Outlets in Seattle</Text>
    <Text style={styles.count}>🍽️ Total: {count}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4511e',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  count: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
});

export default Header;
